# Discord Invite Tracker Bot

A lightweight **Discord invite tracking bot** built with **discord.js v14**.
Tracks who invited members, handles rejoins and leaves, shows leaderboards, and logs invite activity.

Stores all invite data locally in JSON files and works across multiple guilds.

---

# Features

* Accurate invite tracking using Discord invite cache comparison
* Invite leaderboard
* Detailed invite breakdown statistics
* Rejoin and leave tracking
* Vanity URL detection
* Invite event logging
* Admin invite management
* Owner-only guild management panel
* Command cooldown system
* JSON-based persistent storage
* Invite panel embeds

---

# Commands

## User Commands

### `/invites`

Shows invite count for a user.

Optional parameter:

* `user` – view another user's invites instead of your own

Displays:

* current invite count
* total members joined
* total members left
* rejoin count

---

### `/inviter`

Shows who invited a specific member.

Parameter:

* `member` – the member to look up

---

### `/invitebreakdown`

Shows a detailed invite breakdown for a user.

Includes:

* total invites
* valid invites
* leaves
* rejoins
* fake invites

---

### `/inviteleaderboard`

Shows the **top 10 inviters** in the server.

Displays for each user:

* invite count
* total joins
* total leaves
* rejoin count

---

### `/vanitycheck`

Checks whether the server has a vanity invite URL and shows it if it does.

---

### `/ping`

Shows the bot's current WebSocket latency.

---

## Admin Commands

Requires **Administrator permission**.

### `/invitelogs`

Sets a channel to log invite events in.

Example:

```
/invitelogs channel:#invite-logs
```

---

### `/resetallinvites`

Wipes **all invite data** for the server. Asks for confirmation before proceeding.

---

### `/resetinvites`

Resets invite data for a specific user.

Parameter:

* `user` – the user to reset

---

### `/addinvites`

Manually adds invites to a user.

Example:

```
/addinvites user:@User amount:5
```

---

### `/removeinvites`

Manually removes invites from a user.

Example:

```
/removeinvites user:@User amount:3
```

---

### `/exportinvites`

Exports all invite data for the server in CSV format.

---

### `/invitespanel`

Sends an invite panel embed to a channel. Members can click a button to check their own invite count.

Parameter:

* `channel` – the channel to send the panel to

---

## Owner Commands

Restricted to user IDs listed in `BOT_OWNER_IDS`.

### `/botguilds`

Shows all guilds the bot is currently in.

Includes:

* guild name and ID
* member count
* invite link (auto-generated and cached)
* pagination buttons
* refresh button to regenerate invite links

---

# Invite Logging

When a log channel is set via `/invitelogs`, the bot will post an embed for every tracked event.

Events logged:

* member joined — shows who invited them
* member left — shows who originally invited them
* member rejoined — tracks rejoin count

Example log:

```
Member Joined
ExampleUser#0000 joined
Invited by: @User
```

Vanity URL joins are also tracked and will show as `Vanity URL` instead of an inviter.

---

# Data Storage

All data is saved locally in two JSON files.

### `invitedata.json`

Stores:

* invite counts per user
* member join/leave history
* who invited who
* log channel settings

### `guild_invites.json`

Stores cached invite links used by `/botguilds`.

Data is saved automatically every 5 minutes and on bot shutdown.

---

# How Invite Tracking Works

Discord doesn't tell you which invite a member used when they join. The bot works around this by:

1. Caching all active invites on startup
2. Fetching current invite usage when a member joins
3. Comparing use counts to find which invite was just used

This gives accurate inviter detection in most cases. Edge cases like simultaneous joins or deleted invites may result in an unknown inviter.

---

# Installation

## 1. Install Dependencies

```
npm install discord.js
```

---

## 2. Configure the Bot

Open `index.js` and fill in your details at the top of the file:

```js
const TOKEN = 'BOT_TOKEN_HERE';
const CLIENT_ID = 'BOT_CLIENT_ID';
const BOT_OWNER_IDS = ['YOUR_USER_ID'];
```

---

## 3. Enable Required Intents

In the [Discord Developer Portal](https://discord.com/developers/applications), go to your bot's settings and enable:

* Server Members Intent
* Message Content Intent

Guild Invites is not a privileged intent and does not need to be toggled manually.

---

## 4. Run the Bot

```
node index.js
```

---

# Required Bot Permissions

The bot needs the following permissions in your server:

* View Channels
* Send Messages
* Embed Links
* Read Message History
* Manage Server
* Create Instant Invite

---

# Project Structure

```
invite-tracker/
├── index.js
├── invitedata.json
├── guild_invites.json
└── package.json
```

---

# Notes

* The bot uses in-memory Maps for fast lookups and only writes to disk when data changes or on a 5 minute interval
* Invite counts will never go below 0
* The `/resetallinvites` command has a confirmation step to prevent accidental wipes
* Never commit your bot token — use a `.env` file or environment variables if deploying

---

# License

MIT License

Copyright (c) 2026 zMachine-0

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

---

# Contributing

Pull requests are welcome. Feel free to open an issue if you find a bug or want to suggest a feature.
