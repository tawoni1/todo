const quotest = [
    {
        quote:"인생한방!",
        author:"somebody",
    },    
    {
        quote:"해도 안될 수가 있다!",
        author:"somebody",
    },
    {
        quote:"늦었다고 생각되면 이미 늦은거다",
        author:"somebody",
    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotest[Math.floor(Math.random() * quotest.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;