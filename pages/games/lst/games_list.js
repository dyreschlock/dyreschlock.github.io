function entry(id, title, console, company, genre, score, japan, store, city, state, price, used, pmonth, pday, pyear)
{
	this.id = id;
	this.title = title;
	this.console = console;
	this.japan = japan;
	this.score = score;
	this.company = company;
	this.genre = genre;
	
	this.valid = (store != null);
	
	//new stuff
	this.isJapanesePurchase = (getJapaneseIndex(this.store) != -1)
	
	this.store = store;
	this.city = city;
	this.price = price;
	this.state = state;
	this.used = used;
	
	this.purchase_date = new Date();
	this.purchase_date.setUTCFullYear(pyear, pmonth, pday);
}

var ps3 = "Playstation 3";
var ps2 = "Playstation 2";
var psp = "PSP";
var psx = "Playstation";

var wii = "Wii";
var vc  = "Virtual Console";
var gc  = "Gamecube";
var n64 = "Nintendo 64";
var snes= "Super Nintendo";
var nes = "Nintendo";

var nds = "DS";
var gba = "Gameboy Advance";
var gbc = "Gameboy Color";

var dc  = "Dreamcast";
var sat = "Saturn";
var scd = "Sega CD";
var gen = "Genesis";

var x360= "Xbox 360";
var xbox= "Xbox";

var count = 0;
var games = new Array();

games[count++] = new entry('ps2_ffx', 'Final Fantasy X', ps2, 'squaresoft', 'rpg', 4.0, false);
games[count++] = new entry('ps2_ffx_j', 'Final Fantasy X', ps2, 'squaresoft', 'rpg', 4.0, true);
games[count++] = new entry('ps2_ffx2_j', 'Final Fantasy X-2', ps2, 'squaresoft', 'rpg', 2.0, true);
games[count++] = new entry('ps2_kh', 'Kingdom Hearts', ps2, 'squaresoft', 'action rpg', 3.5, false);
games[count++] = new entry('ps2_xeno1_j', 'Xenosaga I: Der Wille zur Macht', ps2, 'namco / monolith', 'rpg', 3.5, true);
games[count++] = new entry('ps2_xeno1', 'Xenosaga I: Der Wille zur Macht', ps2, 'namco / monolith', 'rpg', 3.5, false);
games[count++] = new entry('ps2_xeno2_j', 'Xenosaga II: Jenseits von Gut und Bose', ps2, 'namco / monolith', 'rpg', 3.5, true);
games[count++] = new entry('ps2_socean3', 'Star Ocean: Till the End of Time', ps2, 'square-enix', 'rpg', '?', false);
games[count++] = new entry('ps2_ddrmax', 'Dance Dance Revolution Max', ps2, 'konami', 'dance', 4.5, false);
games[count++] = new entry('ps2_ddrmax_j', 'Dance Dance Revolution Max', ps2, 'konami', 'dance', 3.0, true);
games[count++] = new entry('ps2_ddrmax2_j', 'Dance Dance Revolution Max 2', ps2, 'konami', 'dance', 4.5, true);
games[count++] = new entry('ps2_ddrmax2', 'Dance Dance Revolution Max 2', ps2, 'konami', 'dance', 3.5, false);
games[count++] = new entry('ps2_ddrex_j', 'Dance Dance Revolution Extreme', ps2, 'konami', 'dance', 5.0, true);
games[count++] = new entry('ps2_ddrex', 'Dance Dance Revolution Extreme', ps2, 'konami', 'dance', 2.5, false);
games[count++] = new entry('ps2_ddrex2', 'Dance Dance Revolution Extreme 2', ps2, 'konami', 'dance', 4.0, false);
games[count++] = new entry('ps2_ddrsupernova', 'Dance Dance Revolution SuperNova', ps2, 'konami', 'dance', 4.0, false); //added 3/11/07
games[count++] = new entry('ps2_in_the_groove', 'In the Groove', ps2, 'red octane / roxor', 'dance', 4.0, false);
games[count++] = new entry('ps2_gt3_j', 'Gran Turismo 3 A-spec', ps2, 'sce / polyphony digital', 'racing sim', 5.0, true);
games[count++] = new entry('ps2_gt3', 'Gran Turismo 3 A-spec', ps2, 'sce / polyphony digital', 'racing sim', 5.0, false);
games[count++] = new entry('ps2_gtct', 'Gran Turismo Concept Tokyo', ps2, 'sce / polyphony digital', 'racing sim', 4.5, true);
games[count++] = new entry('ps2_gtcg', 'Gran Turismo Concept Geneva', ps2, 'sce / polyphony digital', 'racing sim', 4.5, true);
games[count++] = new entry('ps2_gt4p', 'Gran Turismo 4 Prologue', ps2, 'sce / polyphony digital', 'racing sim', 5.0, true);
games[count++] = new entry('ps2_gt4_j', 'Gran Turismo 4', ps2, 'sce / polyphony digital', 'racing sim', 5.0, true);
games[count++] = new entry('ps2_wipeoutf', 'Wipeout Fusion', ps2, 'liverpool studios', 'futuristic racer', 2.0, false);
games[count++] = new entry('ps2_ico', 'ICO', ps2, 'sony', 'adventure', 4.0, false);
games[count++] = new entry('ps2_rez', 'Rez', ps2, 'sega / uga', 'rhythm / rail-shooter', 4.5, false);
games[count++] = new entry('ps2_sch5', 'Space Channel 5 Special Edition', ps2, 'sega / uga', 'rhythm', 3.0, false);
games[count++] = new entry('ps2_makai', 'Makai Kingdom', ps2, 'nippon ichi', 'strategy rpg', '?', false);
games[count++] = new entry('ps2_pbrave', 'Phantom Brave', ps2, 'nippon ichi', 'strategy rpg', 4.0, false);
games[count++] = new entry('ps2_disgaea', 'Disgaea', ps2, 'atlus / nippon ichi', 'strategy rpg', 4.0, false);
games[count++] = new entry('ps2_lpucelle', 'La Pucelle Tactics', ps2, 'maddog / nippon ichi', 'strategy rpg', 4.0, false);
games[count++] = new entry('ps2_sui3', 'Suikoden III', ps2, 'konami', 'rpg', '?', false);
games[count++] = new entry('ps2_sui4', 'Suikoden IV', ps2, 'konami', 'rpg', '?', false);
games[count++] = new entry('ps2_katamari', 'Katamari Damacy', ps2, 'namco', 'platform', 4.5, false);
games[count++] = new entry('ps2_katamari2', 'We Love Katamari', ps2, 'namco', 'platform', 4.5, false);
games[count++] = new entry('ps2_okage', 'Okage', ps2, 'sony?', 'rpg', 3.5, false);
games[count++] = new entry('ps2_dc_g', 'Dark Cloud (Greatest Hits)', ps2, 'sony / level 5', 'action rpg', 3.5, false);
games[count++] = new entry('ps2_fframe', 'Fatal Frame', ps2, 'tecmo', 'survival horror', 3.0, false);
games[count++] = new entry('ps2_wisp', 'wordimagesoundplay', ps2, 'tomato', 'music', '?', true);
games[count++] = new entry('ps2_freq', 'Frequency', ps2, 'sce / harmonix', 'rhythm', 4.0, false);
games[count++] = new entry('ps2_amp', 'Amplitude', ps2, 'sce / harmonix', 'rhythm', 3.5, false);
games[count++] = new entry('ps2_shearts', 'Shadow Hearts', ps2, 'midway / ?', 'rpg', '?', false);
games[count++] = new entry('ps2_shearts2', 'Shadow Hearts Covenant', ps2, 'midway / ?', 'rpg', '?', false);
games[count++] = new entry('ps2_rtypef', 'R-type Final', ps2, 'irem', 'horizontal shooter', 3.5, false);
games[count++] = new entry('ps2_gradiusv', 'Gradius V', ps2, 'konami / treasure', 'horizontal shooter', 5.0, false);
games[count++] = new entry('ps2_spanic', 'Stretch Panic', ps2, '? / treasure', 'platformer', '?', false);
games[count++] = new entry('ps2_shikigami2', 'Castle Shikigami 2', ps2, '? / cave', 'vertical shooter', 4.0, false);
games[count++] = new entry('ps2_contrass', 'Contra Shattered Soldier', ps2, 'konami', 'action', 3.5, false);
games[count++] = new entry('ps2_rroses', 'Rumble Roses', ps2, 'konami', 'wrestling', 3.0, false);
games[count++] = new entry('ps2_smtnocturne', 'Shin Megami Tensei Nocturne', ps2, 'atlus', 'role playing', '?', false);
games[count++] = new entry('ps2_srwcommander', 'Super Robot Wars: Scrammble Commander', ps2, 'banpresto', 'rts', 2.0, true);
games[count++] = new entry('ps2_stella', 'Stella Dues', ps2, 'atlus / ?', 'strategy rpg', 3.5, false);
games[count++] = new entry('ps2_neocontra', 'Neo Contra', ps2, 'konami', 'action', 3.5, false);
games[count++] = new entry('ps2_mslug45', 'Metal Slug 4/5', ps2, 'SNK Playmore', 'action', 3.0, false);
games[count++] = new entry('ps2_dark_cloud_2', 'Dark Cloud 2', ps2, 'SCE / Level 5', 'action rpg / simulation', 4.5, false);
games[count++] = new entry('ps2_culdcept', 'Culdcept', ps2, 'NEC', 'card/board game', 4.5, false);
games[count++] = new entry('ps2_disaster_report', 'Disaster Report', ps2, 'irem', 'adventure', 2.5, false);
games[count++] = new entry('ps2_gitaroo', 'Gitaroo Man', ps2, 'koei', 'rhythm', 3.5, false);
games[count++] = new entry('ps2_dds', 'Shin Megami Tensei: Digital Devil Saga', ps2, 'atlus', 'role playing', '?', false);
games[count++] = new entry('ps2_dds2', 'Shin Megami Tensei: Digital Devil Saga 2', ps2, 'atlus', 'role playing', '?', false);
games[count++] = new entry('ps2_itadaki', 'Final Fantasy & Dragon Quest in Itadaki Street Special', ps2, 'square-enix', 'party', 3.5, true);
games[count++] = new entry('ps2_ddragoon2_j', 'Drag-on Dragoon 2', ps2, 'square-enix', 'action/adventure', '?', true);
games[count++] = new entry('ps2_rstories_j', 'Radiata Stories', ps2, 'square-enix', 'action rpg', 4.5, true);
games[count++] = new entry('ps2_rstories', 'Radiata Stories', ps2, 'square-enix', 'action rpg', 4.5, false);
games[count++] = new entry('ps2_fframe2', 'Fatal Frame II', ps2, 'tecmo', 'survivor horror', 4.0, false);
games[count++] = new entry('ps2_mgs3s', 'Metal Gear Solid 3 Subsistence', ps2, 'Konami', 'stealth adventure', 5.0, false);
games[count++] = new entry('ps2_sfaa', 'Street Fighter Alpha Anthology', ps2, 'Capcom', 'fighter', '?', false);
games[count++] = new entry('ps2_xiistag', 'XII Stag', ps2, '?', 'vertical shooter', '?', false); //added 10/09/2006\
games[count++] = new entry('ps2_shadow', 'Shadow of the Collosus', ps2, 'sce', 'adventure', 4.0, false);
games[count++] = new entry('ps2_disgaea2', 'Disgaea 2', ps2, 'nippon ichi', 'strategy rpg', '?', false);
games[count++] = new entry('ps2_magnacarta', 'Magna Carta', ps2, 'atlus / ?', 'role playing', '?', false);
games[count++] = new entry('ps2_ffxii', "Final Fantasy XII (Collector's Edition)", ps2, 'sqaure enix', 'role playing', 4.5, false); //added 3/11/07
games[count++] = new entry('ps2_fframe3', 'Fatal Frame 3', ps2, 'tecmo', 'survivor horror', '?', false); //added 3/11//07

