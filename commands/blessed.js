module.exports = {
	name: 'blessed',
	description: 'ttells a blessed',
	execute(message, args) {
        var blessed =(Math.floor(Math.random()*10)+1);
        if (blessed ==1) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6o08i/blessed_boop_snoot/`)
        }
        if (blessed ==2) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6memc/here_is_art_doggo_he_will_paint_you_tell_him_hes/`)
        }
        if (blessed ==3) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6meze/this_dude_makes_some_weird_cosplays_sometimes_but/`)
        }
        if (blessed ==4) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6myaf/he_jus_painting_and_straight_up_vibin_video_made/`)
        }
        if (blessed ==5) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6p7tn/blessed_shopping/`)
        }
        if (blessed ==6) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6qzcs/my_entire_school_came_together_to_help_a_severely/`)
        }
        if (blessed ==7) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6n3cd/blessed_naptime/`)
        }
        if (blessed ==8) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6q1yx/husky_booper_snooter/`)
        }
        if (blessed ==9) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6durb/nice/`)
        }
        if (blessed ==10) {
            message.channel.send(`\* ${message.author} https://www.reddit.com/r/Blessed_Images/comments/g6odko/blessed_cat_in_house/`)
        }
	},
};