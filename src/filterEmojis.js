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
        { name:"tears of joy",
        symbol:"😂",
        keywords:"happy face joy tears"
        },
        { name:"kissing face with closed eyes",
        symbol:"😚",
        keywords:"kiss face closed eyes"
        },
        { name:"ring",
        symbol:"💍",
        keywords:"ring engagement"
        },
        { name:"purse",
        symbol:"👛",
        keywords:"purse handbag"
        },
        { name:"clover",
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
        keywords: "snake wildlife reptile reptile animal animal creationism creationism"
      },
      {
        name: "Turtle",
        symbol: "🐢",
        keywords: "turtle wildlife reptile reptile animal animal"
      },
      {
        name: "Tropical Fish",
        symbol: "🐠",
        keywords: "tropical fish wildlife animal animal"
      },
      {
        name: "Fish",
        symbol: "🐟",
        keywords: "fish wildlife animal animal"
      },
      {
        name: "Blowfish",
        symbol: "🐡",
        keywords: "blowfish wildlife animal animal"
      },
      {
        name: "Dolphin",
        symbol: "🐬",
        keywords: "dolphin wildlife tropical animal animal"
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