games[count++] = new entry('psp_genchaos', 'Generation of Chaos', psp, 'Nippon Ichi', 'strategy rpg', '?', false);
games[count++] = new entry('psp_iqmania', 'IQ Mania', psp, 'Sony', 'puzzle', '?', false);
games[count++] = new entry('psp_pq', 'PQ: Practical Intelligence Quotient', psp, 'Sony', 'puzzle', '?', false);
games[count++] = new entry('psp_gradius', 'Gradius Collection', psp, 'konami', 'horizontal shooter', '?', false); //added 3/11/07

games[count++] = new entry('ps_ffvii', 'Final Fantasy VII', psx, 'squaresoft', 'rpg', 4.5, false);
games[count++] = new entry('ps_ffvii_ij', 'Final Fantasy VII International', psx, 'squaresoft', 'rpg', 4.5, true);
games[count++] = new entry('ps_ffviii', 'Final Fantasy VIII', psx, 'squaresoft', 'rpg', 4.0, false);
games[count++] = new entry('ps_ffviii_j', 'Final Fantasy VIII', psx, 'squaresoft', 'rpg', 4.0, true);
games[count++] = new entry('ps_ffix', 'Final Fantasy IX', psx, 'squaresoft', 'rpg', 3.0, false);
games[count++] = new entry('ps_ffa', 'Final Fantasy Anthology', psx, 'squaresoft', 'rpg', '?', false);
games[count++] = new entry('ps_ffc', 'Final Fantasy Chronicles', psx, 'squaresoft', 'rpg', '?', false);
games[count++] = new entry('ps_fft', 'Final Fantasy Tactics', psx, 'squaresoft', 'rpg', 4.5, false);
games[count++] = new entry('ps_ffo', 'Final Fantasy Origins', psx, 'squaresoft', 'rpg', '?', false);
games[count++] = new entry('ps_lom', 'Legend of Mana', psx, 'squaresoft', 'action rpg', 4.0, false);
games[count++] = new entry('ps_xeno', 'Xenogears', psx, 'squaresoft', 'rpg', 4.5, false);
games[count++] = new entry('ps_vstory', 'Vagrant Story', psx, 'squaresoft', 'action rpg', 5.0, false);
games[count++] = new entry('ps_saga2', 'SaGa Frontier II', psx, 'squaresoft', 'rpg', 3.5, false);
games[count++] = new entry('ps_ccross', 'Chrono Cross', psx, 'squaresoft', 'rpg', 5.0, false);
games[count++] = new entry('ps_ccross_j', 'Chrono Cross', psx, 'squaresoft', 'rpg', 5.0, true);
games[count++] = new entry('ps_lunar1', 'Lunar Silver Star Story Complete', psx, 'working designs', 'rpg', 4.0, false);
games[count++] = new entry('ps_ehrgeiz_j', 'Ehrgeiz', psx, 'squaresoft', 'fighter', 3.0, true);
games[count++] = new entry('ps_bfm_j', 'Brave Fencer Musashiden', psx, 'squaresoft', 'action rpg', 4.0, true);
games[count++] = new entry('ps_einhander', 'Einhander', psx, 'squaresoft', 'horizontal shooter', 4.0, false);
games[count++] = new entry('ps_wipeoutxl', 'Wipeout XL', psx, 'psygnosis', 'futuristic racer', 4.5, false);
games[count++] = new entry('ps_wipeout3', 'Wipeout 3', psx, 'psygnosis', 'futuristic racer', 4.5, false);
games[count++] = new entry('ps_gt', 'Gran Turismo', psx, 'sce / polyphony digital', 'racing sim', 5.0, false);
games[count++] = new entry('ps_gt2', 'Gran Turismo 2', psx, 'sce / polyphony digital', 'racing sim', 5.0, false);
games[count++] = new entry('ps_megamanl', 'Megaman Legends', psx, 'capcom', 'platform', 4.0, false);
games[count++] = new entry('ps_megamanl2', 'Megaman Legends 2', psx, 'capcom', 'platform', 4.5, false);
games[count++] = new entry('ps_megaman8', 'Megaman 8', psx, 'capcom', 'side-scoller', 3.5, false);
games[count++] = new entry('ps_tronbonne', 'The Misadventures of Tron Bonne', psx, 'capcom', 'platform', 3.5, false);
games[count++] = new entry('ps_ddr_usa', 'Dance Dance Revolution', psx, 'konami', 'dance', 3.5, false);
games[count++] = new entry('ps_ddr_konamix', 'Dance Dance Revolution Konamix', psx, 'konami', 'dance', 3.5, false);
games[count++] = new entry('ps_ddr_3rd', 'Dance Dance Revolution 3rd Mix', psx, 'konami', 'dance', 5.0, true);
games[count++] = new entry('ps_ddr_extra', 'Dance Dance Revolution Extra Mix', psx, 'konami', 'dance', 4.0, true); //added 10/09/2006
games[count++] = new entry('ps_ddr5th', 'Dance Dance Revolution 5th Mix', psx, 'konami', 'dance', 4.5, true);
games[count++] = new entry('ps_ddr_2cvap1', 'Dance Dance Revolution 2nd Mix Club Version Append Disc 1', psx, 'konami', 'dance', 2.0, true);
games[count++] = new entry('ps_ddr_2cvap2', 'Dance Dance Revolution 2nd Mix Club Version Append Disc 2', psx, 'konami', 'dance', 2.0, true);
games[count++] = new entry('ps_sui1', 'Suikoden', psx, 'konami', 'rpg', '?', false);
games[count++] = new entry('ps_jcacoon', 'Jade Cacoon', psx, 'sce / ?', 'rpg', 3.0, false);
games[count++] = new entry('ps_dwvii', 'Dragon Warrior VII', psx, 'enix', 'rpg', 2.5, false);
games[count++] = new entry('ps_socean2', 'Star Ocean Second Story', psx, 'enix', 'rpg', '?', false);
games[count++] = new entry('ps_tenchu', 'Tenchu', psx, 'activision / ?', 'action', 4.5, false);
games[count++] = new entry('ps_cv_symphony', 'Castlevania Symphony of the Night', psx, 'konami', 'side-scroller', 5.0, false);
games[count++] = new entry('ps_istick', 'Irritating Stick', psx, 'jaleco / ?', 'puzzle', 2.5, false);
games[count++] = new entry('ps_ddice', 'Devil Dice', psx, 'thq / ?', 'puzzle', '?', false);
games[count++] = new entry('ps_snatcher', 'Snatcher', psx, 'konami', 'adventure', 5.0, true);
games[count++] = new entry('ps_policenauts', 'Policenauts', psx, 'konami', 'adventure', '?', true);
games[count++] = new entry('ps_mdriller', 'Mr. Driller', psx, 'namco', 'action puzzle', 4.0, false);
games[count++] = new entry('ps_vhunterd', 'Vampire Hunter D', psx, 'jaleco / ?', 'adventure', '?', false);
games[count++] = new entry('ps_gits', 'Ghost in the Shell', psx, 'thq / ?', 'action/adv', '?', false);
games[count++] = new entry('ps_spf2t', 'Super Puzzle Fighter II Turbo', psx, 'capcom', 'puzzle', 3.5, false);
games[count++] = new entry('ps_mslugx', 'Metal Slug X', psx, 'snk', 'side-scroller', 3.5, false);
games[count++] = new entry('ps_raycrisis', 'Raycrisis', psx, 'working designs / taito', 'vertical shooter', 4.0, false);
games[count++] = new entry('ps_raystorm', 'Raystorm', psx, 'working designs / taito', 'vertical shooter', '?', false);
games[count++] = new entry('ps_rtyped', 'R-Type Delta', psx, 'irem', 'horizontal shooter', 4.0, false);
games[count++] = new entry('ps_rtypes', 'R-Types', psx, 'irem', 'horizontal shooter', '?', false);
games[count++] = new entry('ps_icrisis', 'Incredible Crisis', psx, '? / ?', 'mini games', 3.5, false);
games[count++] = new entry('ps_pfighter', 'Pocket Fighter', psx, 'capcom', 'fighter', 3.5, false);
games[count++] = new entry('ps_vibribbon', 'Vib Ribbon', psx, '?', 'rhythm demo', '?', true); //added 11/8/2006
games[count++] = new entry('ps_tobal2', 'Tobal 2', psx, 'squaresoft', 'fighter', '?', true); //added 12/14/2006
games[count++] = new entry('ps_buniverse', 'Baby Universe', psx, '?', 'tech demo', '?', true); //added 12/14/2006

