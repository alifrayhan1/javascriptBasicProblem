// ? 1.Create a variable called carName, assign the value Volvo to it.

let carName = "volvo";
console.log(carName); 

// ? 2.On one single line, declare three variables with the following names and values:

let firstName = "John", lastName = "Doe", age = 35;
console.log(firstName + ' ' + lastName + ' ' +age);

// ? 3.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

// x = 10;
// y = 5;
// x = ...; what will be the value of x ? 
let x = 10;
let y = 5;
console.log(x*y);

//? 4.Use comments to describe the correct data type of the following variables:


let length = 16; // data type ? 
let lastName1 = "Johnson"; // data type ?

const x1 = {
  firstName: "John",  
  lastName: "Doe"
};    // data type ? 


console.log(typeof length);
console.log(typeof lastName1);
console.log(typeof x1);

// ? 5.Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

// call the function and see the output 
// myFunction();

// ? 6. Create an object called person with name = John, age = 50, Then,access the object to alert("John is 50").
   
let person ={
  name: 'Jone',
  age: 50,
  fullName : function() {
    return this.name + " is " + this.age;
  }
}
console.log(person.fullName());


// ? 7. The <button> element should do something when someone clicks on it. Try to fix it!

// <button>Click me.</button> 
function clicked(){
  document.getElementById('text').innerHTML = "already clicked me";
  document.getElementById('btn').innerHTML = "already clicked me";
}


// ? 8. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 
  Brand[0] = 'Ford';
  console.log(Brand);

//  ? 9 NO. 
// 1. Use the correct Math method to create a random number.
let randomNumber = Math.random();
console.log(randomNumber);

// 2. Use the correct Math method to return the largest number of 10 and 20.

let largeNumber = Math.max(10,20);
let smallNumber = Math.min(10,20);
console.log(largeNumber);
console.log(smallNumber);
// 3. Use the correct Math method to get the square root of 9.
let squareNumber = Math.sqrt(9);
console.log(squareNumber);


// ? 10 No:
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
let x2 = 10;
let y2 = 5;

// alert() // ? 

if (x2>y2) {
alert(true);
}


// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age1 = 25;
if (age1<18) {
  alert("Too young");
} else {
  alert('Old enough');
}


