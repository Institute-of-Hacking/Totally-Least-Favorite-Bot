module.exports = {
	name: 'ban',
	description: 'bans people duh',
	execute(message, args) {
		if(!message.member.hasPermission(["ADMINISTRATOR"]) || !message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You can't use this")
		if (!args[0])message.reply('You need to specify a user!');
		
		const user = message.mentions.users.first();
		
		if(user){
			const member = message.guild.member(user);
			if(member){
				member.ban(`You were banned By ${message.author.tag} in ${message.guild.name}\n You were banned for ${reason}`).then(() =>{
				 message.channel.send(`\* ${message.author} was sucessfully banned we dont have to worry about them anymore`);
				}).catch(err =>{
					message.channel.send(`\* ${message.author} i could not ban ${user.tag}.`);
					console.log(err);
				});
			} else{
				message.reply('Thet user does not exist in this guild')
				
			}
		} else {
			message.reply('either you mentioned nobody or they are not in this guild');
		}
	},
};