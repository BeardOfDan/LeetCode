/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let indexA = a.length - 1; // start from least significant digits
  let indexB = b.length - 1;
  let result = '';

  // go for the length of the longer number
  const length = (a.length > b.length) ? a.length : b.length;
  let carry = false;

  for (let i = 0; i < length; i++) {
    const digitA = parseInt(a[indexA]) || 0; // either digit or leading 0
    const digitB = parseInt(b[indexB]) || 0;
    const sum = digitA + digitB + ((carry) ? 1 : 0);

    if (sum === 3) {
      carry = true;
      result = '1' + result;
    } else if (sum === 2) {
      carry = true;
      result = '0' + result;
    } else if (sum === 1) {
      carry = false;
      result = '1' + result;
    } else { // sum = 0
      carry = false;
      result = '0' + result;
    }

    indexA--;
    indexB--;
  }

  if (carry) {
    result = '1' + result;
  }

  return result;

  // const alpha = parseInt(a, 2);
  // const beta = parseInt(b, 2);
  // const sum = alpha + beta;
  // return sum.toString(2);
};

require('./_test').runTests(addBinary, [
  [['11', '1'], '100'],
  [['10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'], '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000'],
  [['0', '0'], '0'],
  [['0', '1'], '1'],
  [['1', '0'], '1'],
  [['1', '1'], '10'],
  [['10', '0'], '10'],
  [['0', '10'], '10'],
  [['10', '10'], '100'],
  [['11', '11'], '110']
]);
