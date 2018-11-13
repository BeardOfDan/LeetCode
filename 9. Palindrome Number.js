/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const y = x.toString().split('').reverse().join('');

  return y === x.toString();
};
