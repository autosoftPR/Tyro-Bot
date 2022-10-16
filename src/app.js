// Require the necessary discord.js classes
const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else {
    if (commandName === 'server') {
      await interaction.reply('Server info.');
    } else {
      if (commandName === 'user') {
        await interaction.reply('User info.');
      } else {
        if (commandName === 'developers') {
          await interaction.reply('autosoftPR');
        }
      }
    }
  }
})

// Login to Discord with your client's token
client.login(token);