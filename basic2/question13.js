// 13. Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    return arr[arr.length-1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  