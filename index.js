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

const titleCased = (course) => {
  // split each thing into its own line
  return tutorials.map( line => {
    let titles = line.split(' ');
    let capTitles = titles.map(title => title.charAt(0).toUpperCase() + title.slice(1))
    let resp = capTitles.join(' ')
    // iterate over each title
    return resp;
  })
}

// function titleCase(str) {
//   // str = str.split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }

// const titleCased = (input) => {
//   return tutorials.map( line => {
//     let tokens = line.split(' ')
//     let capitalizedTokens =
//       tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
//     let response = capitalizedTokens.join(' ')
//     return response
//   })
// }



// const titleCased = tutorials.map(tutorial => titleCased(tutorial))