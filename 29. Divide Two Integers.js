/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const isNegative = (((dividend < 0) && (divisor < 0)) || ((dividend > -1) && (divisor > -1))) ? false : true;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (divisor > dividend) {
    return 0;
  }

  let result = 0;

  let overflow = false; // if larger versions overflow to a negative number

  // powers of 8, pseudo-arbitrary choice
  const multipliers = [1, 8, 64, 512];
  const multiples = [divisor, 0, 0, 0];

  for (let i = 1; i < multipliers.length; i++) {
    for (let j = 0; j < 8; j++) {
      multiples[i] += multiples[i - 1];
    }
  }

  for (let i = multiples.length - 1; i > -1; i--) {
    let multiDivisor = multiples[i];

    if (!multiDivisor) {
      continue; // protects against negative overflow
    }

    while (dividend >= multiDivisor) {
      dividend -= multiDivisor;
      result += multipliers[i];
    }
  }

  if (isNegative) {
    return Math.max(-(2 ** 32), (-result));
  }

  return Math.min(((2 ** 31) - 1), result);
};

require('./_test').runTests(divide, [
  [[10, 3], 3],
  [[7, -3], -2],
  [[-2147483648, -1], 2147483647]
]);
