/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (arr) {
  const result = [];

  // add even elements
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0) {
      result.push(arr[i]);
    }
  }

  // add odd elements
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) !== 0) {
      result.push(arr[i]);
    }
  }

  return result;
};
