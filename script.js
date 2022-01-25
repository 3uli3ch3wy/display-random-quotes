/*CSIS 3380-002 - Project 1: Display Random Phrases
By: EC
*/

/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

//A variable or array of objects named 'quotes' is created to store multiple properties and values(quote, source, citation, year)
const quotes = [
    {
        quote: "True self-confidence is “the courage to be open—to welcome change and new ideas regardless of their source.” Real self-confidence is not reflected in a title, an expensive suit, a fancy car, or a series of acquisitions. It is reflected in your mindset: your readiness to grow.",
        source: "Carol Dweck",
        citation: "Mindset: The New Psychology of Success",
        year: "2006"
    },
    {
        quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
        source: "Mother Teresa",
        citation: "",
        year: "",
    },
    {
        quote: "I have no special talent. I am only passionately curious.",
        source: "Albert Einstein",
        citation: "",
        year: "",
    },
    {
        quote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
        source: "Marcus Aurelius",
        citation: "",
        year: "",
    },
    {
        quote: "The willingness to show up changes us, It makes us a little braver each time.",
        source: "Brené Brown",
        citation: "Daring Greatly",
        year: "2012",
    },
    {
        quote: "For things to change, YOU have to change. For things to get better, YOU have to get better. For things to improve, YOU have to improve. When YOU grow, EVERYTHING in your life grows with you.",
        source: "Jim Rohn",
        citation: "AZ Quotes",
        year: "",
    }];

//to log out the quotes variable
console.log(quotes)

/***
 * `getRandomQuote` function
***/

//a function named 'getRandomQuote' is created to generate and output a random quote from the quotes array
function getRandomQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
};

/***
 * `printQuote` function
***/

//a 'printQuote' function is created to obtain a random quote object from the array and to print the updated quote on the web browser
function printQuote() {
    //a variable is created to store the getRandomQuote() function
    let storeQuote = getRandomQuote();

    //variable is created to hold quote and source
    let PtoHTML1 = `<p class="quote">` + storeQuote.quote + `<p class="source">` + storeQuote.source;

    //if statement is created to determine if citation and/or year is included. If they are not, they will not be printed on the page
    if (storeQuote.citation) {
        PtoHTML1 += `<span class="citation">` + storeQuote.citation + `</span>`;
    }

    if (storeQuote.year) {
        PtoHTML1 += `<span class="year">` + storeQuote.year + `</span>`;
    }

    PtoHTML1 += `</p>`;

    //this inserts the string into the HTML and prints it on the page
    document.getElementById('quote-box').innerHTML = PtoHTML1;
};

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/

document.getElementById('load-quote').addEventListener("click", printQuote);

