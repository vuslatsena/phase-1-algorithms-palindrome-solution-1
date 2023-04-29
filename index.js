function isPalindrome(word) {
  // Remove any non-alphanumeric characters and convert to lowercase
  let cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  let reversed = reverseString(cleaned);

  // Compare the cleaned string to the reversed string
  return cleaned === reversed;
}

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
console.log(isPalindrome("racecar")); // true

console.log("Expecting: false");
console.log(isPalindrome("robot")); // false

console.log("Expecting: true");
console.log(isPalindrome("A man a plan a canal Panama")); // true

console.log("Expecting: true");
console.log(isPalindrome("12321")); // true

console.log("Expecting: true");
console.log(isPalindrome("deified")); // true

console.log("Expecting: false");
console.log(isPalindrome("not a palindrome")); // false

// Custom test case
console.log("Expecting: true");
console.log(isPalindrome("tattarrattat"));
}

module.exports = isPalindrome;
