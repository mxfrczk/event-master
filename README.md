Features

Event Master system (m.event) for triggering random events.

Admin-only commands for secure control.

Uses .env for secure storage of bot token and admin ID.

Ready-to-use with minimal setup.

Requirements

Node.js v18+

I need a Discord bot token. The Discord bot token is very important, for my project. I have to get the Discord bot token to make my bot work. Where can I find the Discord bot token? I want to know how to get the Discord bot token.

Discord server with permissions for the bot

Setup

Clone the repository:

git clone <repo-url>

cd <repo-folder>

Install dependencies:

npm install

Create a .env file in the root folder:

DISCORD_TOKEN=YOUR_BOT_TOKEN

ADMIN_ID=YOUR_DISCORD_ID

Run the bot:

node index.js

In Discord, use the command:

m.event

The person in charge which is the admin and that is you, with your Discord ID is the one who can make these random events happen.

Adding New Events

Add new events to the events array in index.js with the following structure:

{

name: 'eventName',

execute: async (message) => {

// your event logic

}

}

License

MIT License
