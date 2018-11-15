/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = 0;

  for (let lead = 1; lead < nums.length; lead++) {
    if (nums[current] !== nums[lead]) {
      current++;
      nums[current] = nums[lead];
    }
  }

  return current + 1; // lead starts ahead of current by one
};

console.log(removeDuplicates([1, 1, 2]));
