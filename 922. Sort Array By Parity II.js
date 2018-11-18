/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (arr) {
  const result = [];

  let even = 0; // index for even values
  let odd = 1; // index for odd values

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[even] = arr[i];
      even += 2;
    } else {
      result[odd] = arr[i];
      odd += 2;
    }
  }

  return result;
};
