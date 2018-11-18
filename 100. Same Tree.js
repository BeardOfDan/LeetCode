/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null) {
    if (q === null) {
      return true;
    } else {
      return false;
    }
  } else if (q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  if (isSameTree(q.left, p.left) && (isSameTree(q.right, p.right))) {
    return true;
  } else {
    return false;
  }
};
