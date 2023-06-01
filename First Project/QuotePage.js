const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "The way to get started is to quit talking and begin doing", 
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking", 
" If life were predictable it would cease to be life, and be without flavor.", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."];

const author = ["Nelson Mandela", "Walt Disney", "Steve jobs", "Elenor Roosevelt", "Oprah Winfrey"]

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");
    quoteElement.innerText = quotes[randomIndex];
    authorElement.innerText = '-' + author[randomIndex];
    console.log(randomIndex);
}
