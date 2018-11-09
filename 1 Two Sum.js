/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexes = [0, nums.lenght - 1];
  let sum = nums[indexes[0]] + nums[indexes[1]];
  const compliments = [];

  for (let i = 0; i < nums.length; i++) {
    const index = compliments.indexOf(nums[i]);
    if (index > -1) {
      indexes[0] = index;
      indexes[1] = i;
      break;
    }

    // check for compliments at end to not reuse an element
    compliments.push(target - nums[i]);
  }

  return indexes;
};
