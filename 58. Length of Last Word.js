/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length < 1) {
    return 0;
  }

  let words = s.split(' ');
  for (let i = words.length - 1; i > -1; i--) {
    if (words[i].length > 0) {
      return words[i].length;
    }
  }

  return 0; // handles case of all space characters
};

require('./_test').runTestsSingleArg(lengthOfLastWord, [
  ['Hello World', 5],
  ['a ', 1],
  ['', 0],
  ['        ', 0]
]);

