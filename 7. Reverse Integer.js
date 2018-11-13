/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const negative = x < 0;

  const result = (negative ? -1 : 1) * Math.abs(x).toString().split('').reverse().join('');

  if ((result > 0x7FFFFFFF) || (result < -0x7FFFFFFF)) {
    return 0;
  }

  return result;
};
