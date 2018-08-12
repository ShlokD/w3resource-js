const Utils = require('../utils');
/**
 * Reverse a number
 *
 * @param {String|Number} number the number to reverse
 * @returns {Number} The reversed number if number is valid, null if the number is not valid
 * @public
 */
const reverseNumber = number => Utils.numberCheck(number) ? Number(`${number}`.split('').reverse().join('')) : null;

/**
 * Check if a string is a palindrome
 *
 * @param {String} str the string to be checked
 * @returns {Boolean} whether the string is a palindrome or not
 * @public
 */
const isPalindrome = str => typeof str === 'string' ? str.slice().split('').reverse().join('') === str : false;

/**
 * Find longest word in a sentence
 *
 * @param {String} str the string to be checked
 * @returns {String} The longest word in the sentence, empty string if input string is empty
 * @public
 */
const longestWord = sentence => {
  return sentence.split(' ').map(word => word.replace(/\W/g, '')).reduce((longestWord, currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    return longestWord;
  }, '');
};

const longestPalindrome = str => {
  if (isPalindrome(str)) { // if string itself is palindrome, it is the longest palindromic susbtring
    return str;
  }
  let longestYet = '';

  for (let i = 0; i < str.length; ++i) {
    for (let j = str.length - 1; j > 0; --j) {
      const substr = str.substr(i, j);
      if (isPalindrome(substr) && substr.length > longestYet.length) {
        longestYet = substr;
      }
    }
  }

  return longestYet;
};

module.exports = {
  reverseNumber,
  isPalindrome,
  longestWord,
  longestPalindrome
};
