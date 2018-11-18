/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const note = getLettersCount(ransomNote);
  const mag = getLettersCount(magazine);

  for (let key in note) {
    if ((mag[key] === undefined) || (note[key] > mag[key])) {
      return false;
    }
  }

  return true;
};

const getLettersCount = (str) => {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]] !== undefined) {
      counts[str[i]]++;
    } else {
      counts[str[i]] = 1;
    }
  }

  return counts;
};

require('./_test').runTests(canConstruct, [
  [['a', 'b'], false],
  [['aa', 'bb'], false],
  [['aa', 'aab'], true]
]);
