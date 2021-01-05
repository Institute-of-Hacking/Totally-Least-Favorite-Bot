module.exports = {
	name: '**poots**',
	description: 'speaks as you',
	execute(message, args) {
        message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`\* ${message.author} poots`);
	},
};