
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
      const actual = f(...args);

      console.assert(actual === expected, `case: ${JSON.stringify(...args)}, ${JSON.stringify(expected)} | Expected ${JSON.stringify(expected)}, but recieved: ${JSON.stringify(actual)}`);
    }

    if (useSpacing) {
      console.log(spacing);
    }

    return true; // signifies that all assertions were run
  },
  runTestsSingleArg: (f, inputs, useSpacing = true, spacing = '\n') => {
    for (let i = 0; i < inputs.length; i++) {
      const arg = inputs[i][0];
      const expected = inputs[i][1];
      const actual = f(arg);

      console.assert(actual === expected, `case: ${JSON.stringify(arg)}, ${JSON.stringify(expected)} | Expected ${JSON.stringify(expected)}, but recieved: ${JSON.stringify(actual)}`);
    }

    if (useSpacing) {
      console.log(spacing);
    }

    return true; // signifies that all assertions were run
  }
};
