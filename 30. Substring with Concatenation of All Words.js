/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length < 1) {
    return [];
  }

  const indexes = [];

  for (let i = 0; i < s.length; i++) {
    if (matchesWords(s.slice(i), words.slice())) {
      indexes.push(i);
    }
  }

  return indexes;
};

// helper function to determine if the current substring matches any of the words in the supplied array
const matchesWords = (str, words) => {
  if (words.length < 1) {
    return true;
  }

  let matchIndex = -1;

  for (let i = 0; i < words.length; i++) {
    const subStr = str.slice(0, words[i].length);
    const currentWord = words[i];
    if (subStr === currentWord) {
      matchIndex = i;
      break;
    }
  }

  if (matchIndex === -1) {
    return false;
  } else {
    const remainder = str.slice(words[matchIndex].length); // skip the matched portion of the string
    words.splice(matchIndex, 1); // remove the matched word
    return matchesWords(remainder, words);
  }
};

require('./_test').runTests(findSubstring, [
  [['barfoothefoobarman', ['foo', 'bar']], [0, 9]],
  [['wordgoodstudentgoodword', ['word', 'student']], []]
]);
