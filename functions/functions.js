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


const longestWord = sentence => {
  return sentence.split(' ').map(word => word.replace(/\W/g, '')).reduce((longestWord, currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    return longestWord;
  }, '')
}
module.exports = {
  reverseNumber,
  isPalindrome,
  longestWord
};