// todo string initialization:

//  Declare variables and its type and value in one statement:

let studentName:string="asra";
console.log(studentName);

var myName:string="hadia";
console.log(myName);

let Name : string = "Laiba";
console.log(Name);

let favouriteFood : string = "Biryani";
console.log(favouriteFood);

// ? Declare a variable message of type string and assign it the value "Hello Typescript!."

let message: string = "Hello Typescript!.";

console.log(message);

// Todo variable declaration without type:

let name1 ="hani";
console.log(name1);

//  Todo variable declaration without type and value:

let mydad  
console.log(mydad);

//  Todo variable declaration with and without types:

let userName = "sarha";
let userlocation: string = "islamabad";
let marks = 550;
let percentage: number = 90;

console.log("name:",userName);
console.log("location:",userlocation);
console.log("marks:",marks);
console.log("percentage:",percentage);

// Todo type assertion:

let num1= "12";
let num2: number = <number> <any> num1;
console.log(typeof(num2));

// Todo type inference:

let q1= 2>6;
console.log(q1);

// todo Concatenation:

let num =2;
console.log("value of num:"," ","my lucky number is"," ",+num);

num= 12;
console.log(num);

// Variable decleration using var,let and const.

var fname = "laiba rind";
let username1 =" baloch";
const PI :number = 32100;

console.log(fname  +  username1 ," ","got" , + PI ," ","marks in exams." );

// ? Create two variables firstName and lastName of type string and assign them your first name and last name, respectively. Concatienate the two variable and store the result in a variable called fullName.

let firstName: string = "Laiba";
let lastName: string = "Rind";
let fullName: string = firstName + lastName;
console.log(fullName);

// Todo String Template:

// ? Declare variable product and price of type string and number, respectively create string using template literals to display the product and its price in the format product{product} is price at {price} dollars.

let Product : string = "laptop";
let Price : number = 300;
let info :string = `The ${Product} is priced at ${Price} dollars`;
console.log(info);