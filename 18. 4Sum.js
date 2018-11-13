/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (numbers, target) {
  const result = [];

  const nums = numbers.sort((a, b) => { return a - b; }); // don't mutate the input

  for (let i = 0; i < (nums.length - 3); i++) {
    for (let j = i + 1; j < (nums.length - 2); j++) {
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const quadSum = nums[i] + nums[j] + nums[left] + nums[right];
        if (quadSum === target) {
          // check that this is not a duplicate
          let isDuplicate = false;
          for (let index = 0; index < result.length; index++) {
            const current = result[index];
            if ((current[0] === nums[i]) && (current[1] === nums[j]) && (current[2] === nums[left]) && (current[3] === nums[right])) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
          }
          left++;
          right--;
        } else if (quadSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

require('./_test').runTests(fourSum, [
  [[[1, 0, -1, 0, -2, 2], 0], [
    [-1, 0, 0, 1],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2]
  ]]
]);
