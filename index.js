require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);
bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
  bot.user.setActivity("!help");
});

bot.on('message', msg => {
    if (msg.content === '!help') {
        msg.reply('help: if you need help, email alex.evans@gm.fsd38.ab.ca.');
        msg.channel.send('help:  if you need help, email alex.evans@gm.fsd38.ab.ca.');
} else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
        msg.reply('Please tag a valid user!');
    }
}
});
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg, args) {
        msg.reply('pong');
        msg.channel.send('pong');
    },
};
const keep_alive = require('./keep_alive.js')
