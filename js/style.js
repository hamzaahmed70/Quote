const quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul. - Marcus Tullius Cicero.”",
  "“You only live once, but if you do it right, once is enough. - Mae West.”",
  "“So many books, so little time.”",

];

const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

newQuoteButton.addEventListener("click", getRandomQuote);
let lastIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    quoteText.textContent = quotes[randomIndex];
}