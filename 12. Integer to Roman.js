/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const numerals = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

  let result = '';

  for (let i = 0; (num > 0); i++) {
    const decimal = numerals[i][0];
    const numeral = numerals[i][1];

    while (num >= decimal) {
      result += numeral;
      num -= decimal;
    }
  }

  return result;
};

const Test = require('./_test').runTests;

Test(intToRoman, [[[1], 'I'], [[5], 'V'], [[10], 'X']]);
