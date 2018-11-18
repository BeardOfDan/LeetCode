/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const endLength = m + n;

  // fill empty nums1 elements with nums2 elements
  for (let i = m; i < endLength; i++) {
    nums1[i] = nums2[i - m];
  }

  nums1 = nums1.sort((a, b) => { return a - b; });

  // nums1 is the answer (by reference), no need to return anything
};
