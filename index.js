const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let lowerCaseTutorials = tutorials.map(phrase => phrase.toLowerCase());


function titleCased(tutorials) {
  // this returns an array of arrays of each phrase split in an a array.
let splitting = lowerCaseTutorials.map(phrase => phrase.split(" ")); 
/* array maps over splitting, takes each array and maps over it, then grabs the first character of each word
   and capitalizes it, while slicing off each word and adding it to the capitalized letter */
let array = splitting.map(word => word.map(char => char[0].toUpperCase() + char.slice(1)));
// final array then iterates over the arrays and joins them.
let finalArray = array.map(array => array.join(" "));
return finalArray
}

titleCased(tutorials);

/* All of this returns: 
["What Does The This Keyword Mean?", 
"What Is The Contutorialuctor Oo Pattern?", 
"Implementing Blockchain Web Api", 
"The Test Driven Development Workflow", 
"What Is Nan And How Can We Check For It", 
"What Is The Difference Between Stoppropagation And Preventdefault?", 
"Immutable State And Pure Functions", 
"What Is The Difference Between == And ===?", 
"What Is The Difference Between Event Capturing And Bubbling?", 
"What Is Jsonp?"] */