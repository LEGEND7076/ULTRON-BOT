module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(messages, args){
        const member = messages.mentions.users.first();
        if(member){
            const memberTarger = messages.guild.members.cache.get(member.id);
            memberTarger.kick();
            messages.channel.send("User has been kicked"); 
        }else{
            messages.channel.send('You couldnt kick that member');
        }
    }
}