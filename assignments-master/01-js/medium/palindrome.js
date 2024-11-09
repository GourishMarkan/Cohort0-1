/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str
    .replace(/[\ . , - \ / ? # ! $ % \ ^ & \ * ; : {} =  - _ `~ ( ) ]/g, "")
    .toLowerCase();
  let str2 = str1.replace(/\s/g, "");

  let rev = "";

  for (let i = str2.length - 1; i >= 0; i--) {
    rev += str2[i];
  }
  if (rev == str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
