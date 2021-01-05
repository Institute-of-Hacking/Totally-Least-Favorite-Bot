module.exports = {
	name: '/me',
	description: 'speaks as you',
	execute(message, args) {
        message.delete({ timeout: 1, reason: 'It had to be done.' });
		let argsresult;
        argsresult = args.join(" ")
        if (argsresult === "poots" || argsresult === "***poots***" || argsresult === "*poots*" || argsresult === "poot's" || argsresult === "***poot's***" || argsresult === "*poot's*") {
            message.channel.send(`\* ${message.author} **Failed to poot**`)
            return
        }
        function SpecialFix(str) {
            var a = str.replace(/ \*\*\*/g, " 001")
            var b = a.replace(/\*\*\* /g, "002 ");
            var c = b.replace(/ \*\*/g, " 003");
            var d = c.replace(/\*\* /g, "004 ");
            var e = d.replace(/ \*/g, " 005");
            var f = e.replace(/\* /g, "006 ");
            var g = f.replace(/ 001/g, " ** ***");
            var h = g.replace(/002 /g, "*** ** ");
            var i = h.replace(/ 003/g, " ** **");
            var j = i.replace(/004 /g, "** ** ");
            var k = j.replace(/ 005/g, " ** *");
            var l = k.replace(/006 /g, "* ** ");
            var m = l.replace(/\* \*\* \*\* \*/g, "* *");
            var n = m.replace(/\* \*\* /g, "* **");
            var o = n.replace(/ \*\* \*/g, "** *");
            return o;
        }
        temp = args.join(" ")
        temp2 = ` ${temp} `
        argsresult = SpecialFix(temp2);
		message.channel.send(`\* ${message.author}** ${argsresult} **`)
	},
};