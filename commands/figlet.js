module.exports = {
	name: 'figlet',
	description: 'fuck off zcj',
	execute(message, args) {
		var figlet = require('figlet');
		let argsresult;
		if (args[0] == '') {
			 message.channel.send('you have to provide arguments correct usage is "/figlet -f font text"')
		} else { 
			if (args[0] == '-f') {
				if (args[1] == "1row" || args[1] == "3-d" || args[1] == "3d_diagonal" || args[1] == "3d-ascii" || args[1] == "3x5" || args[1] == "4max" || args[1] == "5_line_oblique" || args[1] == "acrobatic" || args[1] == "alligator" || args[1] == "alligator2" || args[1] == "alpha" || args[1] == "alphabet" || args[1] == "amc_3_line" || args[1] == "amc_3_liv1" || args[1] == "amc_aaa01" || args[1] == "amc_neko" || args[1] == "amc_razor" || args[1] == "amc_razor2" || args[1] == "amc_slash" || args[1] == "amc_slider" || args[1] == "amc_thin" || args[1] == "amc_tubes" || args[1] == "amc_untitled" || args[1] == "ansi_regular" || args[1] == "ansi_shadow" || args[1] == "arrows" || args[1] == "ascii_new_roman" || args[1] == "avatar" || args[1] == "b1ff" || args[1] == "banner" || args[1] == "banner3-d" || args[1] == "banner3" || args[1] == "banner4" || args[1] == "barbwire" || args[1] == "basic" || args[1] == "bear" || args[1] == "bell" || args[1] == "benjamin" || args[1] == "big_chief" || args[1] == "big_money-ne" || args[1] == "big_money-nw" || args[1] == "big_money-se" || args[1] == "big_money-sw" || args[1] == "big" || args[1] == "bigfig" || args[1] == "binary" || args[1] == "block" || args[1] == "blocks" || args[1] == "bloody" || args[1] == "bolger" || args[1] == "braced" || args[1] == "bright" || args[1] == "broadway_kb" || args[1] == "broadway" || args[1] == "bubble" || args[1] == "bulbhead" || args[1] == "caligraphy" || args[1] == "caligraphy2" || args[1] == "calvin_s" || args[1] == "cards" || args[1] == "catwalk" || args[1] == "chiseled" || args[1] == "chunky" || args[1] == "coinstak" || args[1] == "cola" || args[1] == "colossal" || args[1] == "computer" || args[1] == "contessa" || args[1] == "contrast" || args[1] == "cosmike" || args[1] == "crawford" || args[1] == "crawford2" || args[1] == "crazy" || args[1] == "cricket" || args[1] == "cursive" || args[1] == "cyberlarge" || args[1] == "cybermedium" || args[1] == "cybersmall" || args[1] == "cygnet" || args[1] == "danc4" || args[1] == "dancing_font" || args[1] == "decimal" || args[1] == "def_leppard" || args[1] == "delta_corps_priest_1" || args[1] == "diamond" || args[1] == "diet_cola" || args[1] == "digital" || args[1] == "doh" || args[1] == "doom" || args[1] == "dos_rebel" || args[1] == "dot_matrix" || args[1] == "double_shorts" || args[1] == "double" || args[1] == "dr_pepper" || args[1] == "dwhistled" || args[1] == "efti_chess" || args[1] == "efti_font" || args[1] == "efti_italic" || args[1] == "efti_piti" || args[1] == "efti_robot" || args[1] == "efti_wall" || args[1] == "efti_water" || args[1] == "electronic" || args[1] == "elite" || args[1] == "epic" || args[1] == "fender" || args[1] == "filter" || args[1] == "fire_font-k" || args[1] == "fire_font-s" || args[1] == "flipped" || args[1] == "flower_power" || args[1] == "four_tops" || args[1] == "fraktur" || args[1] == "fun_face" || args[1] == "fun_faces" || args[1] == "fuzzy" || args[1] == "georgi16" || args[1] == "georgia11" || args[1] == "ghost" || args[1] == "ghoulish" || args[1] == "glenyn" || args[1] == "goofy" || args[1] == "gothic" || args[1] == "graceful" || args[1] == "gradient" || args[1] == "graffiti" || args[1] == "greek" || args[1] == "heart_left" || args[1] == "heart_right" || args[1] == "henry_3d" || args[1] == "hex" || args[1] == "hieroglyphs" || args[1] == "hollywood" || args[1] == "horizontal_left" || args[1] == "horizontal_right" || args[1] == "icl-1900" || args[1] == "impossible" || args[1] == "invita" || args[1] == "isometric1" || args[1] == "isometric2" || args[1] == "isometric3" || args[1] == "isometric4" || args[1] == "italic" || args[1] == "ivrit" || args[1] == "jacky" || args[1] == "jazmine" || args[1] == "jerusalem" || args[1] == "js_block_letters" || args[1] == "js_bracket_letters" || args[1] == "js_capital_curves" || args[1] == "js_cursive" || args[1] == "js_stick_letters" || args[1] == "katakana" || args[1] == "kban" || args[1] == "keyboard" || args[1] == "knob" || args[1] == "konto_slant" || args[1] == "konto" || args[1] == "larry_3d_2" || args[1] == "larry_3d" || args[1] == "lcd" || args[1] == "lean" || args[1] == "letters" || args[1] == "lil_devil" || args[1] == "line_blocks" || args[1] == "linux" || args[1] == "lockergnome" || args[1] == "madrid" || args[1] == "marquee" || args[1] == "maxfour" || args[1] == "merlin1" || args[1] == "merlin2" || args[1] == "mike" || args[1] == "mini" || args[1] == "mirror" || args[1] == "mnemonic" || args[1] == "modular" || args[1] == "morse" || args[1] == "morse2" || args[1] == "moscow" || args[1] == "mshebrew210" || args[1] == "muzzle" || args[1] == "nancyj-fancy" || args[1] == "nancyj-improved" || args[1] == "nancyj-underlined" || args[1] == "nancyj" || args[1] == "nipples" || args[1] == "nscript" || args[1] == "nt_greek" || args[1] == "nv_script" || args[1] == "o8" || args[1] == "octal" || args[1] == "ogre" || args[1] == "old_banner" || args[1] == "os2" || args[1] == "patorjk's_cheese" || args[1] == "patorjk-hex" || args[1] == "pawp" || args[1] == "peaks_slant" || args[1] == "peaks" || args[1] == "pebbles" || args[1] == "pepper" || args[1] == "poison" || args[1] == "puffy" || args[1] == "puzzle" || args[1] == "pyramid" || args[1] == "rammstein" || args[1] == "rectangles" || args[1] == "red_phoenix" || args[1] == "relief" || args[1] == "relief2" || args[1] == "reverse" || args[1] == "roman" || args[1] == "rot13" || args[1] == "rotated" || args[1] == "rounded" || args[1] == "rowan_cap" || args[1] == "rozzo" || args[1] == "runic" || args[1] == "runyc" || args[1] == "s_blood" || args[1] == "santa_clara" || args[1] == "script" || args[1] == "serifcap" || args[1] == "shadow" || args[1] == "shimrod" || args[1] == "short" || args[1] == "sl_script" || args[1] == "slant_relief" || args[1] == "slant" || args[1] == "slide" || args[1] == "small_caps" || args[1] == "small_isometric1" || args[1] == "small_keyboard" || args[1] == "small_poison" || args[1] == "small_script" || args[1] == "small_shadow" || args[1] == "small_slant" || args[1] == "small_tengwar" || args[1] == "small" || args[1] == "soft" || args[1] == "speed" || args[1] == "spliff" || args[1] == "stacey" || args[1] == "stampate" || args[1] == "stampatello" || args[1] == "standard" || args[1] == "star_strips" || args[1] == "star_wars" || args[1] == "stellar" || args[1] == "stforek" || args[1] == "stick_letters" || args[1] == "stop" || args[1] == "straight" || args[1] == "stronger_than_all" || args[1] == "sub-zero" || args[1] == "swamp_land" || args[1] == "swan" || args[1] == "sweet" || args[1] == "tanja" || args[1] == "tengwar" || args[1] == "term" || args[1] == "test1" || args[1] == "the_edge" || args[1] == "thick" || args[1] == "thin" || args[1] == "this" || args[1] == "thorned" || args[1] == "three_point" || args[1] == "ticks_slant" || args[1] == "ticks" || args[1] == "tiles" || args[1] == "tinker-toy" || args[1] == "tombstone" || args[1] == "train" || args[1] == "trek" || args[1] == "tsalagi" || args[1] == "tubular" || args[1] == "twisted" || args[1] == "two_point" || args[1] == "univers" || args[1] == "usa_flag" || args[1] == "varsity" || args[1] == "wavy" || args[1] == "weird" || args[1] == "wet_letter" || args[1] == "whimsy" || args[1] == "wow") {
                    FontName = args[1]
                    var FontName = FontName.replace(/_/g, " ");
                    argsresult = args.slice(2).join(' ')
					figlet.text(argsresult, {
						font: `${FontName}`,
						horizontalLayout: 'default',
						verticalLayout: 'default'
					}, function(err, data) {
						if (err) {
							console.log(`Something went wrong with figlet ${err}`);
							console.dir(err);
							return;
						}
						message.channel.send(` \`\`\`${data}\`\`\` `)
					})} else {
						argsresult = args.join(' ')
						figlet(argsresult, function(err, data) {
							if (err) {
								console.log('Something went wrong...');
								console.dir(err);
								return;
						}
							message.channel.send(` \`\`\`${data}\`\`\` `)
					})};
				} else {
					argsresult = args.join(' ')
				figlet(argsresult, function(err, data) {
					if (err) {
						console.log('Something went wrong...');
						console.dir(err);
						return;
					}
					message.channel.send(` \`\`\`${data}\`\`\` `)
				})}};
			}
}