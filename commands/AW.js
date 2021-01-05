module.exports = {
	name: 'st',
	description: 'tired star',
	execute(message) {
        const user = message.mentions.users.first();
        message.delete({ timeout: 1, reason: 'It had to be done.' });
		message.channel.send(`%zhara +star TIRED. good job ${user}`);
	},
};
