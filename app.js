// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const wait = require('node:timers/promises').setTimeout;
const { Client, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
    await wait(4000);
    await interaction.editReply('Pong again!')
  } else {
    if (commandName === 'server') {
      await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    } else {
      if (commandName === 'user') {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`);
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