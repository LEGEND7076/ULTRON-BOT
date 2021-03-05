module.exports = {
    name: 'ban',
    description: "This command bans a member!",
  execute(messages, args){
        const member = messages.mentions.users.first();
        if(member){
            const memberTarger = messages.guild.members.cache.get(member.id);
            memberTarger.ban();
            messages.channel.send("User has been banned"); 
        }else{
            messages.channel.send('You couldnt ban that member');
        }
    }
}