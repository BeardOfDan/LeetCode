/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const base2 = n.toString(2);
  let result = 0;

  for (let i = 0; i < base2.length; i++) {
    if (base2[i] === '1') {
      result++;
    }
  }

  return result;
};
