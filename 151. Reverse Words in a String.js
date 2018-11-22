/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
  const result = split(rev(str), ' ').reverse();

  for (let i = 0; i < result.length; i++) {
    result[i] = rev(result[i]);
  }

  if (result.length > 1) {
    return result.join(' ');
  } else if (result.length === 1) {
    return result[0];
  } else {
    return '';
  }
};

// helper function that reverses a string
const rev = (str) => {
  for (let i = 0; i < (str.length / 2); i++) {
    const swapSpace = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = swapSpace;
  }

  return str;
};

// a helper function that deviates from split by never creating an element that is the delimiter
const split = (str, del) => {
  const result = [];

  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === del) {
      if (start !== i) {
        result.push(str.slice(start, i));
      }
      start = i + 1;
    }
  }

  if ((start < str.length) && (str[start] !== ' ')) {
    result.push(str.slice(start, str.length));
  }

  return result;
};

require('./_test').runTestsSingleArg(reverseWords, [
  [' ', ''],
  ["the sky is blue", "blue is sky the"]
]);

