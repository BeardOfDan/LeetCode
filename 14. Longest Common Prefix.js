/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return '';
  } else if (strs.length < 2) {
    return strs[0];
  }

  const first = strs[0]; // the first string
  let prefix = '';

  // go through each character
  for (let i = 0; i < first.length; i++) {
    const char = first[i]
    // go through the rest of the strings
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) { // no longer a matching prefix
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

require('./_test').runTestsSingleArg(longestCommonPrefix, [[["flower", "flow", "flight"], 'fl']]);
