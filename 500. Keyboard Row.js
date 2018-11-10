// https://leetcode.com/problems/keyboard-row/description/

/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const keys = [];

  keys['top'] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  keys['middle'] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  keys['bottom'] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const result = [];

  // check each word
  for (let i = 0; i < words.length; i++) {
    const thisWord = words[i];
    const firstChar = words[i].charAt(0).toLowerCase();
    // check what row the first letter is in
    let rowIndex = (keys['top'].indexOf(firstChar) !== -1) ? 'top' : keys['middle'].indexOf(firstChar);
    if (rowIndex !== 'top') {
      rowIndex = (rowIndex !== -1) ? 'middle' : 'bottom';
    }
    let validWord = true;
    // check the rest of the letters of the word
    for (let j = 1; j < words[i].length; j++) {
      const thisChar = thisWord.charAt(j).toLowerCase();
      if (keys[rowIndex].indexOf(thisChar) === -1) {
        validWord = false;
        break;
      }
    }
    if (validWord) {
      result.push(words[i]);
    }
  }
  return result;
};
