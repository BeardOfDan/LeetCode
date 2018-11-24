/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
  const result = [];
  const words = str.trim().split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i]) { // don't include excess white spaces
      result.push(words[i]);
    }
  }

  return result.reverse().join(' ');
};

require('./_test').runTestsSingleArg(reverseWords, [
  [' ', ''],
  ["the sky is blue", "blue is sky the"],
  ["the   sky   is   blue", "blue is sky the"],
  ["   the sky is blue    ", "blue is sky the"],
  ["     the      sky     is     blue         ", "blue is sky the"]
]);

