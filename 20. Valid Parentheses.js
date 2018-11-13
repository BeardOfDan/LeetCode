/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []; // an array that acts like a stack of the parens

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case '(':
      case '{':
      case '[':
        stack.push(char);
        break;

      case ')':
        if (stack.pop() !== '(') {
          return false;
        }
        break;

      case '}':
        if (stack.pop() !== '{') {
          return false;
        }
        break;

      case ']':
        if (stack.pop() !== '[') {
          return false;
        }
        break;

      default:
        console.log('ERROR! ' + char);
    }
  }

  return stack.length < 1;
};

require('./_test').runTestsSingleArg(isValid, [
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
]);
