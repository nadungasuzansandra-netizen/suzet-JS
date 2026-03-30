console.log("My name is Suzan")

// Variables
//Declaring a variable use the var, let, or const keywords

// var is function-scoped and can be redeclared and updated
var name ="Suzan";
console.log(name);
name = "NADUNGA SUZAN SANDRA";
console.log(name);
// let is block-scoped and can be updated but not redeclared
let age = 25;
console.log(age);
age=18;
console.log("my age has changed because am just a girl",age);
// const is block-scoped and cannot be updated but not redeclared
const height=5.8;
console.log(height);
// height =6.0; //This would cause an error
const country = "uganda";
console.log(country);
// country ="kenya"; // This will throw an error because const cannot be reassigned

// Data Types
//JavaScript has several data types including:
// 1.String
let greeting = "Hello, How are you?"
console.log(greeting);
console.log(typeof greeting);

// 2.Number
let x =10;
let y ="12";
// console.log(x);
console.log(y);
// console.log(typeof x);
console.log(typeof y)

// 3. Boolean
// 4.Undefined
// 5. Null
// 6. Object

// 7. Symbols
// Explanation of Symbol data type
// Mathematical Operators
let a =5;
let b =3;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Disivion
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

//Conditionals in JavaScript
//if statement
//definition of if statement
let condition = true;
let condition1 = false;
let condition2 = false;
let condition3 =true

if (condition) {
    // code to be executed if condition is true
}
// if-else statement
// definition of if-else statement
if(condition) { 
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
// else-if statement
// defition of else if statement
if (condition1) {
    // code to be executed if condition1 is true 
} else if (condition2) {
    // code to be executed if condition2 is true
}else if (condition3){
    // code to be executed if both condition1 and condition2 are false
}else {
    // code to be executed if all conditions are false
}

    // Practice examples
    let mark = 50;

    if (mark > 69) {
        console.log("very good, you have passed the exam")
    }
    if (mark >= 70){
    console.log("You have passed the exam")
    } else {
    console.log("You have failed the exam")
    }
    // Comparison Operators
    // 1.Equal to (==)
// Example of equal to operator
if (name ="john") // This will assign "John" to name and always evaluate
if (name =="john") // This will compare name to "John" and evaluate to true 

// 2. Not equal to |("! =")
if (name != "john")

    // 3. Strict equal to (===)
x = 5;
y = "5";

if (x == y) {
console.log("x is equal to y");
}
if (x==y){
    console.log("x is strictly equal to y");
}

// 4. Strict not equal to (!==)
// 5. Greater than (>)
// 6. Less than (<)
// 7. Greater than or equal to (>=)
// 8. Lesser than or equal to (<=)

// Arrays
// empty array
//An array is a data structure that can hold multiple values at once. its defined using

// ["Vision", 25, "Uganda"]
["Apples", "Mangoes", "Oranges", "Pineapples"]

let fruits = ["Apples", "Mangoes", "Oranges", "Pineapples"]
console.log(fruits);
console.log(fruits[2])
let mixedArray = ["Vision",25, "Uganda", true, null, undefined, {name: "John"}]
console.log(mixedArray);
console.log(mixedArray[6])

//Objects
{} // an empty object
let person = {
    name: "John",
    age: 30,
    district:"wakiso",
    Country: "Uganda",
   isStudent:true,
   hobbies:["traveling", "swimming","reading"],
   city:"kampala",
   address:{
    street:"123 main St"
   }
}
console.log(person);
console.log(person["name]"]); // Accessing the name property
console.log(person.hobbies)
console.log(person.hobbies[2]) // Accessing the third hobby

//Assignment 1. Grading math scores, (An Array called scores containing objects with each object having a name and score properties)
//loops help us to look through an array and return a specific item

let scores = [
    {name:"Suzan", score: 93},
    {name:"Henry", score: 39 },
    {name:"Annet", score: 63},
    {name:"Sarah", score: 75},
    {name:"Justine", score: 95},
    {name:"Martin", score: 57},
    {name:"Samuel", score: 80},
    {name:"lizzy", score: 40},
]

 scores.forEach(Student => {
    let great;

    if (Student.score >=90){
        grade = "A"
    } else if(Student.score>=80){
        grade = "B"
    } else if(Student.score >=70){
        grade = "C"
    } else if(Student.score >=60){
        grade = "D"
    } else if (Student.score >=50){
        grade = "E"
    } else {
        grade = "F"
    }
    console.log(Student.name + ":" + Student.scores +"And my grade is," + grade)
 }) 
 // functions
 // Functions are reusable blocks of code that perform a specific task. they can take parameters and return values
  // function declaration // we use the function keyboard to declare a function

  function functionName(){
    // code to be executed
  }
  function funcName (parameter){
    // code to be executed 
    return parameter; // returning the parameter
  }
  function funWithParameters(parameter1, parameter2, parameter3){
  // code to be excuted
  return parameter1 + parameter2 + parameter3; // returning the sum ofvthe parameters
  }