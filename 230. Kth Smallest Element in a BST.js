/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  return getVals(root).sort((a, b) => {
    return a - b;
  })[k - 1];
};

const getVals = (pointer, values = []) => {
  if (pointer === null) {
    return values;
  } else {
    const val = pointer.val;
    if ((val === null) || (val === undefined) || (val !== val)) {
      // don't add non-values
    } else {
      values.push(pointer.val); // get current value
    }
  }

  // get left and right children
  getVals(pointer.left, values);
  getVals(pointer.right, values);

  return values;
};

const testOne = { val: 3, left: null, right: null };
let pointer = testOne;
pointer.left = { val: 1, left: null, right: null };
pointer.right = { val: 4, left: null, right: null };
pointer.left.right = { val: 2, left: null, right: null };

console.log(kthSmallest(testOne, 1));
