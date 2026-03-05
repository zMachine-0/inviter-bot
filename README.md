# Discord Invite Tracker Bot

A lightweight **Discord invite tracking bot** built with **discord.js v14**.
Tracks who invited members, handles rejoins/leaves, shows leaderboards, and logs invite activity.

This bot stores invite data locally using JSON files and works across multiple guilds.

---

# Features

* Accurate invite tracking using Discord invite cache comparison
* Invite leaderboards
* Invite breakdown statistics
* Rejoin / leave tracking
* Vanity URL detection
* Invite event logging
* Admin invite management
* Owner-only guild management panel
* Command cooldown system
* JSON-based persistent storage
* Invite panel system

---

# Commands

## User Commands

### `/invites`

Shows invite count for a user.

Optional parameter:

* `user` – view another user's invites

Displays:

* current invites
* total joined
* total left
* rejoin count

---

### `/inviter`

Shows who invited a specific member.

Parameter:

* `member`

---

### `/invitebreakdown`

Shows detailed invite statistics.

Includes:

* total invites
* valid invites
* leaves
* rejoins
* fake invites

---

### `/inviteleaderboard`

Displays the **top inviters in the server**.

Shows:

* invite count
* joins
* leaves
* rejoins

---

### `/vanitycheck`

Checks if the server has a **vanity invite URL**.

---

### `/ping`

Shows bot latency.

---

# Admin Commands

Requires **Administrator permission**.

### `/invitelogs`

Sets a channel for invite event logs.

Example:

```
/invitelogs channel:#invite-logs
```

---

### `/resetallinvites`

Deletes **all invite data for the server**.

---

### `/resetinvites`

Resets invites for a specific user.

---

### `/addinvites`

Adds invites to a user.

Example:

```
/addinvites user:@user amount:5
```

---

### `/removeinvites`

Removes invites from a user.

---

### `/exportinvites`

Exports all invite data.

---

### `/invitespanel`

Creates an invite panel message in a channel.

---

# Owner Commands

These commands are restricted to **BOT_OWNER_IDS**.

### `/botguilds`

Shows all guilds the bot is in.

Features:

* paginated UI
* guild information
* member counts
* automatic invite link generation
* cached invite links
* refresh button

---

# Invite Logging

When enabled, the bot logs events such as:

* member joined
* member left
* member rejoined
* inviter information
* vanity URL joins

Example log:

```
Member Joined
User: ExampleUser
Invited by: @User
```

---

# Data Storage

The bot stores data locally in JSON files.

### `invitedata.json`

Stores:

* invite counts
* user history
* leave counts
* log channels

---

### `guild_invites.json`

Stores cached server invite links for `/botguilds`.

---

# Invite Tracking System

Discord does **not directly provide which invite was used**.

This bot solves it by:

1. Caching all invites on startup
2. Monitoring invite usage changes
3. Comparing invite use counts when a member joins

This allows accurate inviter detection.

---

# Installation

## 1 Install Dependencies

```
npm install discord.js
```

---

## 2 Configure Bot

Edit the top of the script:

```
const TOKEN = 'BOT_TOKEN_HERE';
const CLIENT_ID = 'BOT_CLIENT_ID';
const BOT_OWNER_IDS = ['YOUR_USER_ID'];
```

---

## 3 Enable Required Intents

In the Discord Developer Portal enable:

* View Channels
* Send Messages
* Embed Links
* Read Message History
* Manage Server
* Create Instant Invite

---

## 4 Run Bot

```
node bot.js
```

---

# Required Bot Permissions

The bot needs:

* View Channels
* Send Messages
* Embed Links
* Read Message History
* Manage Guild Invites
* Create Instant Invite

---

# Project Structure
```
├ bot.js
├ invitedata.json
├ guild_invites.json
└ package.json
```

---

# Performance Notes

The bot is optimized to be lightweight:

* Uses Map caching instead of large objects
* Saves data asynchronously
* Automatic periodic saves
* Minimal memory usage

---

# Security Notes

Never commit your bot token.


---


# Contributing

Pull requests are welcome.

You can improve:

* database support
* dashboard system
* invite rewards
* analytics
