// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} str
 * @return {string}
 */
const revStr = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
};

var reverseWords = function (str) {
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = revStr(arr[i]);
  }
  return arr.join(' ');
};
