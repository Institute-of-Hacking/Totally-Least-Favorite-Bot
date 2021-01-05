const Discord = require('discord.js');
const got = require('got');
module.exports = {
	name: 'meme',
	description: 'Meme :D',
	execute(message, args) {
        const embed = new Discord.MessageEmbed();
        var Subreddits = [
            "memes", 
            "AdviceAnimals",
            "MemeEconomy", 
            "ComedyCemetery", 
            "dankmemes", 
            "PrequelMemes", 
            "terriblefacebookmemes", 
            "PewdiepieSubmissions", 
            "funny", 
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmeme",
            "wholesomememes",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals",
            "Aww",
            "PhotoshopBattles",
            "DunderMifflin",
            "PerfectTiming",
            "crappyoffbrands",
            "blunderyears",
            "Hololive"
        ]
        var Subreddit = Subreddits[Math.floor(Math.random() * Subreddits.length)];
        got(`https://www.reddit.com/r/${Subreddit}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = `Funny meme from r/${Subreddit}/`
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`);
            embed.setURL(`${memeUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(memeImage);
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
            message.channel.send(embed)
        }).catch(console.error);
    }
}