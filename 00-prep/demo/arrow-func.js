// Using ES5 - The 201 way

function logger(input) {
  return console.log(input);
}

console.log(logger('winner'));












// Using ES6 - function expressions

let logger1 = input => console.log('logger 1', input);
// No parenths when only on parameter
// implicit return when not using a code block












let logger2 = (input) => console.log('logger 2', input);











// a return is required when using a code block
let logger3 = input => {
  return console.log('logger 3', input)
};











function adder(a, b, c) {
  console.log('adder', a + b + c);
  return a + b + c;
}

let adder1 = (a, b, c) => console.log('adder', a + b + c);










// no arguments

let stringMaker = () => console.log('I am a cool string maker');

function Books(title, author) {
  this.title = title;
  this.author = author;
}
