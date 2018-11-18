/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => { return a - b; });
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

console.assert(arrayPairSum([1, 1, 2, 2]) === 3, 'failed case 0');
console.assert(arrayPairSum([1, 4, 3, 2]) === 4, 'failed case 1');
