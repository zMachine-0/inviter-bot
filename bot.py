"""
Discord Invite Tracker Bot

Language Choice: Python
Reason: Python with discord.py is the best choice because:
- discord.py is mature, well-maintained, and has excellent Discord API coverage
- Built-in async/await support for handling concurrent Discord events
- Clean, readable syntax reduces bugs in tracking logic
- Rich ecosystem and extensive documentation
- Easy deployment and maintenance

Required Environment Variables:
- DISCORD_TOKEN: Your bot token from Discord Developer Portal
- DISCORD_CLIENT_ID: Your application/client ID from Discord Developer Portal

Setup:
1. pip install discord.py python-dotenv
2. Create a .env file with your credentials
3. python bot.py
"""

import discord
from discord import app_commands
from discord.ext import commands
import os
from dotenv import load_dotenv
from typing import Optional, Dict
from collections import defaultdict

# Load environment variables
load_dotenv()

DISCORD_TOKEN = os.getenv('DISCORD_TOKEN')
DISCORD_CLIENT_ID = os.getenv('DISCORD_CLIENT_ID')

# Debug: Check if variables are loaded
if not DISCORD_TOKEN:
    raise ValueError("DISCORD_TOKEN environment variable is required. Check your .env file.")
if not DISCORD_CLIENT_ID:
    raise ValueError("DISCORD_CLIENT_ID environment variable is required. Check your .env file.")

# Debug: Verify token format
if DISCORD_TOKEN:
    print(f"Token loaded: {DISCORD_TOKEN[:10]}... (length: {len(DISCORD_TOKEN)})")
else:
    print("ERROR: Token is empty!")

# Orange color for all embeds
EMBED_COLOR = 0xFF8C00

# Bot setup
intents = discord.Intents.default()
intents.members = True
intents.invites = True

bot = commands.Bot(command_prefix='!', intents=intents)


class InviteTracker:
    """Manages invite tracking data for all guilds"""
    
    def __init__(self):
        # Map: guild_id -> {invite_code: {'uses': int, 'inviter_id': int}}
        self.invite_cache: Dict[int, Dict[str, Dict]] = {}
        
        # Map: guild_id -> {user_id: total_invites}
        self.inviter_counts: Dict[int, Dict[int, int]] = defaultdict(lambda: defaultdict(int))
        
        # Map: guild_id -> {member_id: inviter_id}
        self.member_inviters: Dict[int, Dict[int, int]] = defaultdict(dict)
        
        # Map: guild_id -> {member_id: {'inviter_id': int, 'left': bool, 'rejoin_count': int}}
        self.member_history: Dict[int, Dict[int, Dict]] = defaultdict(dict)
    
    async def cache_guild_invites(self, guild: discord.Guild):
        """Cache all invites for a guild"""
        try:
            invites = await guild.invites()
            invite_data = {}
            
            for invite in invites:
                invite_data[invite.code] = {
                    'uses': invite.uses or 0,
                    'inviter_id': invite.inviter.id if invite.inviter else None
                }
            
            self.invite_cache[guild.id] = invite_data
            print(f"Cached {len(invites)} invites for {guild.name}")
            
        except discord.Forbidden:
            print(f"Missing permissions to fetch invites in {guild.name}")
        except Exception as e:
            print(f"Error caching invites for {guild.name}: {e}")
    
    async def find_used_invite(self, guild: discord.Guild) -> Optional[Dict]:
        """Compare cached invites with current invites to find which was used"""
        try:
            current_invites = await guild.invites()
            cached = self.invite_cache.get(guild.id, {})
            
            for invite in current_invites:
                cached_invite = cached.get(invite.code)
                current_uses = invite.uses or 0
                
                if cached_invite and current_uses > cached_invite['uses']:
                    cached_invite['uses'] = current_uses
                    
                    return {
                        'code': invite.code,
                        'inviter_id': invite.inviter.id if invite.inviter else None
                    }
            
            # Update entire cache after checking
            for invite in current_invites:
                if invite.code in cached:
                    cached[invite.code]['uses'] = invite.uses or 0
            
            return None
            
        except Exception as e:
            print(f"Error finding used invite: {e}")
            return None
    
    def record_invite(self, guild_id: int, member_id: int, inviter_id: int):
        """Record that a member was invited by someone"""
        # Check if this is a rejoin
        if member_id in self.member_history[guild_id]:
            history = self.member_history[guild_id][member_id]
            if history.get('left', False):
                history['rejoin_count'] = history.get('rejoin_count', 0) + 1
                history['left'] = False
        else:
            self.member_history[guild_id][member_id] = {
                'inviter_id': inviter_id,
                'left': False,
                'rejoin_count': 0
            }
        
        self.member_inviters[guild_id][member_id] = inviter_id
        self.inviter_counts[guild_id][inviter_id] += 1
    
    def mark_as_left(self, guild_id: int, member_id: int):
        """Mark member as left without removing history"""
        if member_id in self.member_history[guild_id]:
            self.member_history[guild_id][member_id]['left'] = True
        
        inviter_id = self.member_inviters[guild_id].get(member_id)
        if inviter_id:
            if self.inviter_counts[guild_id][inviter_id] > 0:
                self.inviter_counts[guild_id][inviter_id] -= 1
            del self.member_inviters[guild_id][member_id]
    
    def get_invite_count(self, guild_id: int, user_id: int) -> int:
        """Get the number of active invites for a user"""
        return self.inviter_counts[guild_id][user_id]
    
    def get_inviter_info(self, guild_id: int, member_id: int) -> Optional[Dict]:
        """Get complete inviter information including leave/rejoin status"""
        return self.member_history[guild_id].get(member_id)
    
    def reset_invites(self, guild_id: int, user_id: int):
        """Reset all invites for a user"""
        self.inviter_counts[guild_id][user_id] = 0
    
    def add_invites(self, guild_id: int, user_id: int, amount: int):
        """Add invites to a user"""
        self.inviter_counts[guild_id][user_id] += amount
    
    def remove_invites(self, guild_id: int, user_id: int, amount: int):
        """Remove invites from a user (prevent negative)"""
        current = self.inviter_counts[guild_id][user_id]
        self.inviter_counts[guild_id][user_id] = max(0, current - amount)
    
    def update_invite_cache(self, guild_id: int, code: str, uses: int, inviter_id: Optional[int]):
        """Update a single invite in cache"""
        if guild_id not in self.invite_cache:
            self.invite_cache[guild_id] = {}
        
        self.invite_cache[guild_id][code] = {
            'uses': uses,
            'inviter_id': inviter_id
        }
    
    def remove_from_cache(self, guild_id: int, code: str):
        """Remove an invite from cache"""
        if guild_id in self.invite_cache:
            self.invite_cache[guild_id].pop(code, None)


