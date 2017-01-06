/*
The Rick and Morty quote randomizer
Noah Matsell
December 30, 2016
Extra credit:
1. Tags property in quotes
2. Background color change
3. Ensure all quotes display before randomized will console log
4. 30 second interval for quote print
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//All quotes
var quotes = [
	{
		quote: "Ohh yeaaaa, you gotta get schwifty.",
		source: "Rick",
		citation: "Season 2",
		year: "2015",
		tags: "humor, music"
	},
	{
		quote: "Yo! What up my glip glops!",
		source: "Rick",
		citation: "Season 1",
		year: "2014",
		tags: "humor, party"
	},
	{
		quote: "I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come.",
		source: "Rick",
		citation: "Season 2",
		year: "2015",
		tags: "humor, burn"
	},
	{
		quote: "I don't get it and I don't need to.",
		source: "Jerry",
		citation: "Season 2",
		year: "2014",
		tags: "humor, blissful ignorance"
	},
	{
		quote: "If I've learned one thing, it's that before you get anywhere in life, you gotta stop listening to yourself",
		source: "Jerry",
		citation: "Season 1",
		year: "2014",
		tags: "humor, terrible advice"
	},

	{
		quote: "Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?",
		source: "Morty",
		citation: "Season 1",
		year: "2014",
		tags: "humor, existentialism"
	},
	{
		quote: "Aw, c'mon Rick. That doesn't seem so bad.",
		source: "Morty",
		citation: "Season 1",
		year: "2014",
		tags: "humor"
	},
	{
		quote: "Yeah, sure, I mean, if you spend all day shuffling words around, you can make anything sound bad, Morty...",
		source: "Rick",
		citation: "Season 2",
		year: "2015",
		tags: "humor, Roy"
	},
	{
		quote: "I'll be with Reuben in my workshop while you guys are having another day in Phil Collin's proverbial paradise.",
		source: "Rick",
		citation: "Season 1",
		year: "2014",
		tags: "humor, Reuben"
	},
	{
		quote: "Being nice is just something stupid people do to hedge their bets.",
		source: "Rick",
		citation: "Season 1",
		year: "2014",
		tags: "humor, society"
	},
];

//Array of background colors
var backgroundColors = ["#16A085", "#2357A5", "#FAAC22", "#FA7722", "#5AC3AE", "#658EC6", "#FFCC76"];

//Counter 
var quoteCounter = 0;
//This randomly returns a quote from quotes array
function getRandomQuote(quotes){
	var randomIndex;
	//first display all quotes, then randomize
	if (quoteCounter < quotes.length){
		randomIndex = quoteCounter;
		quoteCounter += 1;
		console.log("Quote #"+quoteCounter+": "+quotes[randomIndex].quote);
	} else {
		randomIndex = Math.floor( Math.random() * quotes.length );
	}
	

	return quotes[randomIndex];
}

//Returns random color
function getRandomColor(backgroundColors){
	var randomIndex = Math.floor( Math.random() * backgroundColors.length );
	return backgroundColors[randomIndex];
}
//This prints random quote
function printQuote(){
	var quote = getRandomQuote(quotes);
	var message = "<p class='quote'>" + quote.quote + "</p>";
		message += "<p class='source'>" + quote.source + "<span class='citation'>";
		message += quote.citation + "</span><span class='year'>";
		message += quote.year + "</span></p>";
		message += "<p class='tags'>Tags: "+ quote.tags +"</p>";
	document.getElementById('quote-box').innerHTML = message;
	changeColor();
}

function changeColor(){
	var newColor = getRandomColor(backgroundColors);
	document.body.style.backgroundColor = newColor;
}

setInterval(printQuote, 30000);
