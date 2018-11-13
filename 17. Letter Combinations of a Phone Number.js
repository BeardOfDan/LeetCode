/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitsLetters = { 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] };

  let combinations = [''];

  if (digits.length < 1) {
    return [];
  }

  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const letters = digitsLetters[digit];
    const tempCombinations = [];

    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];

      for (let k = 0; k < combinations.length; k++) {
        const combination = combinations[k];
        tempCombinations.push(combination + letter);
      }
    }
    combinations = tempCombinations;
  }

  // optional, helps to pass personal unit tests
  combinations = combinations.sort((a, b) => { return a > b; });

  return combinations;
};

require('./_test').runTestsSingleArg(letterCombinations, [
  ['23', ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]]
]);
