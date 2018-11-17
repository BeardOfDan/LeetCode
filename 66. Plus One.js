/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (inputDigits) {
  const digits = inputDigits.slice(); // don't mutate the input

  let carry = true; // carry flag
  let index = digits.length - 1; // start at the least significant bit

  do {
    if (index < 0) { // edge case
      digits.unshift(1);
      carry = false;
    }

    const num = digits[index] + 1; // add either initial one or carry

    if (num > 9) {
      carry = true;
      digits[index] = 0;
    } else {
      carry = false;
      digits[index] = num;
    }

    index--;
  } while (carry)


  return digits;
};

require('./_test').runTestsSingleArg(plusOne, [
  [[1, 2, 3], [1, 2, 4]],
  [[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3], [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]],
  [[9], [1, 0]]
]);
