const quoteList = [
    {
        quote: "The pinnacle of humanity",
        author: "-Not a paid actor"
    },
    {
        quote: "He discovered gravity, he just couldn't handle anymore fame so he gave me credit",
        author: "-Issac Newton"
    },
    {
        quote: "He only drinks shards of glass, he scares me",
        author: "-Buff gym dude #3"
    },
    {
        quote: "So powerful he looks at a piece of raw silicon and it becomes a i9 CPU",
        author: "-Gill Bates"
    }
];

let quoteParent, quoteTag, quoteText;
let baseQuoteStyle = {
    "position": "absolute",
    "font-size": "22px"
}

function addCss(element, style) {
    for (const property in style) {
        element.style[property] = style[property];
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function spawnQuotes() {
    
    let randomQuoteObj = quoteList[Math.floor(Math.random() * quoteList.length)];
    
    quoteTag = document.createElement("p");
    quoteTag.id = "current-quote";

    quoteTag.innerText += randomQuoteObj.quote + "\n" + randomQuoteObj.author;
    //quoteTag.appendChild("<br>");
    //quoteTag.textContent += randomQuoteObj.author;

    /*quoteText = document.createTextNode(randomQuoteObj.quote);
    quoteText.appendChild(quoteText);

    quoteTag.appendChild("<br>");
    quoteText = document.createTextNode(randomQuoteObj.author);
    quoteTag.appendChild(quoteText);*/

    currentQuoteStyle = baseQuoteStyle;
    currentQuoteStyle.top = getRandomNumber(20, 80) + '%';

    // Spawn quote on the left
    if (Math.random() > 0.5) {
        quoteParent = document.getElementById("left-quotes-parent");
        currentQuoteStyle.left = getRandomNumber(1, 20) + '%';
    }
    // Spawn quote on the right
    else {
        quoteParent = document.getElementById("right-quotes-parent");
        currentQuoteStyle.left = getRandomNumber(70, 85) + '%';
    }

    addCss(quoteTag, currentQuoteStyle);

    quoteParent.appendChild(quoteTag);

    // Wait a second or two and remove the quote, then call spawnQuotes again
    setTimeout(() => {
        document.getElementById("current-quote").remove();
        spawnQuotes();
    }, (Math.random() * (7000 - 5000) + 5000))
}

