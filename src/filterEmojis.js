export default function filterEmojis(searchText,maxResults) {
    var emjoiList=[
        {   name:"smile",
            symbol:"😀",
            keywords:"happy face smile"
        },
        {   name:"grin",
            symbol:"😁",
            keywords:"happy face grin"
        },
        {   name:"tears of joy",
            symbol:"😂",
            keywords:"happy face joy tears"
        },
        {
            name: "Laughing",
            symbol: "😆",
            keywords: "smiling face with open mouth and tightly-closed eyes happy smiley laugh emotion"
        },
        {   name:"kissing face with closed eyes",
            symbol:"😚",
            keywords:"kiss face closed eyes"
        },
        {   name:"ring",
            symbol:"💍",
            keywords:"ring engagement"
        },
        {   name:"purse",
            symbol:"👛",
            keywords:"purse handbag"
        },
        {   name:"clover",
            symbol:"🍀",
            keywords:"four leaf clover"
        },
        { name:"baseball",
        symbol:"🏈",
        keywords:"baseball ball sports"
        },
        {
        name: "Crab",
        symbol: "🦀",
        keywords: "crab tropical animal animal"
      },
      {
        name: "Snake",
        symbol: "🐍",
        keywords: "snake wildlife reptile animal"
      },
      {
        name: "Turtle",
        symbol: "🐢",
        keywords: "turtle wildlife reptile animal"
      },
      {
        name: "Tropical Fish",
        symbol: "🐠",
        keywords: "tropical fish wildlife animal"
      },
      {
        name: "Fish",
        symbol: "🐟",
        keywords: "fish wildlife animal"
      },
      {
        name: "Blowfish",
        symbol: "🐡",
        keywords: "blowfish wildlife animal"
      },
      {
        name: "Dolphin",
        symbol: "🐬",
        keywords: "dolphin wildlife tropical animal"
    },
    {
    name: "Skull",
    symbol: "💀",
    keywords: "skull dead halloween skull"
    },
    {
    name: "Ghost",
    symbol: "👻",
    keywords: "ghost holidays halloween monster"
    },
    {
    name: "Alien",
    symbol: "👽",
    keywords: "extraterrestrial alien space monster alien scientology scientology"
    },
    {
    name: "Point Up 2",
    symbol: "👆",
    keywords: "white up pointing backhand index body hands diversity diversity"
    },
    {
    name: "Point Down",
    symbol: "👇",
    keywords: "white down pointing backhand index body hands diversity diversity"
    },
    {
    name: "Point Left",
    symbol: "👈",
    keywords: "white left pointing backhand index body hands hi diversity diversity"
    },
    {
    name: "Mans Shoe",
    symbol: "👞",
    keywords: "mans shoe fashion shoe accessories"
    },
    {
    name: "Athletic Shoe",
    symbol: "👟",
    keywords: "athletic shoe fashion shoe accessories boys night boys night"
    },
    {
    name: "Womans Hat",
    symbol: "👒",
    keywords: "womans hat women fashion accessories"
    },
    {
    name: "Tophat",
    symbol: "🎩",
    keywords: "top hat hat fashion accessories"
    },
    {
    name: "Helmet With Cross",
    symbol: "⛑",
    keywords: "helmet with white cross object hat accessories job job"
    },
    {
    name: "Jack o Lantern",
    symbol: "🎃",
    keywords: "jack-o-lantern holidays halloween"
    },

    {
    name: "Shell",
    symbol: "🐚",
    keywords: "spiral shell"
    },
    {
    name: "Spider Web",
    symbol: "🕸",
    keywords: "spider web halloween"
    },

    {
    name: "Earth Americas",
    symbol: "🌎",
    keywords: "earth globe americas map vacation globe globe"
    },
    {
    name: "Hotdog",
    symbol: "🌭",
    keywords: "hot dog america food"
    },
    {
    name: "Pizza",
    symbol: "🍕",
    keywords: "slice of pizza italian food boys night boys night"
    },
    {
    name: "Spaghetti",
    symbol: "🍝",
    keywords: "spaghetti noodles pasta italian food"
    },
    {
    name: "Taxi",
    symbol: "🚕",
    keywords: "taxi transportation car travel"
    },
    {
    name: "Blue Car",
    symbol: "🚙",
    keywords: "recreational vehicle transportation car travel"
    },
    {
    name: "Bus",
    symbol: "🚌",
    keywords: "bus transportation bus office"
    },
    {
    name: "Trolleybus",
    symbol: "🚎",
    keywords: "trolleybus transportation bus travel"
    },
    {
    name: "Race Car",
    symbol: "🏎",
    keywords: "racing car transportation car"
    },
    {
    name: "Police Car",
    symbol: "🚓",
    keywords: "police car transportation car police police 911 911"
    },
    {
    name: "Ambulance",
    symbol: "🚑",
    keywords: "ambulance transportation 911 911"
    },
    {
    name: "Fire Engine",
    symbol: "🚒",
    keywords: "fire engine transportation truck 911 911"
    }
        ];
    return emjoiList.filter((emoji)=>{
        if(emoji.name.includes(searchText))
        return true;
        if(emoji.keywords.includes(searchText))
        return true;
        return false;
    }
    );
}
