const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: "This command shows info about the server",
   execute(client, message, args){
    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s information`)
    .addField("Owner", `The owner of this server is ${message.guild.owner}`)
    .addField("Member Count", `This server has ${message.guild.memberCount} members`)
    .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
    .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
    

message.channel.send(embed);
        
    }
}