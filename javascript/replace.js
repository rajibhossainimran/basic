// The replace() method replaces a specified value with another value in a string:
const text = 'Where are you from?';
// const result = text.replace('from', 'going');
const result = text.replace(/From/i, 'going');
// console.log(result);

// Do a global search for "is" in a string 
const matchText = 'Do a glooobal search for "is" in a string';
// different different 
// const findMatch = matchText.match(/o/g);
// sentence 
const findMatch = matchText.match(/o+/g);
console.log(findMatch);