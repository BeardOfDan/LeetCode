/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let length = 0; // length of longest substring
  let substr = ''; // longest substring

  // start a check from each character
  for (let i = 0; i < (s.length - length); i++) {
    let str = ''; // current string
    // see how long the substr is
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (str.indexOf(char) === -1) { // new character
        str += char;
      } else { // hit a repeated char
        if (str.length > substr.length) { // new longest length
          substr = str;
          length = substr.length;
        }
        break;
      }
    }
    if (str.length > substr.length) {
      substr = str;
      length = substr.length;
    }
  }

  return length;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // should be 3
console.log(lengthOfLongestSubstring("bbbbb")); // should be 1
console.log(lengthOfLongestSubstring("pwwkew")); // should be 3
console.log(lengthOfLongestSubstring(" ")); // should be 1
console.log(lengthOfLongestSubstring("jbpnbwwd")); // should be 4

