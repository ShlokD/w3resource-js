const functions = require('./functions');

describe('Function programming exercises', () => {
  let actual;
  let expected;

  describe('reverseNumber', () => {


    test('it should reverse a number', () => {
      expected = 4331;
      actual = functions.reverseNumber(1334);
      expect(actual).toEqual(expected);
    });

    test('it should reverse a large number', () => {
      expected = 6245890131;
      actual = functions.reverseNumber(1310985426);
      expect(actual).toEqual(expected);
    });

    test('it should reverse a numeric string', () => {
      expected = 4331;
      actual = functions.reverseNumber('1334');
      expect(actual).toEqual(expected);
    });

    test('it should reverse MAX_SAFE_INTEGER', () => {
      expected = 1990474529917009;
      actual = functions.reverseNumber(Number.MAX_SAFE_INTEGER);
      console.log(actual);
      expect(actual).toEqual(expected);
    });

    test('it should not reverse Infinity', () => {
      expected = null;
      actual = functions.reverseNumber(Infinity);
      expect(actual).toEqual(expected);
    });

    test('it should not reverse a number greater than MAX_SAFE_INTEGER', () => {
      expected = null;
      actual = functions.reverseNumber(Number.MAX_SAFE_INTEGER + 1);
      expect(actual).toEqual(expected);
    });

    test('it should not reverse a alphanumeric string', () => {
      expected = null;
      actual = functions.reverseNumber('ab12');
      expect(actual).toEqual(expected);
    });

    test('it should not reverse an array', () => {
      expected = null;
      actual = functions.reverseNumber([4, 3, 3, 1]);
      expect(actual).toEqual(expected);
    });
  });


  describe('isPalindrome', () => {
    test('it should detect palindrome for string', () => {
      expected = true;
      actual = functions.isPalindrome('madam');
      expect(actual).toEqual(expected);
    });

    test('it should not detect palindrome for array', () => {
      expected = false;
      actual = functions.isPalindrome(['b', 'o', 'b']);
      expect(actual).toEqual(expected);
    });

    test('it should not detect palindrome for boolean', () => {
      expected = false;
      actual = functions.isPalindrome(false);
      expect(actual).toEqual(expected);
    });

    test('it should not detect palindrome for number', () => {
      expected = false;
      actual = functions.isPalindrome(1234);
      expect(actual).toEqual(expected);
    });
  });

  describe('Longest Word', () => {
    test('it should find the longest word in a sentence', () => {
      expected = 'completely';
      actual = functions.longestWord(`Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.`);
      expect(actual).toEqual(expected);
    });
  });
});