# Initialize tracker
tracker = InviteTracker()


@bot.event
async def on_ready():
    """Bot startup - cache all invites"""
    print(f'Logged in as {bot.user.name} ({bot.user.id})')
    
    # Cache invites for all guilds
    for guild in bot.guilds:
        await tracker.cache_guild_invites(guild)
    
    # Sync slash commands
    try:
        synced = await bot.tree.sync()
        print(f'Synced {len(synced)} slash commands')
    except Exception as e:
        print(f'Failed to sync commands: {e}')
    
    print('Invite tracker is ready!')


@bot.event
async def on_guild_join(guild: discord.Guild):
    """Cache invites when bot joins a new server"""
    await tracker.cache_guild_invites(guild)


@bot.event
async def on_invite_create(invite: discord.Invite):
    """Update cache when a new invite is created"""
    tracker.update_invite_cache(
        invite.guild.id,
        invite.code,
        invite.uses or 0,
        invite.inviter.id if invite.inviter else None
    )


@bot.event
async def on_invite_delete(invite: discord.Invite):
    """Remove invite from cache when deleted"""
    tracker.remove_from_cache(invite.guild.id, invite.code)


@bot.event
async def on_member_join(member: discord.Member):
    """Track which invite was used when a member joins"""
    guild = member.guild
    
    used_invite = await tracker.find_used_invite(guild)
    
    if used_invite and used_invite['inviter_id']:
        tracker.record_invite(guild.id, member.id, used_invite['inviter_id'])
        print(f"{member.name} joined via invite from user {used_invite['inviter_id']}")
    else:
        print(f"{member.name} joined but inviter could not be determined")


@bot.event
async def on_member_remove(member: discord.Member):
    """Mark member as left when they leave the server"""
    tracker.mark_as_left(member.guild.id, member.id)
    print(f"{member.name} left the server")


# PUBLIC COMMANDS

@bot.tree.command(name="invites", description="Shows invite count for a user")
@app_commands.describe(user="The user to check (leave empty for yourself)")
async def invites(interaction: discord.Interaction, user: Optional[discord.User] = None):
    """Show how many people a user has invited"""
    target_user = user or interaction.user
    guild_id = interaction.guild_id
    
    invite_count = tracker.get_invite_count(guild_id, target_user.id)
    
    embed = discord.Embed(
        title="Invite Count",
        description=f"{target_user.mention} has invited **{invite_count}** member{'s' if invite_count != 1 else ''} to this server.",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=embed)


