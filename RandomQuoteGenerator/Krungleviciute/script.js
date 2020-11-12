const quoteConatiner = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

const showLoadingSpinner = () => {
    loader.hidden = false;
    quoteConatiner.hidden = true;
}

const removeLoadingSpinner = () => {
    if(!loader.hidden){
        quoteConatiner.hidden = false;
        loader.hidden = true;
    }
}

// Get quote from API
const getQuote = async () => {
    showLoadingSpinner();

    //to prevent CORS errors:
    const proxyUrl = 'https://stark-river-98544.herokuapp.com/';
    const api = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + api);
        const data = await response.json();
        if(data.quoteAuthor === "") {
            quoteAuthor.innerText = "- Unknown";
        } else {
            quoteAuthor.innerText = `- ${data.quoteAuthor}`;
        }
        
        //Reduce font size when quote is longer
        if(data.quoteText.length > 120) {
            quote.classList.add("long-quote");
        } else {
            quote.classList.remove("long-quote");
        }
        quote.innerText = data.quoteText;
        removeLoadingSpinner();
    } catch(err){
        getQuote();
    }
} 

const tweetQuote = () => {
    const quoteText = quote.innerText;
    const author = quoteAuthor.innerText
    const facebookUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${author}`
    window.open(facebookUrl, '_blank')
}

twitterButton.addEventListener('click', tweetQuote)
newQuoteButton.addEventListener('click', getQuote)


//on Load
getQuote();