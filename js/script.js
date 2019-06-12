


/*I will be creating a variable (var) and adding quotes to an array, the array is a data structure used to organize a set of values so they can be found later in the 
code. An array has to be presented in [] for it to be valid. Within the brackets you have to define the objects with {}. Each object in the array has to be seperated with
a comma */

var quotes = [
  { 
    quote: "Every day I was in love (even though I didn't say so)",
    source: "Moez Surani",
    year : "2019",
    tags: "Art"
  } , 
  { 
   quote: "I think it's very healthy to spend time alone. You need to know how to be alone and not be defined by another person",
   source:"Olivia Wilde",                                                                               /*added quote: for the entry of the quote*/
   year: "2011"                                                                                         /*added source: for the name of the person that said the quote*/
  },                                                                                                    /*added year: for the year of the quote*/
  {                                                                                                     /*added citation: for the name of the publication source*/
                                                                                                        /*added tags: for the extra credit extra objective*/
   quote: "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom",
   source: "Theodore Isaac Rubin",
   tags: "philosophy"
  },
  {
   quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
   source: "Johann Wolfgang",
   citation: "Faust: A Tragedy, Parts Once and Two"
  }, 
  {
   quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
   source:"Steve Jobs"
  }
]




  /* Here I have created a function to get a random quote selected, I used a variable (quoteIndex) to group all the 'quote' objects in the array above. 
  Then added (Math.floor) to define the parameter of the array and added (Math.random) to return an random number from the defined parameter and the (quote.length) defines 
  the length of the quote. The random Quote var was simplified to request the quotes from the quote index  */


function getRandomQuote() {

  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  var randomQuote = quotes[quoteIndex];

  return randomQuote;
}




/* Then I added the fuction printQuote to print out the variable "message" and print out the other objects in the array and added the randomcolor at the end to print out
the random color */
function printQuote() {

  var message = '';    
  var result = getRandomQuote();
  message = '<p class="quote">' + result.quote + "</p>";
  message += '<p class="source">' + result.source;
  if (result.citation)
     message += '<span class="citation">' + result.citation + "</span>";
  if (result.year)
     message += '<span class="year">' + result.year + "</span>";
  if (result.tags)
     message += '<span class="tags">' + result.tags + "</span>" + "</p>";
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message; 
  randomcolor();
}

/* Now I am creating a function to call a random color everytime the quote changes and added a setInterval the end to change the quote automatically after 25 seconds */
function randomcolor() {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
setInterval(printQuote, 25000);


/* This was added by y'all */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