games[count++] = new entry('xbox_pdragoono', 'Panzer Dragoon Orta', xbox, 'sega', 'rail-shooter', 3.5, false);
games[count++] = new entry('xbox_fable_le', 'Fable (LE)', xbox, 'microsoft / lionhead studios', 'action rpg', 4.5, false);
games[count++] = new entry('xbox_mslug3', 'Metal Slug 3', xbox, 'snk', 'side-scroller', 5.0, false);
games[count++] = new entry('xbox_mslug45', 'Metal Slug 4/5', xbox, 'snk', 'side-scroller', 3.5, false);
games[count++] = new entry('xbox_ddr_ultra', 'Dance Dance Revolution UltraMix', xbox, 'konami', 'dance', 4.0, false);
games[count++] = new entry('xbox_ddr_ultra2', 'Dance Dance Revolution UltraMix 2', xbox, 'konami', 'dance', '?', false);
games[count++] = new entry('xbox_fframe2dc', 'Fatal Frame II: Director\'s Cut', xbox, 'tecmo', 'survival horror', 4.5, false);
games[count++] = new entry('xbox_pso1n2', 'Phantasy Star Online Episodes I+II', xbox, 'sega', 'mmorpg', 4.5, false);
games[count++] = new entry('xbox_ngaiden', 'Ninja Gaiden', xbox, 'tecmo', 'action', '?', false);
games[count++] = new entry('xbox_hotd3', 'House of the Dead III', xbox, 'sega', 'shooter', '?', false);
games[count++] = new entry('xbox_sshowdown5', 'Samurai Showdown V', xbox, 'SNK playmore', 'fighter', '?', false);
games[count++] = new entry('xbox_psyvariar_j', 'Psyvariar LE', xbox, 'Success', 'vertical shooter', '?', true);
games[count++] = new entry('xbox_ct3', 'Crazy Taxi 3', xbox, 'Sega', 'racer?', '?', false);
games[count++] = new entry('xbox_ddr_ultra4', 'Dance Dance Revolution UltraMix 4', xbox, 'konami', 'dance', '?', false); //added 3/11/07

games[count++] = new entry('x360_ffxibeta', 'Final Fantasy XI Online Beta', x360, 'Square Enix', 'mmorpg', 3.5, false);
games[count++] = new entry('x360_ffxi', 'Final Fantasy XI', x360, 'Square Enix', 'mmorpg', '?', false);
games[count++] = new entry('x360_sneakking', 'Sneak King', x360, 'Burger King / BLITZ games', 'action', 3.5, false);
games[count++] = new entry('x360_pocketbike', 'Pocket Bike Racer', x360, 'Burger King / BLITZ games', 'racing', '?', false);
games[count++] = new entry('x360_bigbumpin', 'Big Bumpin', x360, 'Burger King / BLITZ games', 'action', '?', false);

games[count++] = new entry('dc_ctaxi', 'Crazy Taxi', dc, 'sega', 'racer?', 4.0, false);
games[count++] = new entry('dc_scaliber', 'Soul Caliber', dc, 'namco', 'fighter', 5.0, false);
games[count++] = new entry('dc_vtennis', 'Virtual Tennis', dc, 'sega', 'sports', 4.5, false);
games[count++] = new entry('dc_vtennis2k1', 'Virtual Tennis 2k1', dc, 'sega', 'sports', 3.5, false);
games[count++] = new entry('dc_chuchu', 'Chu Chu Rocket', dc, 'sega', 'puzzle', 3.5, false);
games[count++] = new entry('dc_berserk', 'Sword of Berserk', dc, 'ascii / ?', 'action adv.', 2.0, false);
games[count++] = new entry('dc_lodoss', 'Record of Lodoss War', dc, 'conspiracy / ?', 'action rpg', 3.0, false);
games[count++] = new entry('dc_bangaio', 'Bangai-O', dc, '? / treasure', 'action', 3.5, false);
games[count++] = new entry('dc_mmatrix', 'Mars Matrix', dc, 'capcom', 'veritical shooter', 4.5, false);
games[count++] = new entry('dc_rez', 'Rez', dc, 'sega / uga', 'rail shooter', 4.5, true); //added 10/09/2006
games[count++] = new entry('dc_ggx', 'Guilty Gear X', dc, 'sammy', 'fighter', 4.5, true); //added 11/16/2006
games[count++] = new entry('dc_mvc1', 'Marvel v. Capcom', dc, 'capcom', 'fighter', '?', false); //added 3/11/07
games[count++] = new entry('dc_jgr', 'Jet Grind Radio', dc, 'sega', 'rhythm adventure', '?', false); //added 3/11/07

