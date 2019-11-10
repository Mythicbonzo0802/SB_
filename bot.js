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

// status
client.setStatus('Online') // 'Online', 'idle', 'invisible' & 'dnd'

// Spil & Stream status
client.setGame('Suveilling the halls') // For stream: bot.user.setGame('Titel', 'twitch.tv/mythicbonzo0802') 
    
client.on('message', message => {
    if (message.content === 'nigger') {
    	message.reply('no u');
  	}    
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
