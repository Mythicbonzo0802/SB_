const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    setGame('surveilling')
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
    
client.on('message', message => {
    if (message.content === 'nigger') {
    	message.reply('no u');
  	}    
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);



  bot.user.setGame('GAME HERE')
