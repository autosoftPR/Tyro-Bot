// Require the necessary discord.js classes
const { Client, GatewayIntentBits, SlashCommandBuilder, Events, EmbedBuilder} = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { token } = require('./config.json');

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
      await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    } else {
      if (commandName === 'user') {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`);
      } else {
        if (commandName === 'developers') {
          await interaction.reply('autosoftPR');
        } else {
          if(commandName === 'version') {
            await interaction.reply('Bot version is in the early alpha tests');
          };
        };
      };
    };
  };
});


// Buttons
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'button') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
          .setLabel('Click Here')
					.setStyle(ButtonStyle.Link)
          .setURL('https://autosoft.netlify.app')
          .setDisabled(false)
			);

    // embeds
    const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Our members')
   
		await interaction.reply({ 
      content: 'I think you should,', 
      ephemeral: false, 
      embeds: [embed], 
      components: [row] 
    });
	} else {
    if (interaction.commandName = 'developer-ws') {
      const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Click Here')
          .setStyle(ButtonStyle.Link)
          .setURL('https://yasserfedsi.netlify.app')
          .setDisabled(false)
      );

      // embeds
      const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Developer website')

      await interaction.reply({
        content: 'Visit this',
        ephemeral: true,
        embeds: [embed],
        components: [row]
      });
    };
  };
});

// Login to Discord with your client's token
client.login(token);