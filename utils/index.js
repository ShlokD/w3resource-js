/**
 * Check if a number is valid
 *
 * @param {any} number the number to be checked
 * @returns {Boolean} whether the number is a valid number
 * @public
 */
const numberCheck = number => {
  return !isNaN(number) && number !== Infinity && number <= Number.MAX_SAFE_INTEGER;
};

module.exports = {
  numberCheck
};
