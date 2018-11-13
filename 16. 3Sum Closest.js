/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (numbers, target) {
  const result = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  const nums = numbers.sort((a, b) => { return a - b; }); // doesn't mutate the input array

  const getCurrentSum = () => {
    return result[0] + result[1] + result[2];
  }

  for (let i = 0; i < (nums.length); i++) {
    if ((i !== 0) && (nums[i] === nums[i - 1])) { // don't allow duplicate triplicates
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const tripleSum = nums[i] + nums[j] + nums[k];

      if (Math.abs(target - tripleSum) < Math.abs(target - getCurrentSum())) {
        result[0] = nums[i];
        result[1] = nums[j];
        result[2] = nums[k];
      }

      if (tripleSum === target) {
        return getCurrentSum(); // closest possible triple
      } else if (tripleSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return getCurrentSum();
};

require('./_test').runTests(threeSumClosest, [
  [[[-1, 2, 1, -4], 1], 2],
  [[[0, 2, 1, -3], 1], 0]
]);
