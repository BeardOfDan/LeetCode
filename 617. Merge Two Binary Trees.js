/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  const node = { val: 0, left: null, right: null };

  if (t1 === null) {
    if (t2 === null) {
      return null;
    } else {
      node.left = mergeTrees(null, t2.left);
      node.right = mergeTrees(null, t2.right);
      node.val = t2.val;
      return node;
    }
  } else if (t2 === null) {
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
    node.val = t1.val;
    return node;
  }

  node.left = mergeTrees(t1.left, t2.left);
  node.right = mergeTrees(t1.right, t2.right);
  node.val = t1.val + t2.val;
  return node;
};
