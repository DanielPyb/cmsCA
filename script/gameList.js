const gameListArr = [
  {
    name: "Super Mario 64",
    genres: "platformer",
    consoll: "n64",
    img: "images/assets/superMario64.png",
    id: "001",
    price:"19,99",
    details: "Mario is super in a whole new way! Xombining the finest 3-D graphics ever developed for a video game and an explisive soundtrack. Super Mario 64 becomes a new standard for video games. It's packed with bruising battles, daunting obstacles courses and underwater adventures. Retrieve the Power Stars from their hidden locations and confront your arch nemesis --Bowser, King of the Koopas"
  },
  {
    name: "Star Fox 64",
    genres: "action",
    consoll: "n64",
    img: "images/assets/starFox64.png",
    id: "002",
    price: "34,99",
    detils: "The Lylat system has been invded! Join Fox McCloud and his Star Fox team as they fight to save the galaxy from the clutches of the evil Andross. Travel to many different 3-D worlds. Battle the enemy in the ari and on the ground and listen as Fox McCloud interacts with a cast of characters. See how it feels to feel what you see! The N64 accessory instantly transmits all the bumps and blasts during the action. It's anew jolt to your game play experience"
  },
  {
    name: "Bioshock",
    genres: "rpg",
    consoll: "ps3",
    img: "images/assets/bioshock.png",
    id: "003",
    price: "5,99",
    details: "Welcome to Rapture. BioShock- a first person shooter experiennce unlike any other, played out in Rapture, an immense underwater utopia torn apart by a genetic civil war. Explore a deadly but incredible art deco world flled with formidable technology and fascinating characters. You'll have a complete aresenal at your disposal, from simple revolvers to rocket launches and flamethrowers. Challenge the constraints of nature by genetically modyfying your DNA with injected PLASMIDS and embrace super human powers"
  },
  {
    name: "Bioshock Infinite",
    genres: "platformer",
    consoll: "ps3",
    img: "images/assets/bioshockInfinite.png",
    id: "004",
    price: "3,99",
    details: "Bring us the girl, wipe away the debt. The year is 1912. Deep in debt, Booker DeWitt has only one opportunity for a clean slate: rescue Elizabeth, a mysterious girl imprisoned since childhood in the flying city of Columbia. Forced to trust one another, they must harness an expanding arsenal of weapons and abilites as they fight to survive the threats of the city and uncover its dark secrets"
  },
  {
    name: "Banjo Kazooie",
    genres: "platformer",
    consoll: "n64",
    img: "images/assets/banjoKazooie.png",
    id: "005",
    price: "49,99",
    details: "Meet the newest Dynamic Duo, Banjo-Kazooie! Trouble is brewin on Spiral Mountain. Gruntilda the witch, wildly jealous of Tooty the Honey Bear's good looks, is determined to steal them for herself! But even as she whisks the helpless youngster off to her tower, Tooty's big brother Banjo and his loud-mouther partner Kazooie are hot on the trail to rescue her... "
  },
  {
    name: "Super Mario World",
    genres: "platformer",
    consoll: "snes",
    img: "images/assets/superMarioWorld.png",
    id: "006",
    price: "39,99",
    details: "Mario's off on his biggest adventure ever, and this time he's brought a along a friend. Yoshi the diosaur teams up with Mario to battle Bowser, who has kidnapped Princess Toadstool once again. Guide Mario and Yoshi through nine peril-filled worlds to the final showdown in Bowser's catlse. use Mario's new powers and youshi's voracious monstergobbling appetite as you explore 96 levels filles with dangerous new monsters and traps. Climb mountains and cross rivers, and descend into subterranean depths. Destroy the seven Koopa castles and find keys to gain entrance to hidden levels. Discover more warps and thrilling bonus worlds than ever before!"
  },
  {
    name: "Portal",
    genres: "puzzle",
    consoll: "pc",
    img: "images/assets/portal.png",
    id: "007",
    price: "4,99",
    details: "The new single plater game from Valve blends adventure, puzzle and action gaming. Portal heas earned over 70 industry awards, with more than 30 Game of the Year Awards that celbrate its gameplay innovations and story. Start thinking with Portals!"
  },
  {
    name: "Mass Effect 2",
    genres: "rpg",
    consoll: "xbox 360",
    img: "images/assets/massEffect2.png",
    id: "008",
    price:"12,99",
    details: "Entire human colonies on many worlds are vanishing. As Commander Shepard, you must assemble the galazy's deadliest team to save mankind against impossible odds. They call it a suicide mission. Prove them wrong."
  },
  {
    name: "Red Dead Redemption",
    genres: "rpg",
    consoll: "ps3",
    img: "images/assets/reddeadredemption.png",
    id: "009",
    price: "4,99",
    details: "America, 1911. The wild west is dying. When federal agents threaten his family, former outlaw John Marston is forced to pick uyp his guns again and hunt down the gang of criminals he once called friends. Experience an epic fight for survival across the sprawling expanses of the American West and Mexico, as John Marston struggles to bury his blood-stained past, one man at a time."
  },
  {
    name: "The witcher",
    genres: "action",
    consoll: "pc",
    img: "images/assets/theWitcher.png",
    id: "010",
    price: "2,99",
    details:"Become The Withcer, Geralt, a legendary monster slayer caught in a web of intrigue woven by forces vying for control of the world. Make difficult decisions and live with the consequences in a game that will immerse you in an extraordinary tale like no other."
  },
  {
    name: "God Of War",
    genres: "action",
    consoll: "ps2",
    img: "images/assets/godOfWar.png",
    id: "011",
    price: "19,99",
    detail: "You are kratos and you will murder the God of War. The epic adventure of conquest, destiny & revenge."
  },
  {
    name: "The Last of Us",
    genres: "action",
    consoll: "ps3",
    img: "images/assets/theLastofUs.png",
    id: "012",
    price: "4,99",
    details: "Joel and Ellie, brought together by harsh circumstances, must survive a brutal journey across the US in a dangerous post-pandemic world."
  },
  {
    name: "Sonic Adventure 2",
    genres: "platformer",
    consoll: "dreamcast",
    img: "images/assets/sonicadventure2.png",
    id: "013",
    price: "48,99",
    details: "Save the world of conquer it. Mistaken for a dark villainous hedgehog and kidnapped by a military squard, Sonic must escape his captors and discover who is responsible for his troubles! With 6 playable character, all new moves, and more than 30 stages, Sonic Adventure 2 breaks new ground-- allowing players to save the world or conquer it!"
  },
  {
    name: "Doom",
    genres: "platformer",
    consoll: "pc",
    img: "images/assets/doom.png",
    id: "014",
    price: "8,99",
    details:"Doom puts you in the body armour of a space marine in the middle of an inter-dimensional war. Sent into combat at a base on the Martion moon of Phobosm you encounter a demonic horde of incaders pouring through a dimensional rift to challenge the universe. Wave after wave of hideous creatures spread through the base, attacking everything in sight. As you stand among the dead, your duty seems clear: you must eradicate the enemy and find out where they're coming from. When you find out the truth, your sense of reality may be shattered. If you succeed, you will be humanity's hero. Fail, and you will spell it's doom."
  }
];
