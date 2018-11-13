/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CD', 'M'];
  const integers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = (s.length > i + 1) ? s[i + 1] : null;

    const currentInteger = integers[numerals.indexOf(current)];
    const nextInteger = next ? integers[numerals.indexOf(next)] : 0;
    if (next) { // might have to subtract current from next
      if (currentInteger < nextInteger) { // do have to subtract current from next
        result += nextInteger - currentInteger;
        i++; // already handled next numeral
        continue;
      }
    }

    result += currentInteger;
  }

  return result;
};

require('./_test').runTests(romanToInt, [[['I'], 1], [['III'], 3], [['IV'], 4], [['V'], 5], [['X'], 10]]);
// require('./_test').runTests(romanToInt, [[['IV'], 4]]);
