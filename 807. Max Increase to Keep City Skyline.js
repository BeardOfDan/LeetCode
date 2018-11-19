/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const length = grid.length; // is a square grid, so only one side is needed

  const maxV = new Array(length).fill(0); // highest value vertically
  const maxH = new Array(length).fill(0); // highest value horizontally

  // go through each row
  for (let i = 0; i < length; i++) {
    // go through each column
    for (let j = 0; j < length; j++) {
      const element = grid[i][j];

      // update max for each row / column
      maxH[i] = Math.max(maxH[i], element);
      maxV[j] = Math.max(maxV[j], element);
    }
  }

  let result = 0;

  // go through each row
  for (let i = 0; i < length; i++) {
    // go through each column
    for (let j = 0; j < length; j++) {
      result += Math.min(maxH[i], maxV[j]) - grid[i][j]; // add height increases
    }
  }

  return result;
};

console.assert(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]) === 35, 'failed case 0');
