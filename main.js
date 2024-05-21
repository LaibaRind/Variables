"use strict";
// todo string initialization:
//  Declare variables and its type and value in one statement:
let studentName = "asra";
console.log(studentName);
var myName = "hadia";
console.log(myName);
let Name = "Laiba";
console.log(Name);
let favouriteFood = "Biryani";
console.log(favouriteFood);
// ? Declare a variable message of type string and assign it the value "Hello Typescript!."
let message = "Hello Typescript!.";
console.log(message);
// Todo variable declaration without type:
let name1 = "hani";
console.log(name1);
//  Todo variable declaration without type and value:
let mydad;
console.log(mydad);
//  Todo variable declaration with and without types:
let userName = "sarha";
let userlocation = "islamabad";
let marks = 550;
let percentage = 90;
console.log("name:", userName);
console.log("location:", userlocation);
console.log("marks:", marks);
console.log("percentage:", percentage);
// Todo type assertion:
let num1 = "12";
let num2 = num1;
console.log(typeof (num2));
// Todo type inference:
let q1 = 2 > 6;
console.log(q1);
// todo Concatenation:
let num = 2;
console.log("value of num:", " ", "my lucky number is", " ", +num);
num = 12;
console.log(num);
// Variable decleration using var,let and const.
var fname = "laiba rind";
let username1 = " baloch";
const PI = 32100;
console.log(fname + username1, " ", "got", +PI, " ", "marks in exams.");
// ? Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatienate the two variable and store the result in a variable called fullName.
let firstName = "Laiba";
let lastName = "Rind";
let fullName = firstName + lastName;
console.log(fullName);
// Todo String Template:
// ? Declare variable product and price of type string and number, respectively create string using template literals to display the product and its price in the format product{product} is price at {price} dollars.
let Product = "laptop";
let Price = 300;
let info = `The ${Product} is priced at ${Price} dollars`;
console.log(info);
