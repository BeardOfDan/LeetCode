/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const possibilities = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    possibilities[i] = possibilities[i - 1] + possibilities[i - 2];
  }

  return possibilities[n];
};


require('./_test').runTestsSingleArg(climbStairs, [
  [2, 2],
  [3, 3]
]);
