module.exports = {
	name: 'truth',
    description: 'tells the truth',
	execute(message, args) {
        var truth =(Math.floor(Math.random()*30)+1);
        if (args[0] === undefined) {
            console.log(`nope`)
        } else {
            var truth = args[0]
            console.log(`changed! ${truth}`)
        }
        if (truth ==1) {
            message.channel.send(`\* ${message.author} did you know everyone who has died is dead?`);
        }
        if (truth ==2) {
            message.channel.send(`\* ${message.author} did you know that russia is located in russia?`);
        }
        if (truth ==3) {
            message.channel.send(`\* ${message.author} HES NOT A DRUG DEALER MOM, HE'S A FREELANCE UNLICENSED PHARMACIST!`);
        }
        if (truth ==4) {
            message.channel.send(`\* ${message.author} whats an extreme sport?\n doing your homework while the teacher is collecting it.`);
        }
        if (truth ==5) {
            message.channel.send(`\* ${message.author} did you know that if you rub a little olive oil and epsom salt on the painful spots on your body they will immediately feel greasier and saltier?`);
        }
        if (truth ==6) {
            message.channel.send(`\* ${message.author} did you know that march 21st or 4/21 is also known as national suprise drug test day`);
        }
        if (truth ==7) {
            message.channel.send(`\* ${message.author} if humans go extinct literally no one will care.`);
        }
        if (truth ==8) {
            message.channel.send(`\* ${message.author} girls have a higher risk of getting pregnant than boys.`);
        }
        if (truth ==9) {
            message.channel.send(`\* ${message.author} win a free ride in a police car by stealing from the store.`);
        }
        if (truth ==10) {
            message.channel.send(`\* ${message.author} the best barber can never recieve the best haircut.`);
        }
        if (truth ==11) {
            message.channel.send(`\* ${message.author} if your left hand is cut then yur right hand is left`);
        }
        if (truth ==12) {
            message.channel.send(`\* ${message.author} the letter B is P but pregnant`);
        }
        if (truth ==13) {
            message.channel.send(`\* ${message.author} The definition of pansexual\n ***A PANSEXUAL PERSON***`);
        }
        if (truth ==14) {
            message.channel.send(`\* ${message.author} Describe obama's presidency in one word i would say ***OBAMA***`);
        }
        if (truth ==15) {
            message.channel.send(`\* ${message.author} a persons house was on fire and he sadly died. the firemen asked the rest of his family why he didnt stop drop and roll tey said he did he stop dropped and rolled into the fire`);
        }
        if (truth ==16) {
            message.channel.send(`\* ${message.author} obamas credentials include **former chicago resident**`);
        }
        if (truth ==17) {
            message.channel.send(`\* ${message.author} no one is born cool except of course elsa`);
        }
        if (truth ==18) {
            message.channel.send(`\* ${message.author} infinity + infinity is called two infinity and beyond`);
        }
        if (truth ==19) {
            message.channel.send(`\* ${message.author} condoms are for pussys`);
        }
        if (truth ==20) {
            message.channel.send(`\* ${message.author} so far you have survived 100% of your worst days`);
        }
        if (truth ==21) {
            message.channel.send(`\* ${message.author} a wheel can be any shape but it must be circular`);
        }
        if (truth ==22) {
            message.channel.send(`\* ${message.author} **WANTED** a man has been stealing the tires off of police cars police have been working tirelessly to find him`);
        }
        if (truth ==23) {
            message.channel.send(`\* ${message.author} shower head: every naked person i see turns me on`);
        }
        if (truth ==24) {
            message.channel.send(`\* ${message.author} we've all kicked a pregnan woman before`);
        }
        if (truth ==25) {
            message.channel.send(`\* ${message.author} child: daddy why is that book so thick\n daddyuwu: because its a long story`);
        }
        if (truth ==26) {
            message.channel.send(`\* ${message.author} a linguist dies. at the funeral, a fellow academic asks the wife, "do you mind if i say a word?" she nods. he stands and says plethora and immediately sits down. she says, tearfully, "that means alot."`);
        }
        if (truth ==27) {
            message.channel.send(`\* ${message.author} being a single mom when you dont have any kids and are a male teenager`);
        }
        if (truth ==28) {
            message.channel.send(`\* ${message.author} a new scientific study claims that fertility is hereditary if your parents didnt have any children, chances are you wont either.`);
        }
        if (truth ==29) {
            message.channel.send(`\* ${message.author} person 1: what is your secret to staying down to earth? \n person 2: well i mean ***gravity***`);
        }
        if (truth ==30) {
            message.channel.send(`\* ${message.author} who said brown eyes arent cute? **hitler**`);
        }
	}
};
