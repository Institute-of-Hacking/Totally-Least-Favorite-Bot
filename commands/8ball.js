module.exports = {
	name: '8ball',
	description: 'Daddy Skit requested this',
	execute(message, args) {
        var ymn =(Math.floor(Math.random()*3)+1);
        //the ymn variable is used for answers as in y is yes m is maybe and n is no
        if (ymn == 1) {
            //These answers are yes
            var AnswerNum =(Math.floor(Math.random()*20));
            var Answers = ["oh yea", "yessir", "gonna happen dammit", "dammit it will happen", "ah shit its gonna happen", "Fuck yea", "Yeah", "hell yea", "worry it will", "dont worry yes", "ofc", "extremely angry fucking yes", "thicc yes", "yes", "Duh", "Obviously you dumbass", "mhm", "yep", "probably", "yea probs"]
            var Answer = Answers[AnswerNum]
        }
        else if (ymn == 2) {
            //These answers are maybe
            var AnswerNum =(Math.floor(Math.random()*20));
            var Answers = ["I honestly dont fucking care", "I honestly dont fucking know", "is that a gun?", "lemme call the president *2 seconds later* he hung up", "*Phone Rings* Son son the doctors say its terminal i.. *Cough Cough* Im not gonna make it *beep beep beep beeeeeeeeeee* mom MOM???? *phone hangs up* i.. i... i dont know.. *Sobs*", "Shit my ball", "hell", "uhm", "uhhhhhh", "i fr dont know", "something", "my lil crystal ball is showing me... im not sure", "im not sure", "try again later", "i wonder", "huh", "uhh", "i dont know", "idk", "maybe"]
            var Answer = Answers[AnswerNum]
        }
        else if (ymn == 3) {
            //These answers are no 
            var AnswerNum =(Math.floor(Math.random()*20));
            var Answers = ["i shall not", "by no means", "not now", "sorry", "not as far as ill know", "not to my knowledge", "im afraid not", "Unfortunalely thats not possible", "maybe another time", "Absolutely not", "no way", "probably not", "i dont think so", "not right now", "not yet", "mm-mm", "uh-uh", "nah", "nope", "no"]
            var Answer = Answers[AnswerNum]
        }
        message.channel.startTyping();
        message.channel.send(Answer)
	}
}