//   2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(num) {
    const checkEven = ((num%2)===0);
    return checkEven;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
