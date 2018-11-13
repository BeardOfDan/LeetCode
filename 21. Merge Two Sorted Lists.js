/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let vals = [];
  let pointer = l1;

  while (pointer !== null) {
    vals.push(pointer.val);
    pointer = pointer.next;
  }

  pointer = l2;

  while (pointer !== null) {
    vals.push(pointer.val);
    pointer = pointer.next;
  }

  if (vals.length < 1) {
    return null;
  }

  vals = vals.sort((a, b) => { return a - b });

  const Node = (val) => {
    return { val, next: null };
  };

  const l3 = Node(vals[0]);
  pointer = l3;

  for (let i = 1; i < vals.length; i++) {
    pointer.next = Node(vals[i]);
    pointer = pointer.next;
  }

  return l3;
};

