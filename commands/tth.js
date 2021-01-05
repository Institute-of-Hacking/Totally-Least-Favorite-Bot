module.exports = {
  name: 'tth',
	description: 'Text To Hmm',
	execute(message, args) {
            if (args[0] == null) {
              message.channel.send(`You didn't specify what you want me to convert to morse!`);
            }
            function Morse(str) {
              var a = str.replace(/a/g, "*00*")
              var b = a.replace(/b/g, "*01*");
              var c = b.replace(/c/g, "*02*");
              var d = c.replace(/d/g, "*03*");
              var e = d.replace(/e/g, "*04*");
              var f = e.replace(/f/g, "*05*");
              var g = f.replace(/g/g, "*06*");
              var h = g.replace(/h/g, "*07*");
              var i = h.replace(/i/g, "*08*");
              var j = i.replace(/j/g, "*09*");
              var k = j.replace(/k/g, "*10*");
              var l = k.replace(/l/g, "*11*");
              var m = l.replace(/b/g, "*12*");
              var n = m.replace(/n/g, "*13*");
              var o = n.replace(/o/g, "*14*");
              var p = o.replace(/p/g, "*15*");
              var q = p.replace(/q/g, "*16*");
              var r = q.replace(/r/g, "*17*");
              var s = r.replace(/s/g, "*18*");
              var t = s.replace(/t/g, "*19*");
              var u = t.replace(/u/g, "*20*");
              var v = u.replace(/v/g, "*21*");
              var w = v.replace(/w/g, "*22*");
              var x = w.replace(/x/g, "*23*");
              var y = x.replace(/y/g, "*24*");
              var z = y.replace(/z/g, "*25*");
/*              var one = z.replace(/1/g, "*26*")
              var two = one.replace(/2/g, "*27*")
              var three = two.replace(/3/g, "*28*")
              var four = three.replace(/4/g, "*29*")
              var five = four.replace(/5/g, "*30*")
              var six = five.replace(/6/g, "*31*")
              var seven = six.replace(/7/g, "*32*")
              var eight = seven.replace(/8/g, "*33*")
              var nine = eight.replace(/9/g, "*34*")
              var zero = nine.replace(/0/g, "*35*")
              var dot = zero.replace(/./g, "*36*")
              var comma = dot.replace(/,/g, "*37*")
              var question = comma.replace("?", "*38*")*/
              var a = z.replace(/\*00\*/g, "hmm-")
              var b = a.replace(/\*01\*/g, "hmM-");
              var c = b.replace(/\*02\*/g, "hMm-");
              var d = c.replace(/\*03\*/g, "Hmm-");
              var e = d.replace(/\*04\*/g, "hMM-");
              var f = e.replace(/\*05\*/g, "HmM-");
              var g = f.replace(/\*06\*/g, "HMm-");
              var h = g.replace(/\*07\*/g, "HMM-");
              var i = h.replace(/\*08\*/g, "*hmm*-");
              var j = i.replace(/\*09\*/g, "*hmM*-");
              var k = j.replace(/\*10\*/g, "*hMm*-");
              var l = k.replace(/\*11\*/g, "*Hmm*-");
              var m = l.replace(/\*12\*/g, "*hMM*-");
              var n = m.replace(/\*13\*/g, "*HmM*-");
              var o = n.replace(/\*14\*/g, "*HMm*-")
              var p = o.replace(/\*15\*/g, "*HMM*-")
              var q = p.replace(/\*16\*/g, "**hmm**-")
              var r = q.replace(/\*17\*/g, "**hmM**-")
              var s = r.replace(/\*18\*/g, "**hMm**-")
              var t = s.replace(/\*19\*/g, "**Hmm**-")
              var u = t.replace(/\*20\*/g, "**hMM**-")
              var v = u.replace(/\*21\*/g, "**HmM**-")
              var w = v.replace(/\*22\*/g, "**HMm**-")
              var x = w.replace(/\*23\*/g, "**HMM**-")
              var y = x.replace(/\*24\*/g, "***hmm***-")
              var z = y.replace(/\*25\*/g, "***hmM***-")
//              var one = z.replace(/\*\*/g, "*26*")
//              var two = one.replace(/\*\*/g, "*27*")
//              var three = two.replace(/\*\*/g, "*28*")
//              var four = three.replace(/\*\*/g, "*29*")
//              var five = four.replace(/\*\*/g, "*30*")
//              var six = five.replace(/\*\*/g, "*31*")
//              var seven = six.replace(/\*\*/g, "*32*")
//              var eight = seven.replace(/\*\*/g, "*33*")
//              var nine = eight.replace(/\*\*/g, "*34*")
//              var zero = nine.replace(/\*\*/g, "*35*")
//              var dot = zero.replace(/\*\*/g, "*36*")
//              var comma = dot.replace(/\*\*/g, "*37*")
//              var question = comma.replace("?", "*38*")
              return z;
            }

                let finished = Morse(args.join("\`\` - \`\`"));

                

                console.log(finished);
              
                message.channel.send(` copy and paste this into discord \`\`\`${finished}\`\`\``)
                message.channel.send(` this is the output: ${finished}`)
              }
};