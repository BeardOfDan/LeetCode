/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let current = 0;

  for (let lead = 0; lead < nums.length; lead++) {
    if (nums[lead] !== val) {
      nums[current] = nums[lead];
      current++;
    }
  }

  return current;
};

console.log(removeElement([3, 2, 2, 3], 3));
