const Discord = require('discord.js');
const config = require('./config.json');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://legend:julka613@ultronbots.snwtm.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('connected to mongo db!'))




const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '*';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('ULTRON is online!');
    client.user.setActivity(`*help |  ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)}  Users`, { type: 'LISTENING' });
    client.guilds.cache.size // Total Servers
    client.channels.cache.size //Total Channels
    client.guilds.cache.reduce((users, value) => users + value.memberCount, 0); // Total Users
});


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'purge') {
        client.commands.get('purge').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(client, message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(client, message, args);
    } else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command == 'addrole') {
        client.commands.get('addrole').execute(client, message, args);
    } else if (command == 'ping') {
        client.commands.get('ping').execute(client, message, args);
    } else if (command == 'stealemoji') {
        client.commands.get('stealemoji').execute(client, message, args);
    } else if (command == 'avatar') {
        client.commands.get('avatar').execute(client, message, args);
    } else if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(client, message, args);
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
    } else if (command == 'userinfo') {
        client.commands.get('userinfo').execute(client, message, args);
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
    } else if (command == 'help') {
        const { MessageEmbed } = require('discord.js');
        const embed = new Discord.MessageEmbed()




            .setColor('RANDOM')
            .setAuthor(`ULTRON COMMANDS`, client.user.avatarURL())
            .setDescription(`**ULTRON's Prefix Is \`${prefix}\`**`)
        embed.setFooter(`${message.guild.me.displayName} | Total Commands - ${client.commands.size - 1} Loaded`, client.user.displayAvatarURL());
        embed.addField('Moderation [4] - `kick`,`ban`,`mute`,`unmute`,`purge`')
        embed.setImage('https://cdn.discordapp.com/attachments/727396338995822652/814783634618712082/standard_1.gif')
        embed.setTimestamp()


        return message.channel.send(embed)
    }
});

client.login(config.token);