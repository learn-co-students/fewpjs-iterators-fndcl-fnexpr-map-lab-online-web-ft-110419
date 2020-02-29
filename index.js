const a = [
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

function titleCased() {
  // splitting returns an array of arrays of each phrase split in an a array.
let splitting = a.map(phrase => phrase.split(" ")); 
/* array maps over splitting, takes each array and maps over it, then grabs the first character of each word
   and capitalizes it, while slicing off each word and adding it to the capitalized letter */
let array = splitting.map(array => array.map(word => word[0].toUpperCase() + word.slice(1)));
// final array then iterates over the arrays and joins them.
let finalArray = array.map(array => array.join(" "));
return finalArray
}

titleCased();
