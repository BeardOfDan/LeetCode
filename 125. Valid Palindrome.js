/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
  let s = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumericChar(char)) {
      s += str[i].toLowerCase();
    }
  }

  for (let i = 0; i < (s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// helper function
const isAlphaNumericChar = (char) => {
  const code = char.charCodeAt(0);

  if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }

  return true;
};
