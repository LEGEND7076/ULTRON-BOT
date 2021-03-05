const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Displays avatar of a user',
    execute(client, message, args){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Avatar`)
        .setDescription(`Displaying ${member}'s avatar`)
        .setImage(member.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
    return message.channel.send(embed)
    }
}