games[count++] = new entry('sat_pdragoons', 'Panzer Dragoon Saga', sat, 'sega', 'rpg', '?', false);
games[count++] = new entry('sat_pdragoon', 'Panzer Dragoon', sat, 'sega', 'rail-shooter', '?', false);
games[count++] = new entry('sat_brangers', 'Burning Rangers (w/o Case)', sat, 'sega', 'platform', 4.0, false);
games[count++] = new entry('sat_sforce3', 'Shining Force III', sat, 'sega', 'rpg', '?', false);
games[count++] = new entry('sat_mkrayearth', 'Magic Knight Rayearth', sat, 'working designs', 'action rpg', 2.0, false);
games[count++] = new entry('sat_nights', 'Nights', sat, 'sega', 'action/adv', 4.5, false);
games[count++] = new entry('sat_ejim2', 'Earthworm Jim 2', sat, 'shiny', 'side-scroller', 4.5, false);
games[count++] = new entry('sat_revil', 'Resident Evil', sat, 'capcom', 'survival horror', 3.5, false);
games[count++] = new entry('sat_eva', 'Evangelion 2nd Impression', sat, '?', 'action / text', '?', true);
games[count++] = new entry('sat_df', 'Dragon Force', sat, '?', 'strategy rpg', '?', true); //added 10/09/2006
games[count++] = new entry('sat_shining', 'Shining Wisdom', sat, '?', 'rpg', '?', true); //added 10/09/2006
games[count++] = new entry('sat_policenauts', 'Policenauts (Limited)', sat, 'konami', 'adventure', '?', true); //added 10/10/2006
games[count++] = new entry('sat_gheroesj', 'Guardian Heroes', sat, 'treasure', 'fighting / action', '?', true); //added 11/8/2006
games[count++] = new entry('sat_mkrayearthj', 'Magic Knight Rayearth', sat, 'working designs', 'action rpg', 2.0, true); //added 11/8/2006
games[count++] = new entry('sat_togre', 'Tactics Ogre', sat, '?', 'strategy rpg', '?', true); //added 11/8/2006
games[count++] = new entry('sat_snatcher', 'Snatcher', sat, 'konami', 'adventure', '5.0', true); //added 11/8/2006
games[count++] = new entry('sat_langraiser', 'Langraiser III', sat, '?', 'role playing', '?', true); //added 11/8/2006
games[count++] = new entry('sat_pdragoonj', 'Panzer Dragoon', sat, 'sega', 'rail-shoooter', 4.0, true); //added 11/8/2006
games[count++] = new entry('sat_pdragoon2j', 'Panzer Dragoon Zwei', sat, 'sega', 'rail-shooter', 4.5, true); //added 11/8/2006
games[count++] = new entry('sat_astal', 'Astal', sat, 'sega', 'side scroller', 2.0, true); //added 11/8/2006
games[count++] = new entry('sat_ogrebattle', 'Ogre Battle', sat, 'quest', 'tactical rpg', 4.0, true); //added 11/8/2006
games[count++] = new entry('sat_nightsj', 'Nights', sat, 'sega', 'action/adv', 4.5, true); //added 11/8/2006
games[count++] = new entry('sat_xmasnightsj', 'Christmas Nights', sat, 'sega', 'action/adv', 4.0, true); //added 11/8/2006
games[count++] = new entry('sat_puzzlefight', 'Super Puzzle Fighter II', sat, 'capcom', 'puzzle', 4.5, true); //added 11/8/2006
games[count++] = new entry('sat_ej2j', 'Earthworm Jim 2', sat, 'shiny / playmates', 'sidescroller', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_ssbombj', 'Saturn Bomberman', sat, 'hudson', 'action', 4.5, true); //added 11/16/2006
games[count++] = new entry('sat_sfmovie', 'Street Fighter the movie the game', sat, 'capcom', 'fighter', 0.5, true); //added 11/16/2006
games[count++] = new entry('sat_mvs', 'Marvel v. Street Figther', sat, 'capcom', 'fighter', 4.5, true); //added 11/16/2006
games[count++] = new entry('sat_doa', 'Dead or Alive', sat, 'tecmo', 'fighter', 3.5, true); //added 11/16/2006
games[count++] = new entry('sat_wipeout', 'Wipeout', sat, 'psygnosis', 'racer', 3.5, true); //added 11/16/2006
games[count++] = new entry('sat_dd', 'Destruction Derby', sat, 'psygnosis', 'racer', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_twinbee', 'Twinbee Deluxe Pack', sat, 'konami', 'shooter', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_parodius', 'Parodius da! Deluxe Pack', sat, 'konami', 'shooter', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_thor2', 'Thor 2 (Legend of Oasis)', sat, 'sega', 'action rpg', '?', true); //added 11/16/2006
games[count++] = new entry('sat_hotd', 'House of the Dead', sat, 'sega', 'shooter', 4.5, true); //added 11/16/2006
games[count++] = new entry('sat_ssrpg', 'Samurai Spirits RPG', sat, 'snk', 'role playing', '?', true); //added 11/16/2006
games[count++] = new entry('sat_ultraman', 'Ultraman something...', sat, '?', 'fighter', '?', true); //added 11/16/2006
games[count++] = new entry('sat_md3', 'Magical Drop 3', sat, 'data east', 'puzzle', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_tp', 'Terra Phastasma', sat, 'sega', 'strategy rpg', '?', true); //added 11/16/2006
games[count++] = new entry('sat_gf', 'Galaxy Fight', sat, '?', 'fighter', 1.0, true); //added 11/16/2006
games[count++] = new entry('sat_leynos', 'Assault Suit Leynos 2', sat, '?', 'sidescroller', '?', true); //added 11/16/2006
games[count++] = new entry('sat_culcept', 'Culdcept', sat, '?', 'cc boardgame', 4.0, true); //added 11/16/2006
games[count++] = new entry('sat_layer', 'Layer Section', sat, 'taito', 'shooter', 4.5, true); //added 11/24/2006
games[count++] = new entry('sat_vampire', 'Vampire Savior', sat, 'capcom', 'fighter', '?', true); //added 11/24/2006
games[count++] = new entry('sat_soukyo', 'Soukyogurentai', sat, '?', 'shooter', 4.0, true); //added 11/24/2006
games[count++] = new entry('sat_gradius', 'Gradius Deluxe Pack', sat, 'konami', 'shooter', 3.5, true); //added 11/24/2006
games[count++] = new entry('sat_gunbird', 'Gunbird', sat, 'atlus / psyiko', 'shooter', 4.5, true); //added 11/24/2006
games[count++] = new entry('sat_sonicjam', 'Sonic Jam', sat, 'sega', 'side scroller', 4.0, true); //added 11/24/2006
games[count++] = new entry('sat_dariusg', 'Darius Gaiden', sat, 'taito', 'shooter', 3.5, true); //added 11/24/2006
games[count++] = new entry('sat_shinobi', 'Shin Shinobi Den', sat, 'sega', 'side scroller', 4.5, true); //added 11/24/2006
games[count++] = new entry('sat_bomberfight', 'Saturn Bomberman Fight', sat, 'hudson', 'action', 3.0, true); //added 11/24/2006
games[count++] = new entry('sat_xmenvsf', 'Xmen v. Street Fighter', sat, 'capcom', 'fighter', '?', true); //added 11/27/2006
games[count++] = new entry('sat_marvel', 'Marvel Super Heroes', sat, 'capcom', 'fighter', '?', true); //added 11/28/2206
games[count++] = new entry('sat_combatbots', 'Cyberbots', sat, 'capcom', 'fighter', '?', true); //added 11/28/2006
games[count++] = new entry('sat_kof97', 'The King of Fighter 97', sat, 'snk', 'fighter', '?', true); //added 11/28/2006
games[count++] = new entry('sat_vcop2', 'Virtua Cop 2', sat, 'sega', 'arcade shooter', 3.5, true); //added 11/28/2006
games[count++] = new entry('sat_vcop', 'Virtua Cop', sat, 'sega', 'arcade shooter', '?', true); //added 11/29/2006
games[count++] = new entry('sat_draculax', 'Dracula X', sat, 'konami', 'side scroller', 4.5, true); //added 12/4/2006
games[count++] = new entry('sat_sexyparodius', 'Sexy Parodius', sat, 'konami', 'shooter', 4.5, true); //added 12/4/2006
games[count++] = new entry('sat_xmen', 'Xmen Children of the Atom', sat, 'capcom', 'fighter', '?', true); //added 12/4/2006
games[count++] = new entry('sat_goldenaxe', 'Golden Axe The Duel', sat, 'sega', 'fighter', '?', true); //added 12/4/2006
games[count++] = new entry('sat_fatalfury3', 'Fatal Fury 3', sat, 'snk', 'fighter', '?', true); //added 12/4/2006
games[count++] = new entry('sat_sgm', 'Steam Gear Mash', sat, '?', 'adventure', '?', true); //added 12/4/2006
games[count++] = new entry('sat_deza2', 'Dezaemon 2', sat, '?', 'shooter maker', '?', true); //added 12/4/2006
games[count++] = new entry('sat_pfx', 'Pretty Fighter X', sat, 'imagineer', 'fighter', 2.0, true); //added 12/14/2006
games[count++] = new entry('sat_vhunter', 'Vampire Hunter', sat, 'capcom', 'fighter', '?', true); //added 12/14/2006
games[count++] = new entry('sat_outlaws', 'Outlaws ...', sat, 'data east', 'fighter', '?', true); //added 12/14/2006
games[count++] = new entry('sat_ddp', 'DoDonPachi', sat, 'atlus / cave', 'shooter', 4.5, true); //added 12/20/2006
games[count++] = new entry('sat_capcom5', 'Capcom Generations 5', sat, 'capcom', 'fighter', '?', true); //added 12/20/2006
games[count++] = new entry('sat_vhearts', 'Vandal Hearts', sat, 'konami', 'strategy rpg', '?', true); //added 12/20/2006
games[count++] = new entry('sat_realbout', 'Fatal Fury: Real Bout', sat, 'snk', 'fighter', '?', true); //added 12/20/2006

games[count++] = new entry('scd_ejim_se', 'Earthworm Jim Special Edition', scd, 'shiny', 'side-scroller', 4.5, false);
games[count++] = new entry('scd_pmail', 'Popful Mail', scd, 'working designs', 'action rpg', '?', false);
games[count++] = new entry('scd_sshark', 'Sewer Shark', scd, 'sony', 'cinema game', 2.0, false);

games[count++] = new entry('gen_tjne', 'Toe Jam & Earl', gen, 'sega / ?', 'adventure', 5.0, false);
games[count++] = new entry('gen_ejim', 'Earthworm Jim', gen, 'shiny', 'side-scroller', 4.5, false);
games[count++] = new entry('gen_sonic', 'Sonic the Hedgehog', gen, 'sega', 'side-scroller', 4.5, false);
games[count++] = new entry('gen_sonic2', 'Sonic the Hedgehog 2', gen, 'sega', 'side-scroller', 4.5, false);
games[count++] = new entry('gen_abeast', 'Altered Beast', gen, 'sega', 'side-scroller', 3.0, false);
games[count++] = new entry('gen_dheady', 'Dynamite Heady', gen, '? / treasure', 'side-scroller', '?', false);
games[count++] = new entry('gen_bvdd', 'Battletoads v. Double Dragon', gen, 'rare', 'side-scroller', '?', false);

games[count++] = new entry('wii_trauma', 'Trauma Center', wii, 'atlus', 'surgery sim', 3.5, false); //added 3/11/07
games[count++] = new entry('wii_zeldatp', 'Legend of Zelda Twilight Princess', wii, 'nintendo', 'adventure', 4.5, false); //added 3/11/07
games[count++] = new entry('wii_sports', 'Wii Sports', wii, 'nintendo', 'mini sports games', 2.0, false); //added 3/11/07
games[count++] = new entry('wii_play', 'Wii Play', wii, 'nintendo', 'mini games', 0.5, false); //added 3/11/07
games[count++] = new entry('wii_msluga', 'Metal Slug Anthology', wii, 'snk', 'side-scroller', '?', false); //added 3/11/07
//games[count++] = new entry('wii_rayman', 'Rayman Ravin\' Rabbits', wii, 'ubisoft', 'mini-games', 4.0, false); //added 3/11/07

games[count++] = new entry('vc_gunstar', 'Gunstar Heroes', vc, 'treasure / sega', 'side-scroller', 4.5, false); //added 3/11/07

games[count++] = new entry('gc_zeldawow', 'Legend of Zelda Wand of Wind', gc, 'nintendo', 'adventure', 4.5, true);
games[count++] = new entry('gc_zeldaww', 'Legend of Zelda Wind Waker', gc, 'nintendo', 'adventure', 4.5, false);
games[count++] = new entry('gc_zeldac', 'Legend of Zelda Collection', gc, 'nintendo', 'adventure', '?', false);
games[count++] = new entry('gc_zeldaoot', 'Legend of Zelda Ocarina of Time', gc, 'nintendo', 'adventure', '?', false);
games[count++] = new entry('gc_zeldafs', 'Legend of Zelda Four Swords', gc, 'nintendo', 'adventure', '?', false);
games[count++] = new entry('gc_fzerogx', 'Fzero GX', gc, 'nintendo / sega', 'futuristic racer', 4.0, false);
games[count++] = new entry('gc_extemeg3', 'Extreme G3', gc, 'acclaim', 'futuristic racer', 3.0, false);
games[count++] = new entry('gc_acrossing', 'Animal Crossing', gc, 'nintendo', 'simulation', 4.5, false);
games[count++] = new entry('gc_pikmin', 'Pikmin', gc, 'nintendo', 'puzzle sim', 5.0, false);
games[count++] = new entry('gc_pikmin_2', 'Pikmin 2', gc, 'nintendo', 'puzzle sim', '?', false);
games[count++] = new entry('gc_ikaruga', 'Ikaruga', gc, 'atari / treasure', 'horizontal shooter', 5.0, false);
games[count++] = new entry('gc_hmoonwl', 'Harvest Moon A Wonderful Life', gc, 'natsume / marvelous', 'farming sim', 4.5, false);
games[count++] = new entry('gc_ffcc', 'Final Fantasy Crystal Chronicles', gc, 'squaresoft', 'action rpg', 4.0, false);
games[count++] = new entry('gc_ffcc_j', 'Final Fantasy Crystal Chronicles', gc, 'squaresoft', 'action rpg', 4.0, true);
games[count++] = new entry('gc_scaliber2_j', 'Soul Caliber II', gc, 'namco', 'fighter', 4.5, true);
games[count++] = new entry('gc_cubivore_j', 'Animal Leader', gc, 'nintendo / ?', 'simulation?', 3.0, true);
games[count++] = new entry('gc_shikigami2', 'Shikigami no Shiro II', gc, 'alfa systems', 'horizontal shooter', 4.0, true);
games[count++] = new entry('gc_vjoe', 'Viewtiful Joe', gc, 'capcom', 'side-scroller', 4.5, false);
games[count++] = new entry('gc_vjoe2', 'Viewtiful Joe 2', gc, 'capcom', 'side-scroller', '?', false);
games[count++] = new entry('gc_bkaitos', 'Baten Kaitos', gc, 'namco / monolith', 'crpg', '?', false);
games[count++] = new entry('gc_pacmanvs', 'Pacman Vs.', gc, 'namco', 'pacman', 5.0, false);
games[count++] = new entry('gc_tosymphonia', 'Tales of Symphonia', gc, 'namco', 'arpg', 4.0, false);
games[count++] = new entry('gc_smball_pc', 'Super Monkey Ball (Player\'s Choice)', gc, 'sega', 'action puzzle', 4.0, false);
games[count++] = new entry('gc_smball2_pc', 'Super Monkey Ball 2 (Player\'s Choice)', gc, 'sega', 'action puzzle', 4.5, false);
games[count++] = new entry('gc_chaos_field', 'Chaos Field', gc, 'O3', 'horizontal shooter', 4.0, false);
games[count++] = new entry('gc_puzzle_collection', 'Nintendo Puzzle Collection', gc, 'nintendo', 'puzzle', 3.5, false);
games[count++] = new entry('gc_odama', 'Odama', gc, 'Nintendo', 'rts pinball', 3.0, false);
games[count++] = new entry('gc_zeldatp', 'Legend of Zelda Twilight Princess', gc, 'nintendo', 'adventure', 5.0, false); //added 3/11/07
games[count++] = new entry('gc_chibi', 'Chibi Robo', gc, 'nintendo', '?', '?', false); //added 3/11/07

games[count++] = new entry('n64_zeldaoot', 'Legend of Zelda Ocarina of Time (Collector\'s Edition)', n64, 'nintendo', 'adv.', 5.0, false);
games[count++] = new entry('n64_zeldamm', 'Legend of Zelda Majora\'s Mask (Collector\'s Edition)', n64, 'nintendo', 'adv.', '?', false);
games[count++] = new entry('n64_hmoon', 'Harvest Moon 64', n64, 'natsume', 'farming sim', 4.0, false);
games[count++] = new entry('n64_drmario', 'Dr. Mario 64 (w/o Box)', n64, 'nintendo', 'puzzle', 4.0, false);
games[count++] = new entry('n64_pd', 'Perfect Dark (w/o Box)', n64, 'nintendo', 'first person shooter', 4.0, false);
games[count++] = new entry('n64_tetrisphere', 'Tetrisphere (w/o Box)', n64, 'nintendo', 'puzzle', 3.0, false);
games[count++] = new entry('n64_fzero', 'Fzero 64 (w/o Box)', n64, 'nintendo', 'futuristic racer', 4.0, false);
games[count++] = new entry('n64_sapunish', 'Sin and Punishment', n64, 'nintendo / treasure', 'rail-shooter', 4.0, true);

games[count++] = new entry('gba_somana', 'Sword of Mana', gba, 'squaresoft', 'action rpg', 5.0, false);
games[count++] = new entry('gba_ffta', 'Final Fantasy Tactics Advance', gba, 'squaresoft', 'strategy rpg', 4.0, false);
games[count++] = new entry('gba_chuchu', 'Chu Chu Rocket (w/o Box)', gba, 'sega', 'puzzle', 4.0, false);
games[count++] = new entry('gba_gradius', 'Gradius Galaxies', gba, 'konami', 'horizontal shooter', 4.0, false);
games[count++] = new entry('gba_astro', 'Astro Boy', gba, 'sega / treasure', 'platform', 4.0, false);
games[count++] = new entry('gba_cv_aos', 'Castlevania: Aria of Sorrow', gba, 'konami', 'side-scroller', 5.0, false);
games[count++] = new entry('gba_cv_cotm', 'Castlevania: Circle of the Moon', gba, 'konami', 'side-scroller', '?', false);
games[count++] = new entry('gba_msluga', 'Metal Slug Advance', gba, 'SNK', 'action side-scroller', 4.5, false);
games[count++] = new entry('gba_metriodz', 'Metriod Zero Mission', gba, 'Nintendo', 'side-scroller', 4.5, false);
games[count++] = new entry('gba_zeldamc', 'Legend of Zelda: Minish Cap', gba, 'Nintendo / Capcom', 'adventure', 4.5, false);
games[count++] = new entry('gba_drmario', 'Dr. Mario (NES)', gba, 'Nintendo', 'action puzzle', 4.5, false);
games[count++] = new entry('gba_pokemonfr', 'Pokemon Fire Red', gba, 'Nintendo / Game Freak', 'role playing', 4.0, false);
games[count++] = new entry('gba_pokemone', 'Pokemon Emerald', gba, 'Nintendo / Game Freak', 'role playing', 4.0, false);
games[count++] = new entry('gba_ff1', 'Final Fantasy I+II Dawn of Souls', gba, 'Squaresoft', 'role playing', '?', false);
games[count++] = new entry('gba_rebelstar', 'Rebelstar (Xcom) Tactical Command', gba, 'Namco', 'strategy rpg', 4.5, false);
games[count++] = new entry('gba_gunstar', 'Gunstar Super Heroes', gba, 'Sega / Treasure', 'side-scroller action', 4.0, false);
games[count++] = new entry('gba_sss', 'Sigma Star Saga', gba, 'Namco', 'shooter / rpg', 4.0, false);
games[count++] = new entry('gba_drill_dozer', 'Drill Dozer', gba, 'Nintendo / Game Freak', 'side scroller', 4.5, false);
games[count++] = new entry('gba_pinballdead', 'Pinball of the Dead', gba, 'Sega', 'pinball', 3.0, true); //added 3/11/07
games[count++] = new entry('gba_kururin', 'Kururin Paradise', gba, 'nintendo', 'puzzle', 3.0, true); //added 3/11/07

games[count++] = new entry('gbc_metal_gear', 'Metal Gear Solid (Ghost Babel)', gbc, 'Konami', 'adventure', 2.0, false);
games[count++] = new entry('gbc_zelda', 'Legend of Zelda: Oracles of Ages', gbc, 'Nintendo / capcom', 'action rpg', 3.5, false);
games[count++] = new entry('gbc_ddr2', 'Dance Dance Revolution Gameboy 2', gbc, 'Konami', 'dance', '?', true); //added 10/10/2006

games[count++] = new entry('nds_trauma', 'Trauma Center', nds, 'atlus / ?', 'surgeory sim', 4.5, false);
games[count++] = new entry('nds_sonicrush', 'Sonic Rush', nds, 'sega', 'side-scroller', 4.5, false);
games[count++] = new entry('nds_castlevania', 'Castlevania Dawn of Sorrow', nds, 'konami', 'side-scroller', 4.5, false);
games[count++] = new entry('nds_tetris', 'Tetris DS', nds, 'Nintendo', 'action puzzle', 4.5, false);
games[count++] = new entry('nds_phoenix', 'Phoenix Wright', nds, 'Capcom', 'text adventure', 5.0, false);
games[count++] = new entry('nds_ftmagic', 'Feel the Magix XX/XY', nds, 'sega', 'mini games', 4.0, false);
games[count++] = new entry('nds_point_blank', 'Point Blank DS', nds, 'namco', 'shooter', 3.5, false);
games[count++] = new entry('nds_lost', 'Lost in Blue', nds, 'konami', 'adventure sim', 3.0, false);
games[count++] = new entry('nds_nsmb', 'New Super Mario Brothers', nds, 'nintendo', 'side scroller', 4.5, false);
games[count++] = new entry('nds_brain_age', 'Brain Age', nds, 'nintendo', 'brain game', 4.5, false);
games[count++] = new entry('nds_bba', 'Big Brain Academy', nds, 'nintendo', 'brain game', 4.0, false);
games[count++] = new entry('nds_ouendan', 'Osu Tateaki Ouendan', nds, 'nintendo', 'rhythm', 4.5, true);
games[count++] = new entry('nds_poke_diamond', 'Pocket Monsters Diamond', nds, 'nintendo / game freak', 'rpg', 4.5, true); //added 10/09/2006
games[count++] = new entry('nds_rakubiki_jiten', 'Rakubiki Jiten', nds, 'nintendo', 'kanji dictionary', 4.0, true); //added 10/09/2006
games[count++] = new entry('nds_mecha_mg', 'Choshuso Mecha MG', nds, '?', 'mecha sim', 4.0, true); //added 10/09/2006
games[count++] = new entry('nds_mariokart', 'Mario Kart DS', nds, 'nintendo', 'racing', 4.5, false); //added 10/09/2006
games[count++] = new entry('nds_dl', 'Deep Labyrinth', nds, 'atlus / ?', '1st person rpg', 2.5, false); //added 10/09/2006
games[count++] = new entry('nds_electro', 'Electroplankton', nds, 'nintendo', 'music sim', 4.0, false); //added 10/09/2006
games[count++] = new entry('nds_gyakuto2', 'Phoenix Wright 2', nds, 'capcom', 'text adventure', 5.0, true); //added 11/8/2006
games[count++] = new entry('nds_cpor', 'Castlevania Portrait of Ruin', nds, 'konami', 'side-scroller', 4.5, false); //added 3/11/07
games[count++] = new entry('nds_cmama', 'Cooking Mama', nds, 'taito', 'cooking sim', 3.0, false); //added 3/11/07
games[count++] = new entry('nds_hdusk', 'Hotel Dusk Room 215', nds, 'nintendo', 'text adveture', 4.5, false); //added 3/11/07
games[count++] = new entry('nds_picross', 'Picross DS', nds, 'nintendo', 'puzzle', 4.0, true); //added 3/11/07
games[count++] = new entry('nds_scurge', 'Scurge Hive', nds, '?', '?', '?', false); //added 3/11/07
games[count++] = new entry('nds_megamanzx', 'Megaman ZX', nds, 'capcom', 'action / adventure', 2.5, false); //added 3/11/07

games[count++] = new entry('nes_zelda', 'Legend of Zelda (Gold) (w/o Box)', nes, 'nintendo', 'adventure', 5.0, false);
games[count++] = new entry('nes_zelda2', 'Legend of Zelda II Adventures of Link (Gold) (w/o Box)', nes, 'nintendo', 'adventure', 4.5, false);
games[count++] = new entry('nes_stropics', 'Star Tropics', nes, 'nintendo', 'adventure', 5.0, false);
games[count++] = new entry('nes_metriod', 'Metriod (Rerelease Version)', nes, 'nintendo', 'side-scroller', 5.0, false);

//new code ^_^

function japanese(key, urlcode, htmlcode)
{
	this.key = key;
	this.urlcode = urlcode;
	this.htmlcode = htmlcode;
}

function isJapanesePurchase(game)
{
	return (getJapaneseIndex(game.store) != -1);
}

function getJapaneseIndex(id)
{
	for(jloop_in = 0; jloop_in < jcount; jloop_in++)
	{
		if(id == jcode[jloop_in].key)
			return jloop_in;
	}
	return -1;
}

var jcount = 0;
var jcode = new Array();

function website(key, url)
{
	this.key = key;
	this.url = url;
}

function isWebsite(game)
{
	return (getWebsiteIndex(game.store) != -1);
}

function getWebsiteIndex(id)
{
	for(wloop_in = 0; wloop_in < wcount; wloop_in++)
	{
		if(id == wcode[wloop_in].key)
			return wloop_in;
	}
	return -1;
}

var wcount = 0;
var wcode = new Array();

jcode[jcount++] = new japanese("nihon", "%E6%97%A5%E6%9C%AC", "");

var daiya = "Kogakura";
var penguin = "Tanaka";
var nameshi = "Nameshi";
var lowsumiyoshi = "Matsuyama";
var lowsasebo = "Kikazecho";

jcode[jcount++] = new japanese(daiya, "%E6%96%B0%E5%B0%8F%E3%81%8C%E5%80%89", "");
jcode[jcount++] = new japanese(penguin, "%E7%94%B0%E4%B8%AD", "");
jcode[jcount++] = new japanese(nameshi, "%E6%BB%91%E7%9F%B3", "");
jcode[jcount++] = new japanese(lowsumiyoshi, "%E5%9F%8E%E5%B1%B1", "");
jcode[jcount++] = new japanese(lowsasebo, "%E8%97%A4%E5%8E%9F%E5%BA%97", "");


var Wi = "WI";
var Mn = "MN";
var Wa = "WA";
var Nc = "NC";
var Ia = "IA";

var nagasaki = "Nagasaki";
var togitsu = "Togitsu";
var sasebo = "Sasebo";
var isahaya = "Isahaya";

jcode[jcount++] = new japanese(nagasaki, "%E9%95%B7%E5%B4%8E%E5%B8%82", "");
jcode[jcount++] = new japanese(togitsu, "%E6%99%82%E6%B4%A5", "");
jcode[jcount++] = new japanese(sasebo, "%E4%BD%90%E4%B8%96%E4%BF%9D", "");
jcode[jcount++] = new japanese(isahaya, "%E8%AB%AB%E6%97%A9", "");

var NEW = false;
var USED = true;

var IMPORT = true;
var DOMESTIC = false;

var toysrus = "Toys R Us";
var bestbuy = "Best Buy";
var circuitcity = "Circuit City";
var toyriffic = "Toy-Riffic";
var pgodzilla = "Pink Godzilla";
var samsclub = "Sams Club";

var geo = "Geo";
var bookoff = "Book Off";
var youing = "You-ing";
var tomsawyer = "Tom Sawyer";
var famiconhaus = "Famicon House";
var easttowne = "East Towne Mall";
var ebgames = "EB Games";
var gamestop = "Gamestop";
var gamecrazy = "Game Crazy";
var shopko = "Shopko";
var kmart = "K-Mart";
var preplayed = "Preplayed";
var mainpx = "Main PX";
var blockbuster = "Block Buster";

jcode[jcount++] = new japanese(geo, "%E3%82%B2%E3%82%AA", "");
jcode[jcount++] = new japanese(bookoff, "%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%95", "");
jcode[jcount++] = new japanese(youing, "%E9%81%8A%EF%BC%A9%EF%BC%AE%EF%BC%A7", "");
jcode[jcount++] = new japanese(tomsawyer, "%E3%83%88%E3%83%A0%E3%82%BD%E3%83%BC%E3%83%A4", "");
jcode[jcount++] = new japanese(famiconhaus, "%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E3%83%8F%E3%82%A6%E3%82%B9", "");

var amazon = "Amazon";
var ncsx = "National Console Support";
var gamestopcom = "Gamestop.com";
var circuitcitycom = "Circuit City dot Com";
var compusacom = "CompUSA dot Com";
var dddvd = "Deep Discount DVD";
var familyvideo = "Family Video";
var playasia = "Play Asia";
var ebay = "eBay";
var gift = "";

wcode[wcount++] = new website(amazon, "http://www.amazon.com/");
wcode[wcount++] = new website(ncsx, "http://www.ncsx.com/");
wcode[wcount++] = new website(circuitcitycom, "http://www.circuitcity.com/");
wcode[wcount++] = new website(compusacom, "http://www.compusa.com/");
wcode[wcount++] = new website(dddvd, "http://www.deepdiscount.com/");
wcode[wcount++] = new website(familyvideo, "http://www.familyvideo.com/");
wcode[wcount++] = new website(wii, "http://www.nintendo.com/");
wcode[wcount++] = new website(playasia, "http://playasia.com/");
wcode[wcount++] = new website(ebay, "http://www.ebay.com/");
wcode[wcount++] = new website(gamestopcom, "http://www.gamestop.com/");
wcode[wcount++] = new website(gift, "");


games[count++] = new entry('psp_vprofile','Valkyrie Profile Lenneth',psp,'squaresoft','tradition rpg','?',DOMESTIC,toysrus,'Brookfield',Wi, 21.00, NEW, 3, 2, 2007);
games[count++] = new entry('ps2_schamploo', 'Samurai Champloo Sidetracked', ps2, 'bandai', '?', '?', DOMESTIC, bestbuy, 'Eau Claire', Wi, 4.99, NEW, 3, 9, 2007);
games[count++] = new entry('gen_mcdonalds', 'Ronald McDonald\'s Treasure Land Adventure', gen, 'sega / treasure', 'side-scroller', 4.0, DOMESTIC, toyriffic, 'Eau Claire', Wi, 4.99, USED, 3, 10, 2007); 
games[count++] = new entry('dc_gigawing1', 'Giga Wing', dc, 'capcom', 'verticial shooter', '?', DOMESTIC, toyriffic, 'Eau Claire', Wi, 24.99, USED, 3, 10 , 2007);
games[count++] = new entry('nds_contact', 'Contact', nds, 'atlus / ?', 'action rpg', 3.5, DOMESTIC, circuitcity, 'Madison', Wi, 16.96, NEW, 3, 11, 2007);
games[count++] = new entry('sat_brangersj', 'Burning Rangers', sat, 'sega', 'platformer', '?', IMPORT, geo, daiya, nagasaki, 980, USED, 3, 20, 2007);
games[count++] = new entry('dc_mvc2', 'Marvel v. Capcom 2', dc, 'capcom', 'fighter', '?', IMPORT, geo, daiya, nagasaki, 980, USED, 3, 20, 2007);
games[count++] = new entry('dc_pstone2', 'Power Stone 2', dc, 'capcom', 'fighter', '?', IMPORT, geo, daiya, nagasaki, 1480, USED, 3, 20, 2007);
games[count++] = new entry('sat_pfighter', 'Pocket Fighter', sat, 'capcom', 'fighter', 3.5, IMPORT, bookoff, penguin, nagasaki, 525, USED, 3, 20, 2007);
games[count++] = new entry('dc_mvc', 'Marvel v. Capcom', dc, 'capcom', 'fighter', '?', IMPORT, geo, penguin, nagasaki, 1480, USED, 3, 20, 2007);
games[count++] = new entry('sat_ddeka', 'Dynamite Deka', sat, 'sega', "beat 'em up", '?', IMPORT, geo, penguin, nagasaki, 980, USED, 3, 20, 2007);
games[count++] = new entry('sat_ss3', 'Samurai Showdown 3', sat, 'snk', 'fighter', '?', IMPORT, geo, penguin, nagasaki, 280, USED, 3, 20, 2007);
games[count++] = new entry('psp_parodius','Parodius Portable',psp,'konami','horizontal shooter','?',IMPORT,youing, lowsumiyoshi, nagasaki, 3285, USED, 3, 20, 2007);
games[count++] = new entry('dc_karous', 'Karous', dc, 'milestone', 'vertical shooter', 3.5, IMPORT, tomsawyer, nameshi, nagasaki, 4540, USED, 3, 20, 2007);
games[count++] = new entry('sat_gofight', 'Groove on Fight', sat, 'atlus', 'fighter', '?', IMPORT, geo, "", togitsu, 2980, USED, 3, 20, 2007);
games[count++] = new entry('dc_sgladitor2', 'Star Gladiator 2', dc, 'capcom', 'fighter', '?', IMPORT, geo, lowsasebo, sasebo, 980, NEW, 3, 21, 2007);
games[count++] = new entry('sat_cotton2', 'Cotton 2', sat, 'sega', 'horizontal shooter', '?', IMPORT, geo, lowsasebo, sasebo, 1980, NEW, 3, 21, 2007);
games[count++] = new entry('sat_lsection2', 'Layer Section 2', sat, 'taito', 'vertical shooter', 3.5, IMPORT, geo, lowsasebo, sasebo, 1480, NEW, 3, 21, 2007);
games[count++] = new entry('dc_cvs2', 'Capcom v. SNK 2', dc, 'capcom', 'fighter', 4.5, IMPORT, famiconhaus, "", isahaya, 888, NEW, 3, 23, 2007);
games[count++] = new entry('dc_garou', 'Garou: Mark of the Wolves', dc, 'snk', 'fighter', '?', IMPORT, famiconhaus, "", isahaya, 2280, NEW, 3, 23, 2007);
games[count++] = new entry('dc_kenshi', 'Gekka no kenshi', dc, 'snk', 'fighter', '?', IMPORT, famiconhaus, "", isahaya, 2280, NEW, 3, 23, 2007);

games[count++] = new entry('nds_lost2', 'Lost in Blue 2', nds, 'konami', 'adventure sim', '?', DOMESTIC, easttowne, "Madison", Wi, 29.99, NEW, 4, 2, 2007);
games[count++] = new entry('nds_puzzleq', 'Puzzle Quest', nds, '? / d3', 'puzzle rpg', 4.0, DOMESTIC, shopko, "Burke", Wi, 29.99, NEW, 4, 2, 2007);
games[count++] = new entry('dc_udefeat', 'Under Defeat (Limited)', dc, 'G.Rev', 'vertical shooter', 5.0, IMPORT, ncsx, '', '', 68.00, NEW, 4, 5, 2007);
games[count++] = new entry('dc_exelica', 'Trigger Heart - Exelica', dc, 'Warashi', 'vertical shooter', 4.0, IMPORT, pgodzilla, 'Seattle', Wa, 65.00, NEW,4,7, 2007);
games[count++] = new entry('gc_killer7', 'Killer 7', gc, 'Capcom', 'adventure', 3.5, DOMESTIC, shopko, 'Monona', Wi, 7.49, NEW, 4, 17, 2007);
games[count++] = new entry('xbox_indigo', 'Indigo Prophecy', xbox, 'Quantic Dream / Atari', 'adventure', 4.0, DOMESTIC, shopko, 'Monona', Wi, 19.99, NEW,4,17,2007);
games[count++] = new entry('ps2_raiden3', 'Raiden III', ps2, 'moss / ufo', 'vertical shooter', 3.5, DOMESTIC, easttowne, 'Madison', Wi, 29.99, NEW, 4, 18, 2007);
games[count++] = new entry('ps2_khii', 'Kingdom Hearts II', ps2, 'square enix', 'action rpg', '?', DOMESTIC, kmart, 'Eau Claire', Wi, 19.99, NEW, 4, 21, 2007);
games[count++] = new entry('psp_she', 'Silent Hill Experience', psp, 'konami', 'movie / comic', '?', DOMESTIC, compusacom, '', '', 7.98, NEW, 4, 25, 2007);
games[count++] = new entry('nds_eba', 'Elite Beat Agents', nds, 'nintendo / inis', 'rhythm', 4.5, DOMESTIC, circuitcity, 'Madison', Wi, 29.99, NEW, 4, 29, 2007);

games[count++] = new entry('xbox_shenmue2', 'Shenmue 2 (Limited)', xbox, 'sega', 'adventure', '?', DOMESTIC, shopko, 'Madison', Wi, 14.99, NEW, 5, 1, 2007);
games[count++] = new entry('xbox_jsrf', 'Jet Set Radio Future', xbox, 'sega', 'adventure', 3.5, DOMESTIC, shopko, 'Madison', Wi, 4.99, NEW, 5, 1, 2007);
games[count++] = new entry('ps2_redstar', 'The Red Star', ps2, 'acclaim / union / xs', "beat 'em up / shmup", '?', DOMESTIC, dddvd, '', '', 13.99, NEW, 5, 1, 2007);
games[count++] = new entry('xbox_pyscho', 'Psychonauts', xbox, 'tim schafer / majesco', 'adventure', 4.5, DOMESTIC, preplayed, 'Madison', Wi, 19.99, USED, 5, 8, 2007);
games[count++] = new entry('psp_gurumin', 'Gurumin', psp, 'falcom / mastif', 'adventure', '?', DOMESTIC, easttowne, 'Madison', Wi, 19.99, NEW, 5, 8, 2007);
games[count++] = new entry('ps2_godhand', 'God Hand', ps2, 'Clover Studios / Capcom', 'action', '?', DOMESTIC, shopko, "Burke", Wi, 14.99, NEW, 5, 19, 2007);
games[count++] = new entry('x360_edf', 'Earth Defense Force 2017', x360, '? / D3', 'action', 4.0, DOMESTIC, shopko, "Burke", Wi, 34.99, NEW, 5, 19, 2007);
games[count++] = new entry('nds_ouendan2', 'Ouendan 2', nds, 'iNis / Nintendo', 'rhythm', '?', IMPORT, ncsx, '', '', 45.90, NEW, 5, 22, 2007);
games[count++] = new entry('ps2_artonelico', 'Ar Tonelico', ps2, 'Gust / Nippon Ichi', 'role playing', '?', DOMESTIC, mainpx,'Fort Bragg',Nc, 39.95, NEW, 5, 27, 2007);

games[count++] = new entry('vc_sonic2', 'Sonic the Hedgehog 2', vc, 'sonic team / sega', 'side-scroller', 5.0, DOMESTIC, wii, "", "", 8.00, NEW, 6, 11, 2007);
games[count++] = new entry('wii_bba', 'Big Brain Academy', wii, 'Nintendo', 'Brain Training', 1.0, DOMESTIC, circuitcity, "Madison", Wi, 39.99, NEW, 6, 17, 2007);
games[count++] = new entry('xbox_dreamfall', 'Dreamfall', xbox, 'Funcom / Aspyr', 'boring?', '?', DOMESTIC, blockbuster, "Madison", Wi, 19.99, USED, 6, 19, 2007);
games[count++] = new entry('wii_re4', 'Resident Evil 4 Wii Edition', wii, 'Capcom', 'adventure', 5.0, DOMESTIC, bestbuy, "Madison", Wi, 29.99, NEW, 6, 20, 2007);
games[count++] = new entry('x360_rrosesxx', 'Rumble Roses XX', x360, 'Konami', 'wrestling', 2.0, DOMESTIC, toysrus, "Madison", Wi, 9.98, NEW, 6, 25, 2007);
games[count++] = new entry('x360_ddru', 'Dance Dance Revolution Universe', x360,'Konami','dancing / rhythm','?',DOMESTIC,circuitcity,"Madison",Wi,16.98,NEW,6,26,2007);
games[count++] = new entry('psp_lumines', 'Lumines', psp, 'q entertainment', 'puzzle / rhythm', '?', DOMESTIC, toysrus, "Madison", Wi, 13.98, NEW, 6, 27, 2007);
games[count++] = new entry('psp_lumines2', 'Lumines II', psp, 'q entertainment', 'puzzle / rhythm', '?', DOMESTIC, toysrus, "Madison", Wi, 9.98, NEW, 6, 27, 2007);
games[count++] = new entry('psp_gunpey', 'Gunpey', psp, 'q entertainment', 'puzzle / rhythm', '?', DOMESTIC, toysrus, "Madison", Wi, 9.98, NEW, 6, 27, 2007);
games[count++] = new entry('x360_doax2', 'Dead or Alive Extreme 2', x360, 'tecmo', 'dating sim', '?', DOMESTIC, circuitcity, "Madison", Wi, 16.98, NEW, 6, 29, 2007);

games[count++] = new entry('ps2_rawdanger', 'Raw Danger', ps2, 'irem', 'adventure', '?', DOMESTIC, familyvideo, "", "", 12.99, NEW, 7, 3, 2007);
games[count++] = new entry('x360_condemned', 'Condemned', x360, 'monolith / sega', 'adventure', 2.5, DOMESTIC, gamestop, "Madison", Wi, 24.99, USED, 7, 17, 2007);
games[count++] = new entry('nds_harvestmoon', 'Harvest Moon DS', nds, 'marvelous', 'farming sim', '?', DOMESTIC, bestbuy, "Madison", Wi, 9.98, NEW, 7, 23, 2007);
games[count++] = new entry('vc_actraiser', 'Actraiser', vc, 'quintet / enix', 'side-scroller / sim', 5.0, DOMESTIC, wii, "", "", 8.00, NEW, 7, 28, 2007);

games[count++] = new entry('x360_lostplanet','Lost Planet Collector\'s Edition',x360,'capcom','adventure',3.0,DOMESTIC,circuitcity,"Madison", Wi, 39.99,NEW,8,2, 2007);
games[count++] = new entry('x360_senko', 'Senko no Ronde', x360, 'g.rev / ubisoft', 'fighting / shooter', '?', DOMESTIC, gamestop, "Madison", Wi, 29.99,NEW,8,4, 2007);
games[count++] = new entry('ps2_chulip', 'Chulip', ps2, 'natsumi', 'adventure', '?', DOMESTIC, gamestop, "Madison", Wi, 14.99, NEW, 8, 4, 2007);
games[count++] = new entry('psp_mgspo', 'Metal Gear Solid Portable Ops', psp, 'konami', 'adventure', '?', DOMESTIC, circuitcity, "Plymouth", Mn, 16.96,NEW,8,18, 2007);
games[count++] = new entry('nds_puzzleleague', 'Planet Puzzle League', nds, 'nintendo', 'puzzle', '-', DOMESTIC, circuitcity, "Plymouth", Mn, 22.49, NEW, 8, 19, 2007);
games[count++] = new entry('psp_eee', 'Every Extend Extra', psp, 'q entertainment','shooter / rhythm','?',DOMESTIC,gamestop,"Maple Grove",Mn,14.99, USED, 8, 19, 2007);
games[count++] = new entry('ps2_pumpitup','Pump It Up Exceed',ps2,'mastiff / andamiro','dancing', '?', DOMESTIC, gamestop, "Maple Grove", Mn, 24.99, NEW, 8, 19, 2007);
games[count++] = new entry('vc_supermetroid', 'Super Metroid', vc, 'nintendo', 'adventure', 5.0, DOMESTIC, wii, "", "", 8.00, NEW, 8, 20, 2007);
games[count++] = new entry('nds_brainage2', 'Brain Age 2', nds, 'nintendo', 'brain training', 4.0, DOMESTIC, circuitcity, "Madison", Wi, 14.99, NEW, 8, 23, 2007);
games[count++] = new entry('nds_runefactory', 'Rune Factory', nds, 'natsume', 'farming sim / rpg', 2.0, DOMESTIC, shopko, "Madison", Wi, 29.99, NEW, 8, 23, 2007);
games[count++] = new entry('nds_pw3', 'Phoenix Wright 3', nds, 'capcom', 'text adventure', 4.5, IMPORT, playasia, '', '', 29.90, NEW, 8, 27, 2007);
games[count++] = new entry('wii_metroid', 'Metroid Prime 3', wii, 'nintendo / retro', 'fps', 4.5, DOMESTIC, gamestop, "Madison", Wi, 49.99, NEW, 8, 28, 2007);

games[count++] = new entry('psp_katamari', 'I My Me Katamari', psp, 'namco', 'action', 3.0, DOMESTIC, preplayed, "Madison", Wi, 13.99, USED, 9, 5, 2007);
games[count++] = new entry('x360_bomberman', 'Bomberman Act Zero', x360, 'hudson soft', 'action', '?', DOMESTIC, preplayed, "Madison", Wi, 13.99, USED, 9, 5, 2007);
games[count++] = new entry('gc_bkaitoso', 'Baten Kaitos Origins', gc, 'namco / monolith', 'card rpg', '?', DOMESTIC, toysrus, "Madison", Wi, 15.98, NEW, 9, 5, 2007);
games[count++] = new entry('psp_locoroco', 'Loco Roco', psp, 'scei', 'action / puzzle', '?', DOMESTIC, toysrus, "Madison", Wi, 15.98, NEW, 9, 5, 2007);
games[count++] = new entry('psp_gitaroo', 'Gitaroo Man Lives', psp, 'scei', 'rhythm', 4.0, DOMESTIC, gamestop, "Beaver Dam", Wi, 17.99, USED, 9, 15, 2007);
games[count++] = new entry('ps2_valkyrie2', 'Valkyrie Profile 2', ps2, 'square enix', 'role playing', '?', DOMESTIC, circuitcity, "Appleton", Wi, 11.90,NEW,9,15,2007);
games[count++] = new entry('psp_ffvii', 'Final Fantasy VII Crisis Core w/ PSP', psp, 'square enix', 'role playing', '?', IMPORT, ncsx, "", "", 400.00,NEW,9,18,2007);
games[count++] = new entry('psp_mgsmanga', 'Metal Gear Solid Digital Novel', psp, 'konami', 'text', '?', DOMESTIC, amazon, "", "", 17.99, NEW, 9, 22, 2007);
games[count++] = new entry('x360_psu', 'Phantasy Star Universe', x360, 'sonic team / sega', 'mmorpg', '?', DOMESTIC, kmart, "Eau Claire", Wi, 7.00, NEW, 9, 22, 2007);
games[count++] = new entry('psp_parappa', 'Parappa the Rappa', psp, 'sony', 'rhythm', 2.5, DOMESTIC, toysrus, "Plymouth", Mn, 23.90, NEW, 9, 23, 2007);
games[count++] = new entry('nds_namco', 'Namco Museum', nds, 'namco', 'arcade', '?', DOMESTIC, toysrus, "Plymouth", Mn, 15.90, NEW, 9, 23, 2007);
games[count++] = new entry('x360_halo3','Halo 3 Limited Edition',x360,'bungie / microsoft','first person shooter',4.5,DOMESTIC,bestbuy,"Madison",Wi,69.99,NEW,9,25,2007);

games[count++] = new entry('xbox_ddru3','Dance Dance Revolution UltraMix 3', xbox, 'konami', 'dance', '?', DOMESTIC, toysrus, "La Crosse", Wi, 9.98, NEW, 10, 3, 2007);
games[count++] = new entry('psp_exit', 'Exit', psp, '?', 'puzzle / action', '?', DOMESTIC, toysrus, "La Crosse", Wi, 13.98, NEW, 10, 3, 2007);
games[count++] = new entry('nds_zelda', 'Legend of Zelda: Phantom Hourglass', nds, 'nintendo', 'adventure', '?', DOMESTIC, samsclub,"Madison",Wi,29.99,NEW,10,20,2007);
games[count++] = new entry('wii_mp8', 'Mario Party 8', wii, 'nintendo', 'party game', '?', DOMESTIC, gift, "", "", 0.00, NEW, 10, 20, 2007);
games[count++] = new entry('ps2_yakuza', 'Yakuza', ps2, 'capcom', 'adventure', '?', DOMESTIC, circuitcity, "Madison", Wi, 16.96, NEW, 10, 23, 2007);
games[count++] = new entry('nds_pw3dom', 'Phoenix Wright 3', nds, 'capcom', 'text adventure', 4.5, DOMESTIC, gamestop, "Madison", Wi, 29.99, NEW, 10, 24, 2007);
games[count++] = new entry('psp_castlevania', 'Castlevania Dracula Chronicles', psp, 'konami', 'action', '?', DOMESTIC, gamestop, "Madison", Wi, 29.99, NEW,10,24,2007);
games[count++] = new entry('psp_fft', 'Final Fantasy Tactics', psp, 'squaresoft', 'strategy rpg', 4.5, DOMESTIC, preplayed, "Madison", Wi, 29.99, USED, 10, 26, 2007);
	  
games[count++] = new entry('ps2_haunting', 'Haunting Ground', ps2, 'capcom', 'survival horror', '?', DOMESTIC, ebay, "", "", 14.80, USED, 11, 3, 2007);	  
games[count++] = new entry('ps2_odinsphere', 'Odin Sphere', ps2, 'vanilla / atlus', 'role playing', '?', DOMESTIC, bestbuy, "Dubuque", Ia, 25.00, NEW, 11, 4, 2007);
games[count++] = new entry('ps2_grimgrimoire', 'Grim Grimoire', ps2, 'vanilla / nippon ichi', 'strategy rpg', '?', DOMESTIC, bestbuy, "Dubuque",Ia,25.00,NEW,11,4,2007);
games[count++] = new entry('ps2_steambot', 'Steambot Chronicles', ps2, 'irem / atlus', 'adventure', '?', DOMESTIC, gamestop, "Dubuque", Ia, 19.99, NEW, 11, 4, 2007);
games[count++] = new entry('x360_bullet', 'Bullet Witch', x360, '', 'action', '?', DOMESTIC, preplayed, "Madison", Wi, 19.99, USED, 11, 10, 2007);
games[count++] = new entry('wii_mario', 'Super Mario Galaxy', wii, 'nintendo', 'platformer', '?', DOMESTIC, toysrus, "Madison", Wi, 49.99, NEW, 11, 13, 2007);
games[count++] = new entry('vc_sin', 'Sin and Punishment', vc, 'treasure / nintendo', 'shooter', '?', DOMESTIC, wii, "", "", 12.00, NEW, 11, 18, 2007);
games[count++] = new entry('x360_masseffect', 'Mass Effect', x360, 'bioware / microsoft', 'tps-rpg', 4.5, DOMESTIC, gamestopcom, "", "", 69.99, NEW, 11, 21, 2007);
games[count++] = new entry('wii_ssxblur', 'SSX Blur', wii, 'electronic arts', 'snowboarding', '?', DOMESTIC, bestbuy, "Greenbay", Wi, 14.99, NEW, 11, 23, 2007);
games[count++] = new entry('wii_links', 'Wii Zapper w/ Link\'s Crossbow', wii, 'nintendo', 'shooting', 2.0, DOMESTIC, toysrus, "Greenbay", Wi, 19.99, NEW, 11,23,2007);
games[count++] = new entry('wii_zack', 'Zack & Wiki', wii, 'capcom', 'puzzle', '?', DOMESTIC, toysrus, "Greenbay", Wi, 14.99, NEW, 11, 23, 2007);