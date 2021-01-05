module.exports = {
	name: 'command',
	description: 'uses zlci or zharas limited command interpreter',
	execute(message, args) {
        message.delete({ timeout: 1, reason: 'It had to be done.' });
        const fs = require('fs');
        message.delete({ timeout: 1, reason: 'It had to be done.' });
        if (args[0] == ``) {
            message.channel.send('ZLCI, use -h for help')  
        }else if (args[0] == '-h') {
            message.channel.send('ZLCI, function not avaliable')  
        }else if (args[0] == 'badgedump') {
            if (args[1] == ``) {
                message.author.send('ZLCI, LIMITED LIST OF BADGES ANY BADGES WE DONT KNOW I WILL OUTPUT "BADGE UNLOCK UNKNOWN" IF YOU ASK FOR A BADGE WE HAVENT ADDED INTO THIS LIST I WILL ERROR. TO GET INFO ON A BADGE DO -BADGENAME EX. -OPER')
            // badge acct==================================================================================================================badge acct
            }else if (args[1] == 'acct') {
                const acct = {
                    color: 0x0000ff,
                    title: 'Telehack badge acct',
                    author: {
                        name: 'Zhara, Zcj, 6a70a95799a5f832ff15c01eef2d648d',
                    },
                    description: '... really?',
        
                    fields: [
                        {
                            name: 'Telehack Nudge',
                            value: 'Registered User',
                        },
                        {
                            name: 'Telehack Wiki Nudge',
                            value: 'The ACCT Badge is received after creating a Telehack login. This is the first badge given to any new user.',
                            inline: false,
                        },
                        {
                            name: 'ZLCI Nudge',
                            value: 'Well umm the others say it all if u need help with this one you\'re already long gone.',
                            inline: false,
                        },
                        {
                            name: 'hmm',
                            value: 'weh',
                            inline: false,
                        },
                    ],
        
                    timestamp: new Date(),
                    footer: {
                        text: 'you dont need help with this one',
                    },
                };
                message.author.send({ embed: acct });
            // badge rtfm==================================================================================================================badge rtfm
            }else if (args[1] == 'rtfm') {
                const rtfm = {
                    color: 0x0000ff,
                    title: 'Telehack badge rtfm',
                    author: {
                        name: 'Zhara, Zcj, 6a70a95799a5f832ff15c01eef2d648d',
                    },
                    description: 'rtfm = read the fucking manual',
        
                    fields: [
                        {
                            name: 'Telehack Nudge',
                            value: 'Was that so hard?',
                        },
                        {
                            name: 'Telehack Wiki Nudge',
                            value: 'RTFM : Read the F* manual',
                            inline: false,
                        },
                        {
                            name: 'ZLCI Nudge',
                            value: 'open telehack.txt',
                            inline: false,
                        },
                        {
                            name: 'hmm',
                            value: 'weh',
                            inline: false,
                        },
                    ],
        
                    timestamp: new Date(),
                    footer: {
                        text: 'you only need help with this one if you are a complete fkn idiot... like me ZHARA',
                    },
                };
                message.author.send({ embed: rtfm });
            // badge acknak==================================================================================================================badge acknak
            }else if (args[1] == 'acknak') {
                const acknak = {
                    color: 0x0000ff,
                    title: 'Telehack badge acknak',
                    author: {
                        name: 'Zhara, Zcj, 6a70a95799a5f832ff15c01eef2d648d',
                    },
                    description: 'a easy badge if u just play around',
        
                    fields: [
                        {
                            name: 'Telehack Nudge',
                            value: 'Flowing bytes',
                        },
                        {
                            name: 'Telehack Wiki Nudge',
                            value: 'Download a file from a BBS.',
                            inline: false,
                        },
                        {
                            name: 'ZLCI Nudge',
                            value: 'listen to the wiki',
                            inline: false,
                        },
                        {
                            name: 'hmm',
                            value: 'weh',
                            inline: false,
                        },
                    ],
        
                    timestamp: new Date(),
                    footer: {
                        text: 'tsk tsk tsk',
                    },
                };
                message.author.send({ embed: acknak });
            // badge dtfm==================================================================================================================badge dtfm
            }else if (args[1] == 'dtfm') {
                const dtfm = {
                    color: 0x0000ff,
                    title: 'Telehack badge dtfm',
                    author: {
                        name: 'Zhara, Zcj, 6a70a95799a5f832ff15c01eef2d648d',
                    },
                    description: 'a easy badge if u just play around',
        
                    fields: [
                        {
                            name: 'Telehack Nudge',
                            value: 'Wardial Access',
                        },
                        {
                            name: 'Telehack Wiki Nudge',
                            value: 'The DTMF Badge will be given to any user, who have executed the wardial command for the first time. The abbreviation comes from the expression of Dual-tone multi-frequency signaling.',
                            inline: false,
                        },
                        {
                            name: 'ZLCI Nudge',
                            value: 'listen to the wiki',
                            inline: false,
                        },
                        {
                            name: 'hmm',
                            value: 'weh',
                            inline: false,
                        },
                    ],
        
                    timestamp: new Date(),
                    footer: {
                        text: 'its 3:03 and root removed the nice and happy underwood page on the wiki lol i wont be goin to river at a decent time tomorro',
                    },
                };
                message.author.send({ embed: dtfm });
            // badge hacker==================================================================================================================badge hacker
            }else if (args[1] == 'hacker') {
                const hacker = {
                    color: 0x0000ff,
                    title: 'Telehack badge hacker',
                    author: {
                        name: 'Zhara, Zcj, 6a70a95799a5f832ff15c01eef2d648d',
                    },
                    description: 'eh i guess u might need help but i dont wanna babysit u',
        
                    fields: [
                        {
                            name: 'Telehack Nudge',
                            value: 'Hack The Planet',
                        },
                        {
                            name: 'Telehack Wiki Nudge',
                            value: 'The HACKER Badge will be given to any user, who has successfully created a new account of his/gathered user level on a system outside the telehack host itself. This is the first badge given in this category for every user.',
                            inline: false,
                        },
                        {
                            name: 'ZLCI Nudge',
                            value: 'ugh just use porthack.exe then when it asks for a host put in one from ur netstat',
                            inline: false,
                        },
                        {
                            name: 'hmm',
                            value: 'weh',
                            inline: false,
                        },
                    ],
        
                    timestamp: new Date(),
                    footer: {
                        text: 'the page was positive too just said some facts :c',
                    },
                };
                message.author.send({ embed: hacker });
            // badge hacker==================================================================================================================badge hacker
            }
            // badge rtfm==================================================================================================================badge rtfm
        }
	},
};