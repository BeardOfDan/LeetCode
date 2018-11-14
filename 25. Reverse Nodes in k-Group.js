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
  // const { listToArr } = require('./_test');
  const preStart = { next: head };

  let trail = preStart;
  let lead = trail;

  const listToStr = (head) => {
    const result = [];
    let pointer = head;

    while (pointer !== null) {
      result.push(pointer.val);
      pointer = pointer.next;
    }

    return result.join(', ');
  };

  while (true) {
    let remainder = trail;
    const pointers = [];
    for (let i = 0; i < k; i++) {
      remainder = remainder.next; // update remainder
      pointers.push(remainder); // put pointers to the nodes to reverse in an array
      if (lead.next === null) {
        return preStart.next; // finished
      }
      lead = lead.next;
    }

    const length = pointers.length;

    const last = pointers[pointers.length - 1];
    const first = pointers[0];

    trail.next = last;
    first.next = remainder;

    console.log('pre');

    for (let i = length - 1; i > 0; i--) {
      pointers[i].next = pointers[i - 1];
      console.log('i: ' + i);
    }

    console.log('post');

    for (let i = 0; i < k; i++) {
      trail = trail.next;
    }

    console.log('end of while loop');
  }

  return preStart.next;
};

const TEST = require('./_test');
const { makeLinkedList } = TEST;

const testOne = makeLinkedList([1, 2, 3, 4, 5]);
const expectOne = makeLinkedList([2, 1, 4, 3, 5]);

TEST.runTests(reverseKGroup, [
  [[testOne, 2], expectOne]
]);
