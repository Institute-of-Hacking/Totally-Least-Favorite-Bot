module.exports = {
	name: 'send',
	description: 'fuck off zcj',
	execute(message, args) {
        message.delete({ timeout: 1, reason: 'Message command from Bot' });
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
        var MessageTo = message.mentions.users.first();
        if (!user) {
            message.author.send("No recipient specified to specify a recipient mention them in you message like this @user")
        }
        else if (!args[1]) {
            message.author.send("you need to type a message to send")
        } 
        else {
            let Message = args.slice(1).join(" ")
            console.log(`Spy: From: "${message.author.tag}" To "${user.user.tag}" =>  ${Message}`)
            user.user
            .send(`From: ${message.author.tag} Message: ${Message}`)
            .catch(() => message.author.send("An error occured while messaging that user"))
            .then(() => message.author.send(`Sent a message to ${user.user.tag}`))
        }
        
    }
}