@bot.tree.command(name="inviter", description="Shows who invited a specific member")
@app_commands.describe(member="The member to check")
async def inviter(interaction: discord.Interaction, member: discord.User):
    """Show who invited a specific member"""
    guild_id = interaction.guild_id
    
    inviter_info = tracker.get_inviter_info(guild_id, member.id)
    
    embed = discord.Embed(
        title="Inviter Information",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    if inviter_info and inviter_info.get('inviter_id'):
        inviter_id = inviter_info['inviter_id']
        inviter_user = await bot.fetch_user(inviter_id)
        
        description = f"{member.mention} was invited by {inviter_user.mention}."
        
        if inviter_info.get('left', False):
            description += f"\n\n**Status:** Left the server"
        elif inviter_info.get('rejoin_count', 0) > 0:
            rejoin_count = inviter_info['rejoin_count']
            description += f"\n\n**Status:** Rejoined the server ({rejoin_count} time{'s' if rejoin_count != 1 else ''})"
        
        embed.description = description
    else:
        embed.description = f"Inviter unknown for {member.mention}."
    
    await interaction.response.send_message(embed=embed)


@bot.tree.command(name="ping", description="Shows the bot's latency")
async def ping(interaction: discord.Interaction):
    """Show bot latency"""
    latency_ms = round(bot.latency * 1000)
    
    embed = discord.Embed(
        title="Pong! 🏓",
        description=f"Latency: **{latency_ms}ms**",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=embed)


# ADMIN COMMANDS

@bot.tree.command(name="resetinvites", description="Reset all invite data for a user")
@app_commands.describe(user="The user to reset invites for")
@app_commands.default_permissions(administrator=True)
async def resetinvites(interaction: discord.Interaction, user: discord.User):
    """Reset all invites for a user (Admin only)"""
    guild_id = interaction.guild_id
    
    tracker.reset_invites(guild_id, user.id)
    
    embed = discord.Embed(
        title="Invites Reset",
        description=f"Successfully reset all invite data for {user.mention}.",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=embed)


@bot.tree.command(name="addinvites", description="Add invites to a user")
@app_commands.describe(user="The user to add invites to", amount="Number of invites to add")
@app_commands.default_permissions(administrator=True)
async def addinvites(interaction: discord.Interaction, user: discord.User, amount: int):
    """Add invites to a user (Admin only)"""
    if amount <= 0:
        await interaction.response.send_message("Amount must be a positive number.", ephemeral=True)
        return
    
    guild_id = interaction.guild_id
    tracker.add_invites(guild_id, user.id, amount)
    
    new_total = tracker.get_invite_count(guild_id, user.id)
    
    embed = discord.Embed(
        title="Invites Added",
        description=f"Added **{amount}** invite{'s' if amount != 1 else ''} to {user.mention}.\n\nNew total: **{new_total}**",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=embed)


@bot.tree.command(name="removeinvites", description="Remove invites from a user")
@app_commands.describe(user="The user to remove invites from", amount="Number of invites to remove")
@app_commands.default_permissions(administrator=True)
async def removeinvites(interaction: discord.Interaction, user: discord.User, amount: int):
    """Remove invites from a user (Admin only)"""
    if amount <= 0:
        await interaction.response.send_message("Amount must be a positive number.", ephemeral=True)
        return
    
    guild_id = interaction.guild_id
    tracker.remove_invites(guild_id, user.id, amount)
    
    new_total = tracker.get_invite_count(guild_id, user.id)
    
    embed = discord.Embed(
        title="Invites Removed",
        description=f"Removed **{amount}** invite{'s' if amount != 1 else ''} from {user.mention}.\n\nNew total: **{new_total}**",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=embed)


class InviteButton(discord.ui.View):
    """Button for invite panel"""
    
    def __init__(self):
        super().__init__(timeout=None)
    
    @discord.ui.button(label="click here!", style=discord.ButtonStyle.secondary, custom_id="invite_button")
    async def invite_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        """Show user's invite count when button is clicked"""
        guild_id = interaction.guild_id
        user_id = interaction.user.id
        
        invite_count = tracker.get_invite_count(guild_id, user_id)
        
        embed = discord.Embed(
            title="Your Invites",
            description=f"You have invited **{invite_count}** member{'s' if invite_count != 1 else ''} to this server.",
            color=EMBED_COLOR,
            timestamp=discord.utils.utcnow()
        )
        
        await interaction.response.send_message(embed=embed, ephemeral=True)


@bot.tree.command(name="invitespanel", description="Send an invite panel to a channel")
@app_commands.describe(channel="The channel to send the panel to")
@app_commands.default_permissions(administrator=True)
async def invitespanel(interaction: discord.Interaction, channel: discord.TextChannel):
    """Send invite panel with button (Admin only)"""
    embed = discord.Embed(
        description="click the button to see your invites!",
        color=EMBED_COLOR
    )
    
    view = InviteButton()
    
    await channel.send(embed=embed, view=view)
    
    confirm_embed = discord.Embed(
        title="Panel Sent",
        description=f"Invite panel has been sent to {channel.mention}.",
        color=EMBED_COLOR,
        timestamp=discord.utils.utcnow()
    )
    
    await interaction.response.send_message(embed=confirm_embed, ephemeral=True)


# Register persistent view on startup
@bot.event
async def setup_hook():
    """Add persistent view for invite button"""
    bot.add_view(InviteButton())


if __name__ == "__main__":
    bot.run(DISCORD_TOKEN)
