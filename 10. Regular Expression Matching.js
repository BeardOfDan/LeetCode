/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

};

// Specifications:
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).


console.assert(isMatch('aa', 'a')); // should be false
console.assert(isMatch('aa', 'a*')); // should be true
console.assert(isMatch('ab', '.*')); // should be true
console.assert(isMatch('ab', '.*')); // should be true
console.assert(isMatch('aab', 'c*a*b')); // should be true
console.assert(isMatch('mississippi', 'mis*is*p*.')); // should be false


