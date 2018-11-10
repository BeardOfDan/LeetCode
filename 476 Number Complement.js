// https://leetcode.com/problems/number-complement/description/
/*
  Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

  Note:
  The given integer is guaranteed to fit within the range of a 32-bit signed integer.
  You could assume no leading zero bit in the integer’s binary representation.
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const bin = parseInt(num).toString(2); // convert to string of base2
  let compliment = '';
  for (let i = 0; i < bin.length; i++) {
    compliment += (bin[i] === '0') ? '1' : '0';
  }
  return parseInt(compliment, 2);
};
