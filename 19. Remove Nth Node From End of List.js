/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const preStart = { next: head };

  let lead = preStart;
  let trail = preStart;

  for (let i = 0; i < (n); i++) {
    lead = lead.next;
  }

  if (lead !== null) {
    while (lead.next !== null) {
      lead = lead.next;
      trail = trail.next;
    }
  }

  trail.next = trail.next.next;

  return preStart.next;
};

function ListNode(val) {
  return { val, next: null };
}

const testZero = ListNode(1);
let pointer = testZero;
pointer.next = ListNode(2);
pointer = pointer.next;
pointer.next = ListNode(3);
pointer = pointer.next;
pointer.next = ListNode(4);
pointer = pointer.next;
pointer.next = ListNode(5);
pointer = pointer.next;

const expectZero = ListNode(1);
pointer = expectZero;
pointer.next = ListNode(2);
pointer = pointer.next;
pointer.next = ListNode(3);
pointer = pointer.next;
pointer.next = ListNode(5);
pointer = pointer.next;

// ==========================

const testOne = ListNode(1);
// const expectOne = ListNode(undefined);
const expectOne = null;

// ==========================

const testTwo = ListNode(1);
testTwo.next = ListNode(2);

// console.log(JSON.stringify(testThree, '', 2));

const expectTwo = ListNode(2);

require('./_test').runTests(removeNthFromEnd, [
  [[testZero, 2], expectZero],
  [[testOne, 1], expectOne],
  [[testTwo, 2], expectTwo]
]);
