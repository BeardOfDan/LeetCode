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
var deleteDuplicates = function (head) {
  let preStart = { next: head };
  let pointer = preStart.next;

  while ((pointer !== null) && (pointer.next !== null)) {
    if (pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next; // remove duplicate value
    } else {
      pointer = pointer.next; // move to the next, new, value
    }
  }

  return preStart.next;
};

const TEST = require('./_test');

const testOne = TEST.makeLinkedList([1, 1, 1]);
const expectOne = TEST.makeLinkedList([1]);

const testTwo = TEST.makeLinkedList([1, 1, 2]);
const expectTwo = TEST.makeLinkedList([1, 2]);

TEST.runTestsSingleArg(deleteDuplicates, [
  [testOne, expectOne],
  [testTwo, expectTwo]
]);
