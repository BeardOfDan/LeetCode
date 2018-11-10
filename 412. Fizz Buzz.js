// https://leetcode.com/problems/fizz-buzz/description/

/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.

For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  const end = n + 1;

  for (let i = 1; i < end; i++) {
    let current = '';

    if ((i % 3) === 0) {
      current += 'Fizz';
    }

    if ((i % 5) === 0) {
      current += 'Buzz';
    }

    if (current.length === 0) {
      result.push(i.toString());
    } else {
      result.push(current);
    }
  }

  return result;
};
