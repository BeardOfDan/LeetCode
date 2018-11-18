/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const xDigits = x.toString(2);
  const yDigits = y.toString(2);

  let diffs = 0;

  const length = (xDigits.length > yDigits.length) ? xDigits.length : yDigits.length;

  for (let i = 0; i < length; i++) {
    const xDigit = xDigits[xDigits.length - 1 - i] || '0'; // digit or leading zero
    const yDigit = yDigits[yDigits.length - 1 - i] || '0'; // digit or leading zero

    if (xDigit !== yDigit) {
      diffs++;
    }
  }

  return diffs;
};

require('./_test').runTests(hammingDistance, [
  [[3, 1], 1]
]);
