/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (numbers) {
  const result = [];
  const nums = numbers.sort((a, b) => { return a - b; }); // doesn't mutate the input array

  for (let i = 0; i < nums.length; i++) {
    if ((i !== 0) && (nums[i] === nums[i - 1])) { // don't allow duplicate triplicates
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const tripleSum = nums[i] + nums[j] + nums[k];
      if (tripleSum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;

        // force j to skip duplicates
        while ((j < k) && (nums[j] === nums[j - 1])) {
          j++;
        }
      } else if (tripleSum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};

require('./_test').runTestsSingleArg(threeSum, [[[-1, 0, 1, 2, -1, -4], [[-1, 0, 1], [-1, -1, 2]]]]);

