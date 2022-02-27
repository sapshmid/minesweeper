// consold.log() = print
console.log("hello world");
// let defines a variable 
let firstName = 'Sapir';
let lastName = 'Shmidman';
console.log(firstName);
console.log(lastName);
// const is for a value that we don't want to change, let is for one we do.
const interestRate = 0.3;
// because we set it to be a const, this next line will create an error
// interestRate = 1;
console.log(interestRate);
// variables value typs:
let name = 'Sapir'; // String literal, for words, a regualr string
let age = 22; // Number literal, for numbers
let isAprroved = true; // Boolean literal, for true of false
let hisFirstName;
let hisLastName = undefined; // The variable is undefined, not common
let selectedColor = null; // Clear the value of a variable 
// you can change types of variables as you go based on the values you assign to them
// Undefined is a value and a type, 
// so when we assign to a variable the value 'undefined' it also sets it's type to be undefined
// the type of null is an object

// Reference types

// Objects
// Object is a type that can contain a few values
let person = {
    name: 'Sapir',
    age: 22
};
// We declair the variable as an object: nameOfObject = { properties };
console.log(person);
// Accessing and changing an ocbject's properties:
//  Op1 - Dot notation 
person.name = 'John'; // Changed the value of name
console.log(person.name); // Reading the value of a property
// Op2 - Bracket notation 
person['name'] = 'Mary';
// The bracket method is useful when we don't know the target property before runtime,
// for example, when you have another variable which selects the property - change at runtime. 
let selection = 'name';
person[selection] = 'Mary'; //This way we can access the propety with bracket notation in adynemic way

// Arrays 
// For lists 
let selectedColors = ['red', 'blue']; // Array literal, empty brackets indicate an empty array
console.log(selectedColors);
// Accessing an index in the array:
console.log(selectedColors[0]); //That will display the first element in the array
// The length of the array and the type of objects inside is dynamic
selectedColors[2] = 'green';
console.log(selectedColors);
// We can store different types of elements inside the array
// These are two ways to add elements to an array
selectedColors[2] = 1;
selectedColors.push(1);
console.log(selectedColors);
// Array is an object in JS, so to access a property of an array we use the dot notation
console.log(selectedColors.length);

// Functions
function greet() {
    console.log('Hello World');
} // No ; at the end
// Declairing the function like that: function FunctionName() { logic of the function }
greet(); // Calling the function

// Functions can heve inputs in them. The variable inside the () is a parameter
function welcome(guest) {
    console.log('Hello ' + guest);
}
welcome('John'); // When calling a function with a parameter we need to add a value for it inside the ()
// A parameter is the name of the variable that we put in the declaration of the function, 
// and an argument is the value we put in when calling the function.
welcome('Mary'); // We can call the function again with a different value 
// A function can have multiple parameters:
function hello(guest, guestLastName) {
    console.log('Hello ' + guest + ' ' + guestLastName);
}
hello('John'); // If we only put in a value for one parameter, 
//the output will be the value we put in + undefined for the other parameter
hello('John', 'Smith');

// Types of functions
// Type1 - Performing a task (like we did before)
// Type2 - Calculating a value
function square(number) {
    return number * number;
} // This function calculates the square of a number 
let number = square(2); // Calling this function, returns a value that we can use to initialize a variable
console.log(number);
console.log(square(2)); // If we only want to display the soultion we can print like this

// Runing on an array
let runArray = [1, 2, 8, 'b'];
runArray.forEach(elem => {
    elem = elem + 1;
    console.log(elem);
});