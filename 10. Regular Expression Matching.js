/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return new RegExp(`^${p}$`).test(s);
};

// Specifications:
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).


console.assert(isMatch('aa', 'a') === false, `case: 'aa', 'a'`); // should be false
console.assert(isMatch('aa', 'a*'), `case: 'aa', 'a*'`); // should be true
console.assert(isMatch('ab', '.*'), `case: 'ab', '.*'`); // should be true
console.assert(isMatch('ab', '.*'), `case: 'ab', '.*'`); // should be true
console.assert(isMatch('aab', 'c*a*b'), `case: 'aab', 'c*a*b'`); // should be true
console.assert(isMatch('mississippi', 'mis*is*p*.') === false, `'mississippi', 'mis*is*p*.'`); // should be false
console.assert(isMatch('mississippi', 'mis*is*ip*.'), `'mississippi', 'mis*is*ip*.'`); // should be false
console.assert(isMatch('ab', '.*c') === false, `case: 'ab', '.*c'`); // should be false
console.assert(isMatch('aaa', 'a*a'), `case: 'aaa', 'a*a'`); // should be true
console.assert(isMatch('aaa', 'ab*a*c*a'), `case: 'aaa', 'ab*a*c*a'`); // should be true
