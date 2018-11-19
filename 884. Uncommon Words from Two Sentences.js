/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const words1 = A.split(' ');
  const words2 = B.split(' ');

  const countA = {};
  const countB = {};

  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    if (countA[word] === undefined) {
      countA[word] = 1;
    } else {
      countA[word]++;
    }
  }

  for (let i = 0; i < words2.length; i++) {
    const word = words2[i];
    if (countB[word] === undefined) {
      countB[word] = 1;
    } else {
      countB[word]++;
    }
  }

  const uncommons = [];

  for (let word in countA) {
    if (countA[word] === 1) {
      if (countB[word] === undefined) {
        uncommons.push(word);
      }
    }
  }

  for (let word in countB) {
    if (countB[word] === 1) {
      if (countA[word] === undefined) {
        uncommons.push(word);
      }
    }
  }

  return uncommons;
};
