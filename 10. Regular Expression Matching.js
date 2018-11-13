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
      if (next === '*') {
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
    if (patterns.length <= patternsIndex) { // the string extends beyond the pattern
      match = false;
      break;
    }

    const pattern = patterns[patternsIndex];
    const char = pattern[0];

    if (pattern.length > 1) {
      if (pattern[1] === '*') {
        if ((s[i] !== char) && (char !== '.')) {
          patternsIndex++; // move on to the next pattern
          i--; // have to check the current character against the next pattern
        } else {
          continue; // move on to the next character
        }
      }
    } else { // single character literal or wilde card '.'
      if (char === '.') { // wild card for any single character
        patternsIndex++;
      } else if (s[i] !== char) {
        match = false;
        break;
      } else {
        patternsIndex++; // move on to the next pattern
      }
    }
  }

  return match;
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

