//string 
const firstName = 'Sara';

//number 
const age = 30;
const temp = 98.8;

//boolean
const hasKids = true;

//null
const aptNumber = null;

//underfined 
//let score ;
const score = undefined;

//symbol
const id = Symbol('id');

//bigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);