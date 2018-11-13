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

  let lastCharIndex = -1; // index of the start of the last possible consecutive string of chars to match a * case

  let match = true;
  let patternsIndex = 0;
  for (let i = 0; (i < s.length); i++) {
    if (patterns.length <= patternsIndex) { // the string extends beyond the pattern
      // console.log(`s: ${s} | p: ${JSON.stringify(patterns)} | the string extends beyond the pattern`);
      match = false;
      break;
    } else if (i >= s.length) { // the pattern extends beyond the string
      // check for case where the rest of the pattern(s) are just * cases
      //   since they could be zero of those chars
      // console.log(`s: ${s} | p: ${JSON.stringify(patterns)} | the pattern extends beyond the string`);
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
          if ((pattern[1] === '*') && (s[i - 1] !== s[i])) { // if it is the first char to match this use of the '*' wildard
            lastCharIndex = i;
          }

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

  if (patternsIndex < patterns.length) {
    // console.log(`s: ${s} | p: ${JSON.stringify(patterns)} | patternsIndex < patterns.length`);
    for (let i = patternsIndex; i < patterns.length; i++) {
      if (s[lastCharIndex] === patterns[i][0]) {
        lastCharIndex++;
        continue;
      }
      if (patterns[i].length < 2) {
        match = false;
        break;
      }
    }
  }

  // handle case where pattern is not finished
  // and the rest of the pattern is not simply * cases (since could be zero)

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
console.assert(isMatch('ab', '.*c') === false, `case: 'ab', '.*c'`); // should be false
console.assert(isMatch('aaa', 'a*a'), `case: 'aaa', 'a*a'`); // should be true
console.assert(isMatch('aaa', 'ab*a*c*a'), `case: 'aaa', 'ab*a*c*a'`); // should be true
