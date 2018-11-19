/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// NOTE: val is guarenteed to not already be in the tree
var insertIntoBST = function (root, val) {
  if (root.val < val) {
    if (root.right === null) {
      root.right = { val, right: null, left: null };
    } else {
      insertIntoBST(root.right, val);
    }
  } else { // root.val > val
    if (root.left === null) {
      root.left = { val, right: null, left: null };
    } else {
      insertIntoBST(root.left, val);
    }
  }

  return root;
};
