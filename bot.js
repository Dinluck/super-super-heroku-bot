const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on(‘message’, message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(‘delete’)) {
        message.channel.sendMessage(‘Привет я БОТ!’);
     }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
