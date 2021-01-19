const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const colors = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('I HAVE STARTED (:!');
client.user.setActivity('You', { type: 'WATCHING' });
});
client.on('shardError', error => {
	 var data =`A websocket connection encountered an error: ${error}`
	 var today = new Date();
	 var date = 'Y-M-D-H-'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours()+'-CST';
	 logwrite = `\n${data}`
	 fs.appendFile(`./logs/${date}-ERROR.txt`, logwrite, function (err) {
		 if (err) throw err;
		 console.log(`${date} --==|==-- ${data}`)
	 });
});
process.on('unhandledRejection', error => {
	var data =`Unhandled promise rejection: ${error}`
	var today = new Date();
	var date = 'Y-M-D-H-'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours()+'-CST';
	logwrite = `\n${data}`
	fs.appendFile(`./logs/${date}-ERROR.txt`, logwrite, function (err) {
		if (err) throw err;
		console.log(`${date} --==|==-- ${data}`)
	});
});
client.on('message', message => {

/*	if (message.author.id === '400371583358599171') {
		message.author.send('you are banned from the bot')
		return
	}*/



	var data = `${message.author.tag} >> ${message.author.id} => ${message.content}`;
	var today = new Date();
	var date = 'Y-M-D-H-'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getHours()+'-CST';
	logwrite = `\n${data}`
	fs.appendFile(`./logs/${date}.txt`, logwrite, function (err) {
		if (err) throw err;
		console.log(`${date} --==|==-- ${message.author.tag} >> ${message.author.id} => ${message.content}`)
	});
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
 console.log(`command executed --- '${message.content}' user '${message.author.id} ${message.author.tag}' `);
 	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.login(token);
