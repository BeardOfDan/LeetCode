/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }

  let p1 = head;

  if (head.next === null) {
    return false;
  }

  let p2 = head.next;

  while (p2 !== null) {
    if (p1 === p2) {
      return true;
    }

    if (p2.next === null) {
      if (p2.next === head) {
        return true;
      }
      return false;
    } else if (p2.next.next === null) {
      return false;
    }

    p1 = p1.next;
    p2 = p2.next.next;
  }

  return false;
};
