/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (number) {
  const bits = new Array(number + 1).fill(0);

  for (let i = 0; i <= number; i++) {
    const num = i.toString(2);
    for (let j = 0; j < num.length; j++) {
      bits[i] += parseInt(num[j]);
    }
  }

  return bits;
};

console.assert(countBits(4).toString() === [0, 1, 1, 2, 1].toString(), 'failed case 0');
