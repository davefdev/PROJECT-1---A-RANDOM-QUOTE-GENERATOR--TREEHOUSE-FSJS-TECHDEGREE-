/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//array of quote objects
const quotes = [  
  {
    quote: "If we don't believe in freedom of expression for people we despise, we don't believe in it at all.",
    source: "Noam Chomsky",
    citation: "Manufacturing Consent",
    year: 1988,
    tag: "Political Quote"
  },
  {
    quote: "If you're not prepared to be wrong, you'll never come up with anything original.",
    source: "Ken Robinson",
    year: 1949
  },
  {
    quote: "Defeat is not the worst of failures. Not to have tried is the true failure",
    source: "Robert Collier",
    year: 1987
  },
  {
    quote: "Health is our greatest wealth.",
    source: "Jeff Novick",
    year: 2003,
    tag: "Health Quote"
  },
  {
    quote: "Human greatness does not lie in wealth or power, but in character and goodness. People are just people, and all people have faults and shortcomings, but all of us are born with a basic goodness.",
    source: "Anne Frank"
  },
  {
    quote: "It is only when you meet someone of a different culture from yourself that you begin to realise what your own beliefs really are.",
    source: "George Orwell",
    citation: "The Road to Wigan Pier"
  },
];

/***EXCEEDS EXPECTATIONS ATTEMPT - Background colour changes array */

//array of hex colours for the background colour changer function below
const bgColors = [    
  "#7bc469",
  "#28ede8",
  "#10b920",
  "#eebc58",
  "#456260",
  "#260bc2",
  "#ed2939",
  "#ff6961"
]

/***EXCEEDS EXPECTATIONS ATTEMPT - Background colour changes function */
const bgColorChanger = () => {   
  //create random color from array of colors above
  const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];   
  //selects background property of the document html, and sets it to the random background color
  document.body.style.background = randomBg;  
}

/***
 * `getRandomQuote` function
***/

//arrow function expression
const getRandomQuote = array => {   
  //creates a random number between 0 and the quotes index length (6)
  const randomNum = Math.floor(Math.random() * array.length);   
  //passes the randumNum into the quotes array to make a random quote 
  const quote = array[randomNum]; 
  return quote;
} 

/***
 * `printQuote` function
***/

const printQuote = () => {
  //calls the function to change bg color above
  bgColorChanger();  

  //declares variable to calls the getRandomQuote() function with quote array passed in
  const quote = getRandomQuote(quotes); 

  //starts the HTML string
  let html = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source;  

  //if statement to test if it has a citation property
  if (quote.citation) { 
    html += '<span class="citation">' + quote.citation + '</span>';
  }

  //if statement to check if it has a year property
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  /***EXCEEDS EXPECTATIONS ATTEMPT - At least one additional prop prints to the page with its qote */
  //if statement to check if it has a tag property
  if (quote.tag) {
    html += '<span class="tag">' + quote.tag + '</span>';
  }
  //adds the final closing p tag to the string
  html += '</p>'; 
  
  // creates variable for quote box to send the string to
  let quoteBoxElement = document.querySelector('.quote-box');
  //appends the html string to the elements innerHTML
  quoteBoxElement.innerHTML = html;
}

/***EXCEEDS EXPECTATIONS ATTEMPT - Make the quote automatically refresh at regular intervals */
//setInterval method with printQuote function passed into it, set to 10 sec intervals
const quoteTimer = setInterval(printQuote, 10000); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);