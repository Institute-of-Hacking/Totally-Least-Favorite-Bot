module.exports = {
	name: 'sauce',
	description: 'fuck off zcj',
	execute(message, args) {
        var sauce =(Math.floor(Math.random()*899999)+100000);
        message.channel.send(`https://nhentai.net/g/${sauce}/ --- ${sauce}`)
    }
}