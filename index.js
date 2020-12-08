const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот ' + bot.user.tag);
})

bot.on('message', message => {
    if(message.content == '!poop') message.channel.send('fuck it`s  English');
    if(message.content == 'ru') message.channel.send('nope');
   
})

bot.login('NzI0MTc3NjE2MzU3MDMxOTQ2.Xu8Y9g.hMIglSrcte3z1B2RBKFlotenq2k');