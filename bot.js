const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// status
client.user.setStatus('dnd')

// game and streaming
static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Surveilling";
    discordPresence.details = "https://planetzeu.net/";
    discordPresence.largeImageKey = "web";
    discordPresence.largeImageText = "Planet Z EU";
    discordPresence.smallImageKey = "ppb";
    discordPresence.partyId = "nahh";
    discordPresence.joinSecret = "nah";
    Discord_UpdatePresence(&discordPresence);
}
