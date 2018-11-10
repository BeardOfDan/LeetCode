// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

/*
Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level)
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const arr = [];
  const result = [];

  // guard against invalid input
  if ((root !== undefined) && (root !== null)) {
    arr.push({ 'node': root, 'depth': 0 });
  }

  let current;
  while (current = arr.shift()) {
    const depth = current.depth;

    if (result[current.depth] === undefined) {
      result[current.depth] = [current.node.val];
    } else {
      result[current.depth].push(current.node.val);
    }

    // handle the children
    if (current.node.left !== null) {
      arr.push({ 'node': current.node.left, 'depth': depth + 1 });
    }

    if (current.node.right !== null) {
      arr.push({ 'node': current.node.right, 'depth': depth + 1 });
    }
  }

  return result;
};
