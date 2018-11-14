/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const preStart = { next: head };

  let trail = preStart;

  while ((trail.next !== null) && (trail.next.next !== null)) {
    const remainder = trail.next.next.next;
    const left = trail.next;
    const right = trail.next.next;
    trail.next = right;
    trail.next.next = left;
    trail.next.next.next = remainder;

    trail = trail.next.next;
  }

  return preStart.next;
};
