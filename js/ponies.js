/*
	"": {
		"alt": "",
		"image": "",
		"source": ""
	},
*/

var Ponies = {
	"Twilight Sparkle": {
		"alt": "Do princesses still get to read books?",
		"image": "img/twilightsparkle.png?1",
		"source": "http://fav.me/d5sqhqv",
		"category": "Mane Six"
	},
	"Fluttershy": {
		"alt": "*eep*",
		"image": "img/fluttershy.png?1",
		"source": "http://fav.me/d5ski2g",
		"category": "Mane Six"
	},
	"Rainbow Dash": {
		"alt": "Hey, you look like you know how to fly. Think you can beat me in a race?",
		"image": "img/rainbowdash.png?1",
		"source": "http://fav.me/d5vuubx",
		"category": "Mane Six"
	},
	"Pinkie Pie": {
		"alt": "I don't think anyone's noticed that I can see them right now! Silly humans!",
		"image": "img/pinkie.png?1",
		"source": "http://fav.me/d5ld7s7",
		"category": "Mane Six"
	},
	"Rarity": {
		"alt": "Oh my celestia! What ever happened to your hair, deary?!",
		"image": "img/rarity.png?1",
		"source": "http://fav.me/d5lcja2",
		"category": "Mane Six"
	},
	"Applejack": {
		"alt": "apples apples apples apples  apples apples apples      -pears-      apples apples apples apples apples",
		"image": "img/applejack.png?1",
		"source": "http://fav.me/d5u2rs9",
		"category": "Mane Six"
	},

	"Princess Celestia": {
		"alt": "*wink*",
		"image": "img/celestia.png?1",
		"source": "http://fav.me/d4kzo57",
		"category": "Royalty"
	},
	"Princess Luna": {
		"alt": "DO WE NOT WOW YOU WITH OUR VOICE?",
		"image": "img/luna.png?1",
		"source": "http://fav.me/d4xefvq",
		"category": "Royalty"
	},
	"Princess Cadance": {
		"alt": "what do i even put here",
		"image": "img/cadance.png?1",
		"source": "http://fav.me/d5wkcz8",
		"category": "Royalty"
	},
	"Shining Armor": {
		"alt": "Twily!",
		"image": "img/shiningarmor.png?1",
		"source": "http://fav.me/d4y9c5m",
		"category": "Royalty"
	},

	"Nightmare Moon": {
		"alt": "The night. Will last. TWELVE HOURS.",
		"image": "img/nmm.png?1",
		"source": "http://fav.me/d5uc5k9",
		"category": "Major Villains"
	},
	"Discord": {
		"alt": "Why yes, I do enjoy seeing your hair on fire! It's actually quite amusing.",
		"image": "img/discord.png?1",
		"source": "http://fav.me/d5s54m5",
		"category": "Major Villains"
	},
	"Queen Chrysalis": {
		"alt": "Do you think a lowely human like you can feed my hive alone?",
		"image": "img/chrysalis.png?1",
		"source": "http://fav.me/d4xbbc3",
		"category": "Major Villains"
	},
	"King Sombra": {
		"alt": "CRYSTALLLSSSSSSS",
		"image": "img/sombra.png?1",
		"source": "http://fav.me/d5l0rzc",
		"category": "Major Villains"
	},
}

var categories = [];
for(var i in Ponies) {
	var category = Ponies[i].category;
	if(categories[category] === undefined) {
		categories[category] = [];
	}

	categories[category].push(i);
}