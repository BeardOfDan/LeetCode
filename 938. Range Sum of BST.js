/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  const vals = getNodeVals(root);

  let sum = 0;
  for (let i = 0; i < vals.length; i++) {
    const val = vals[i];
    if (!(val < L) && !(val > R)) {
      sum += val;
    }
  }

  return sum;
};

const getNodeVals = (root, leaves = []) => {
  if (root !== null) {
    leaves.push(root.val);
    getNodeVals(root.left, leaves);
    getNodeVals(root.right, leaves);
  }

  return leaves;
};

