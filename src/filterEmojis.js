export default function filterEmojis(searchText,maxResults) {
    var emjoiList=[
        { name:"smile",
        symbol:"😀",
        keywords:"happy face smile"
        },
        { name:"grin",
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
        }
    ];
    return emjoiList.filter((emoji)=>{
        if(emoji.name.includes(searchText))
        return true;
        if(emoji.keywords.includes(searchText))
        return true;
    }
    );
}
