/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentMax = Number.NEGATIVE_INFINITY;
  let accumulator = 0;

  for (let i = 0; i < nums.length; i++) {
    accumulator += nums[i];
    if (currentMax < accumulator) {
      currentMax = accumulator;
    }

    if (accumulator < 0) { // accumulating multiple negative numbers only decreases the sum
      accumulator = 0; // start summing for a new subArray
    }
  }

  return currentMax;
};

require('./_test').runTestsSingleArg(maxSubArray, [
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  [[1], 1],
  [[-2, 1], 1],
  [[-1], -1]
]);

