// https://leetcode.com/problems/self-dividing-numbers/description/
/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  const end = right + 1; // remove the == comparison in the for loop
  for (let i = left; i < end; i++) {
    if (isSelfDividingNumber(i)) {
      result.push(i);
    }
  }
  return result;
};

const isSelfDividingNumber = (num) => {
  const digits = num.toString().split('');
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      return false;
    } else if ((num % parseInt(digits[i])) !== 0) {
      return false;
    }
  }
  return true;
};
