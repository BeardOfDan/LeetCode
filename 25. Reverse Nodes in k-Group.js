/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  const preStart = { next: head };

  let lead = preStart;
  let current = preStart;
  let trail = preStart;

  const shouldContinue = function () {
    for (let i = 0; i < k; i++) {
      if (lead.next === null) {
        return false;
      }
      lead = lead.next;
    }
    return true;
  };

  while (shouldContinue()) {
    const pointers = [];
    for (let i = 0; i < k; i++) {
      pointers.unshift(current.next);
      current = current.next;
    }

    trail.next = pointers[0]; // Previous content links to current

    const remainder = lead.next;
    const lastIndex = pointers.length - 1;
    pointers[lastIndex].next = remainder; // current content links to following content

    lead = pointers[lastIndex]; // update lead
    current = lead; // update current

    for (let i = 0; i < (k - 1); i++) {
      pointers[i].next = pointers[i + 1]; // reverses order of current content
      trail = trail.next; // update trail
    }

    trail = trail.next; // update trail | previous loop was one iteration short
  }

  return preStart.next;
};

const TEST = require('./_test');
const { makeLinkedList } = TEST;

const testOne = makeLinkedList([1, 2, 3, 4, 5]);
const expectOne = makeLinkedList([2, 1, 4, 3, 5]);

const testTwo = makeLinkedList([1, 2, 3, 4, 5]);
const expectTwo = makeLinkedList([3, 2, 1, 4, 5]);

TEST.runTests(reverseKGroup, [
  [[testOne, 2], expectOne],
  [[testTwo, 3], expectTwo]
]);
