const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");

module.exports = {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        description: ".",
     async execute(client, message, args)  {

        const embed = new MessageEmbed()

        
            .setColor('RANDOM')
            .setAuthor(`ULTRON COMMANDS`, client.user.avatarURL())
            .setDescription(`**ULTRON's Prefix Is \`${prefix}\`\n\n -\n\`${prefix}help [command name] Or ${prefix}help [alias]\`**`)
            embed.setFooter(`${message.guild.me.displayName} | Total Commands - ${client.commands.size - 1} Loaded`, client.user.displayAvatarURL());
            embed.addField('Moderation [4] - `kick`,`ban`,`mute`,`unmute`,`purge`')
        embed.setImage('https://cdn.discordapp.com/attachments/727396338995822652/814783634618712082/standard_1.gif')
            embed.setTimestamp()
            

            return message.channel.send(embed)
    }
}