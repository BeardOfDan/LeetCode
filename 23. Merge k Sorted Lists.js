/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let vals = [];

  for (let i = 0; i < lists.length; i++) {
    let pointer = lists[i];

    while (pointer !== null) {
      vals.push(pointer.val);
      pointer = pointer.next;
    }
  }

  if (vals.length < 1) {
    return null;
  }

  vals = vals.sort((a, b) => { return a - b });

  const Node = (val) => {
    return { val, next: null };
  };

  const result = Node(vals[0]);
  pointer = result;

  for (let i = 1; i < vals.length; i++) {
    pointer.next = Node(vals[i]);
    pointer = pointer.next;
  }

  return result;
};
