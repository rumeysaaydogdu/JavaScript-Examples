var quotes = [];
var colours = ['blueviolet', 'cyan', '#ff5100', '#ff0000', '#e5ff00', '#09ff00', '#00ffdd', '#0026ff', '#cc00ff', '#ff00bf', '#ff002b'];

function GetQuotes(){
    return fetch('https://type.fit/api/quotes')
    .then(response => response.json())  // gelen veriyi json formatına çevirdi (https://javascript.info/fetch) (https://www.w3schools.com/js/js_api_fetch.asp) (YANLIŞ: parse.JSON(response)))
    .then(data => {
        quotes=data;  //gelen veriyi quotes dizisine aktardı

        Change();
    })
}

function Change(){
    var count = quotes.length;
    var rndNumb = Math.floor(Math.random()*count); // Math.random() returns a random number between 0 (included) and 1 (excluded)

    document.getElementById('quotes').innerText = quotes[rndNumb].text;
    document.getElementById('author').innerText = '-' + quotes[rndNumb].author;

    var rndColour = Math.floor(Math.random()*11);
    document.body.style.backgroundColor = colours[rndColour];
    
}

function ShareTweet(){
    var text = document.getElementById('quotes').innerText;

    window.location.href = 'https://twitter.com/intent/tweet?hashtags=rumeysaiscoding&text=' + encodeURIComponent('"'+text+'"');
}

GetQuotes();