//variables
var num = 10;
console.log("num=", num);
console.log("type of num=", typeof num);

num = 23; //reassignment
console.log("num=", num);
console.log("type of num=", typeof num);

var num = "helloworld"; //redeclaration
console.log("num=", num);
console.log("type of num=", typeof num); //to find datatype of var

let n1 = 20;
console.log("n1=", n1);
console.log("type of n1=", typeof n1);

n1 = 45; //reassignment
console.log("n1=", n1);
console.log("type of n1=", typeof n1);

// redeclaration is not allowed in (let).
// let n1 = "helloworld"; //redeclaration
// console.log("n1=", n1);
// console.log("type of n1=", typeof n1);

//Datatypes.

//number
let num1 = 10;
console.log("num1", num1);
console.log("type of num1=", typeof n1);

num1 = 25.00000000000057; //max 15 dec precision.
console.log("num1", num1);
console.log("type of num1=", typeof n1);

//String
let name1 = "john carter";
console.log("name=", name1);
console.log("type of name1=", typeof name1);

//boolean
let bool = true; //preferred method
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

bool = false;
console.log("bool=", bool);
console.log("type of bool=", typeof bool);

let bool1 = 1;
console.log("bool1=", bool1);
console.log("type of bool1=", typeof bool1);

//null
let result = null; // default datatype of JS is Object
console.log("result=", result);
console.log("type of result=", typeof result);

result = 10 + 20;
console.log("result=", result);
console.log("type of result=", typeof result);

//undefined
let temp; //nothing is assigned to a variable not even null
console.log("temp=", temp);
console.log("type of temp=", typeof temp);
