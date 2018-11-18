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
var middleNode = function (head) {
  let length = 0;
  let pointer = head;

  while (pointer !== null) {
    length++;
    pointer = pointer.next;
  }

  pointer = head; // reset pointer

  for (let i = 0; i < ~~(length / 2); i++) {
    pointer = pointer.next;
  }

  return pointer;
};

const { makeLinkedList, listToStr } = require('./_test');

const testOne = makeLinkedList([1, 2, 3, 4, 5]);
const expectOne = makeLinkedList([3, 4, 5]);

const testTwo = makeLinkedList([1, 2, 3, 4, 5, 6]);
const expectTwo = makeLinkedList([4, 5, 6]);

require('./_test').runTestsSingleArg(middleNode, [
  [testOne, expectOne],
  [testTwo, expectTwo]
]);

