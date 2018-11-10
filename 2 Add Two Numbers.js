
const Node = (val) => {
  return {
    val,
    next: null
  };
}

// test case inputs

// tests against exponential number error (ex. 3e+5 => 5, NaN, NaN, 3)
// const a = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
// const b = [5, 6, 4];

// tests against carry type error
const a = [5];
const b = [5];

const makeList = (arr) => {
  const List = Node(arr[0]);
  let pointer = List;
  for (let i = 1; i < arr.length; i++) {
    pointer.next = Node(arr[i]);
    pointer = pointer.next;
  }
  return List;
}

const l1 = makeList(a);
// const l1 = makeList([2, 4, 3]);
// const l1 = Node(2);
// l1.next = Node(4);
// l1.next.next = Node(3);

const l2 = makeList(b);
// const l2 = makeList([5, 6, 4]);
// const l2 = Node(5);
// l2.next = Node(6);
// l2.next.next = Node(4);

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
var addTwoNumbers = function (l1, l2) {
  // const digits1 = [];
  // const digits2 = [];
  let p1 = l1;
  let p2 = l2;

  const val = p1.val + p2.val;

  let carry = val > 9;
  const l3 = Node(p1.val + p2.val);

  if (carry) {
    l3.val -= 10;
  }
  let p3 = l3;

  p1 = p1.next;
  p2 = p2.next;

  while (p1 || p2) {
    const p1Val = (p1) ? p1.val : 0;
    const p2Val = (p2) ? p2.val : 0;

    const val = p1Val + p2Val + ((carry) ? 1 : 0);
    carry = false;
    if (val > 9) {
      carry = true;
      p3.next = Node(val - 10);
    } else {
      p3.next = Node(val);
    }

    if (p1) { p1 = p1.next; }
    if (p2) { p2 = p2.next; }
    p3 = p3.next;
  }

  if (carry) { // edge case
    p3.next = Node(1);
  }

  // const fillDigits = (digits, pointer) => {
  //   while(true) {
  //     digits.push(pointer.val);
  //     if (pointer.next === null) {
  //       return;
  //     }
  //     pointer = pointer.next;
  //   }
  // }

  // fillDigits(digits1, p1);
  // fillDigits(digits2, p2);

  // const num1 = parseInt(digits1.reverse().join(''));
  // const num2 = parseInt(digits2.reverse().join(''));
  // const num3 = num1 + num2;
  // const digits3 = num3.toString().split('');

  // const l3 = Node(parseInt(digits3.pop()));
  // let p3 = l3;
  // while(digits3.length > 0) {
  //   p3.next = Node(parseInt(digits3.pop()));
  //   p3 = p3.next;
  // }

  return l3;
};

console.log(JSON.stringify(addTwoNumbers(l1, l2), '', 2));
