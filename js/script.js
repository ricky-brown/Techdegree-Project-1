/***************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
***************************************/

// Creating the array of quote objects and name it `quotes`.
const quotes = [
  // Adding some quote objects to the `quotes` array.
  {
    quote:"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.",
    source:"Dr. Suess",
    citation:"A Chicken Soup",
    year:1989,
    tags:["Love","Sociology","Human Relationships"]
  },
  {
    quote:"Get busy living or get busy dying.",
    source:"Stephen King",
    citation:"The Good Book",
    year: 2010,
    tags:["Life","Living","Inspiration"]
  },
  {
    quote:"El problema no es que mientas, el problema es que te creo.",
    source:"Ricardo Arjona",
    citation:"El Problema",
    year: 2006,
    tags:["Music","Love","Latin America"]
  },
  {
    quote:"Yo veo un México con hambre y con sed de justicia.",
    source:"Luis Donaldo Colosio",
    citation:"The March Third Mexico Conference",
    year: 1994,
    tags:["Politics","Goverment","Democracy"]
  },
  {
    quote:"We began winning since we were child.",
    source:"Zinedine Zidane",
    citation:"FIFA World Cup France\'98",
    year: 1998,
    tags:["Soccer","Sports","World Cup"]
  }
]

// Using console.log() to log the array of quotes to the console.
console.log(quotes)

// Creating the 'getRandomQuote' function
let getRandomQuote = () => Math.floor(Math.random()*quotes.length)


// Creating the 'printQuote' function
const printQuote = () => {
  
  //  Calling the `getRandomQuote` function and assigning it to a variable.
  let randomQuote = getRandomQuote()
  
  // Selecting the Random Quote
  let quoteSelected = quotes[randomQuote] 
  
  //  Using the HTML template
  let htmlString = 
  `
  <p class="quote">${quoteSelected["quote"]}</p>
  <p class="source">
  ${quoteSelected["source"]}
  <span class="citation">${quoteSelected["citation"]}</span>
  <span class="year">${quoteSelected["year"]}</span>
  <span class="tags"> -${quoteSelected["tags"].join("- ")}-</span>
  </p>
  `
  
  //  Setting the `innerHTML` of the `quote-box` div to the HTML string. 
  document.getElementById("quote-box").innerHTML=htmlString
  
  // Creating a random RGB number
  let color = () => Math.floor(Math.random()*256)
  let red = color(), green = color(), blue = color()
  let rgbColor = `rgb(${red},${green},${blue})`

  // Setting a random background color
  document.body.style.backgroundColor = rgbColor
}

// Setting 20 seconds to print a new quote to the page. 
setInterval(printQuote,20000)

// Setting the loadQuote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false)