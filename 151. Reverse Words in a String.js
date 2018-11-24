/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
  const charArray = [];

  // these two variables are indexes that skip starting and ending whitespace
  let revStart = str.length - 1; // starting position for reverse order
  let revEnd = 0; // ending position for reverse order

  for (let i = revStart; ((str[i] === ' ') && (i > -1)); i--) {
    revStart--;
  }

  for (let i = revEnd; ((str[i] === ' ') && (i < str.length)); i++) {
    revEnd++;
  }
  revEnd--; // to remove the [or equal] comparison

  // fill in str in reverse order
  for (let i = revStart; i > revEnd; i--) {
    if ((str[i] === ' ') && (str[i - 1] === ' ')) {
      continue; // skip redundant spaces between words
    }
    charArray.push(str[i]);
  }

  // re-reverse the words
  let start = 0;
  for (let i = 0; i < charArray.length; i++) {
    if ((charArray[i] === ' ') && (start !== i)) { // the span of a word is found
      // reverse the word
      const end = i; // non inclusive, since is the trailing space
      const length = end - start;
      for (let j = 0; j < (length / 2); j++) {
        const swapSpace = charArray[start + j];
        charArray[start + j] = charArray[end - 1 - j];
        charArray[end - 1 - j] = swapSpace;
      }

      start = i + 1; // the next word starts after the space
    }
  }

  // re-reverse the last word (wasn't done in the loop)
  const end = charArray.length;
  const length = end - start;
  for (let i = 0; i < (length / 2); i++) {
    const swapSpace = charArray[start + i];
    charArray[start + i] = charArray[end - 1 - i];
    charArray[end - 1 - i] = swapSpace;
  }

  return charArray.join('');
};

require('./_test').runTestsSingleArg(reverseWords, [
  [' ', ''],
  ["the sky is blue", "blue is sky the"],
  ["the   sky   is   blue", "blue is sky the"],
  ["   the sky is blue    ", "blue is sky the"],
  ["     the      sky     is     blue         ", "blue is sky the"]
]);

