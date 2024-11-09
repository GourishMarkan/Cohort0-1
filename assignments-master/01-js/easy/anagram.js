/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // check if lenght of both str is equal

  if (str1.length == str2.length) {
    return false;
  }
  const temp1 = str1.toUpperCase();
  const temp2 = str2.toUpperCase();
  const sorted1 = temp1.split("").sort().join("");
  const sorted2 = temp2.split("").sort().join("");
  // Compare the sorted strings
  return sorted1 === sorted2;
  // convert both string to lowercase and sort them
  // str1 = str1.toLowerCase();
  // str2 = str2.toLowerCase();

  // str1 = str1.sort();
  // str2 = str2.sort();
  // // // comparing two string
  // for (let i = 0; i < str1.length; i++) {
  //   for (let j = 0; j < str1.length; j++) {
  //     if (str1[i] != str2[j]) {
  //       return false;
  //     }
  //   }
  // }
}

module.exports = isAnagram;
