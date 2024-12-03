//   5.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let countVowel = 0;
  
    for (let character of str) {
      if (vowels.includes(character)) {
        countVowel++;
      }
    }
  
    return countVowel;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  