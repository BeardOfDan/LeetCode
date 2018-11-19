/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leftLeaves = getLeaves(root1);
  const rightLeaves = getLeaves(root2);

  return leftLeaves.toString() === rightLeaves.toString();
};

const getLeaves = (root, leaves = []) => {
  if (root !== null) {
    if ((root.left === null) && (root.right === null)) {
      leaves.push(root.val);
    }
    getLeaves(root.left, leaves);
    getLeaves(root.right, leaves);
  }

  return leaves;
};

