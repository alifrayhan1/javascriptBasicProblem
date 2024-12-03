// 8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
    
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040