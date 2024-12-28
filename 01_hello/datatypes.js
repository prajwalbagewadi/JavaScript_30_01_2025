// single line comment

/**
 * this is
 * a
 * multi line
 * comment
 */

// commented block of code:
// console.log("hello world");
// process.stdout.write("hello World");
// process.stdout.write("hello World");
// console.table({ name: "admin" });
// console.table({ fruits: "pineapple" });
// console.warn({ name: "admin" });

/**
 * data types in JS:
 * String (collection of characters)
 * Number (both int and float)
 * Bigint (used to store 2^53-1 length integers)
 * Boolean (true or false)
 * undefined (data which cannot be defined)
 * null (empty)
 * object (collection or similar to array)
 * symbol (unique value or unique data)
 */

//variables

//number
var marks = 15;
console.log("marks =", marks);

// old method : allocates memory  to data in ram
//var:
//Function-scoped. Variables declared with var are accessible throughout the entire function they are declared in, regardless of block scope (code within curly braces).

let marks1 = 25;
console.log("marks1 =", marks1);
//new method to create variables
//let:
//Block-scoped. Variables declared with let are only accessible within the block they are defined in. This includes if statements, loops, and other code blocks.

let temperature = 28.0;
console.log("temperature = ", temperature);

//string
let name = "admin";
console.log("name : ", name);

//Boolean
let islogin = true;
console.log("islogin = ", islogin);

//Bigint
let biggernum = 4.5035996e15;
console.log("biggernum = ", biggernum);

//object
let fruits = ["apples", "cherry", "banana", "pineapple", "mango"];
console.table(fruits);

let emp = {
  name: "amar",
  company: "apple",
  sal: 1200000,
};

let emp1 = {
  name: "amar",
  company: "apple",
  sal: 1200000,
};

let emp2 = {
  name: "amit",
  company: "wipro",
  sal: 200000,
};
console.table(emp);
console.table(emp1);
console.table(emp2);

//constant variables
const username = "amar";
username = "admin";
