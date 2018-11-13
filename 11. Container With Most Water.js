/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let left = 0; // left index
  let right = height.length - 1; // right index

  while (left < right) {
    const testHeight = (height[left] < height[right]) ? height[left] : height[right];
    const testArea = testHeight * (right - left); // height times base
    area = (area > testArea) ? area : testArea;

    // move the pointer to the lesser height closer to the center
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

console.assert(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, `case: [1,8,6,2,5,4,8,3,7] => 49`);

