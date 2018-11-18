/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (arr) {
  const result = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    result[i] = result[i].reverse();
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = (result[i][j] === 1) ? 0 : 1;
    }
  }

  return result;
};
