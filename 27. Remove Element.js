/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  let len = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        len--;
        shiftArr(nums, i);

        if (nums[i] === val) { // if it's the same value, then repeate this step
          i--;
        }
    }
  }

  return len;
};

// A helper function
const shiftArr = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop(); // remove duplicated final element
};
