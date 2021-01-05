module.exports = {
	name: 'roll',
	description: 'rolls dice',
	execute(message, args) {
        var roll =(Math.floor(Math.random()*6)+1);
        var roll2 =(Math.floor(Math.random()*6)+1);
        message.channel.send(`\* ${message.author} rolled ${roll}, ${roll2}`);
        if (roll == roll2){
            message.channel.send('\* notes that doubles are ***usually*** death');
        }
	},
};