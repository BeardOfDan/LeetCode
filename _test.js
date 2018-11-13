
// f is the function to test
// input is an array of tuples
//   Ex. input = [[args, expected]]
//   Where args are the arguments for function f
//    and expected is the expected return result of f
module.exports = {
  runTests: (f, inputs, useSpacing = true, spacing = '\n') => {
    let hasHadFailed = false;

    for (let i = 0; i < inputs.length; i++) {
      const args = inputs[i][0];
      const expected = inputs[i][1];
      const actual = f(...args);
      let comparison = actual === expected;
      const stringActual = JSON.stringify(actual, '', 2);
      const stringExpected = JSON.stringify(expected, '', 2);

      if (Array.isArray(expected) || (typeof expected === 'object')) {
        comparison = stringActual === stringExpected;
      }

      if ((hasHadFailed) && (comparison === false) && (i < inputs.length - 1)) {
        console.log('\n');
      }

      if (comparison === false) {
        hasHadFailed = true;
      }

      console.assert(comparison, `case #${i}: ${JSON.stringify(args.map((arg) => { return JSON.stringify(arg); }), '', 2)}, ${stringExpected} \n  Expected: \n${stringExpected}\n  Recieved: \n${stringActual}`);
    }

    if (useSpacing) {
      console.log(spacing);
    }

    return true; // signifies that all assertions were run
  },
  runTestsSingleArg: (f, inputs, useSpacing = true, spacing = '\n') => {
    let hasHadFailed = false;

    for (let i = 0; i < inputs.length; i++) {
      const arg = inputs[i][0];
      const expected = inputs[i][1];
      const actual = f(arg);
      let comparison = actual === expected;
      const stringActual = JSON.stringify(actual, '', 2);
      const stringExpected = JSON.stringify(expected, '', 2);

      if (Array.isArray(expected) || (typeof expected === 'object')) {
        comparison = stringActual === stringExpected;
      }

      if ((hasHadFailed) && (comparison === false) && (i < inputs.length - 1)) {
        console.log('\n');
      }

      if (comparison === false) {
        hasHadFailed = true;
      }

      console.assert(comparison, `case #${i}: ${JSON.stringify(arg, '', 2)}, ${stringExpected} \n  Expected: \n${stringExpected}\n  Recieved: \n${stringActual}`);
    }

    if (useSpacing) {
      console.log(spacing);
    }

    return true; // signifies that all assertions were run
  }
};
