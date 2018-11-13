/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim();

  if (parseInt(str) !== parseInt(str)) {
    return 0; // instead of NaN
  }

  let len = 1;

  for (let i = 1; i < str.length; i++) {
    if (numericChar(str.charAt(i))) {
      len++;
    }
  }

  return bound(parseInt(str.slice(0, len)));
};

const bound = (num) => {
  if (num < 0) {
    return Math.max(-(2 ** 31), num);
  }
  return Math.min((2 ** 31) - 1, num);
};

const numericChar = (char) => {
  return (parseInt(char)).toString() === char;
};
