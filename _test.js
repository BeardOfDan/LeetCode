
// f is the function to test
// input is an array of tuples
//   Ex. input = [[args, expected]]
//   Where args are the arguments for function f
//    and expected is the expected return result of f
module.exports = {
  runTests: (f, inputs, useSpacing = true, spacing = '\n') => {
    for (let i = 0; i < inputs.length; i++) {
      const args = inputs[i][0];
      const expected = inputs[i][1];
      console.assert(f(...args) === expected, `case: ${JSON.stringify(...args)}, ${JSON.stringify(expected)}`);
    }

    if (useSpacing) {
      console.log(spacing);
    }

    return true; // signifies that all assertions were run
  }
};
