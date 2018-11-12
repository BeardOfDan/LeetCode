/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const patterns = [];

  for (let i = 0; i < p.length; i++) {
    if (i + 1 < p.length) {
      const next = p[i + 1];
      if ((next === '*') || (next === '.')) {
        patterns.push(p[i] + next);
        i++; // skip the next char
        continue; // skip the single char literal case
      }
    } // else just a character literal match
    patterns.push(p[i]);
  }

  let match = true;
  let patternsIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const pattern = patterns[patternsIndex];
    if (pattern.length > 1) {
      if (pattern[1] === '*') {

      } else { // pattern[1] === '.'

      }
    } else { // single character literal

    }
  }


  return match;
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


