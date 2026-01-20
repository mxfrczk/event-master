require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const PREFIX = 'm.';
const ADMIN_ID = process.env.ADMIN_ID;

// --- Event Master ---
const events = [
    {
        name: 'randomPing',
        execute: async (message) => {
            await message.channel.send('Ping!');
        }
    },
    {
        name: 'randomQuote',
        execute: async (message) => {
            const quotes = [
                'Do not put off until tomorrow what you can do today.',
                'Seize the day.',
                'Programming is like magic, it just works.'
            ];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            await message.channel.send(randomQuote);
        }
    },
    {
        name: 'randomMessage',
        execute: async (message) => {
            await message.channel.send('This is a random event message.');
        }
    }
];

// --- Events Discord ---
client.once('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'event') {
        if (message.author.id !== ADMIN_ID) {
            return message.reply('You do not have permission to use this command.');
        }

        const randomEvent = events[Math.floor(Math.random() * events.length)];
        await randomEvent.execute(message);
        console.log(`Admin triggered event: ${randomEvent.name}`);
    }
});

client.login(process.env.DISCORD_TOKEN);
