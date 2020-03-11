const tutorials = [
  'What Does The This Keyword Mean?',
  'What Is The Contutorialuctor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
];

const titleCased = () => {
  return tutorials
}

let newTitle = tutorials.map(string => string)


// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Contutorialuctor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = (str) => {
//   let arr = str.join(" ").split(" ")
//   let newArr = [];
//   for (let x = 0; x < arr.length; x++) {
//     newArr.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1))
//   }
//   return newArr.join(" ");
// }
