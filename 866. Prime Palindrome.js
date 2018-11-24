/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  for (let L = 1; L <= 5; L++) {
    // Check for odd-length palindromes
    for (let root = Math.pow(10, L - 1); root < Math.pow(10, L); root++) {
      let str = root.toString();
      for (let i = L - 2; i >= 0; i--) {
        str += str[i];
      }

      const palindrome = parseInt(str);
      if (palindrome >= N && isPrime(palindrome)) {
        return palindrome;
      }
    }

    // Check for even-length palindromes
    for (let root = Math.pow(10, L - 1); root < Math.pow(10, L); root++) {
      let str = root.toString();
      for (let i = L - 1; i >= 0; i--) {
        str += str[i];
      }

      const palindrome = parseInt(str);
      if (palindrome >= N && isPrime(palindrome)) {
        return palindrome;
      }
    }
  }
};

const isPrime = (N) => {
  if (N < 2) {
    return false;
  } else if (N === 2) { // handle only even prime number
    return true;
  } else if ((N % 2) === 0) { // handle all even numbers in constant, rather than linear, time
    return false;
  }

  const limit = Math.sqrt(N);
  for (let i = 3; i <= limit; i += 2) {
    if (N % i === 0) {
      return false;
    }
  }

  return true;
};

require('./_test').runTestsSingleArg(primePalindrome, [
  [6, 7],
  [8, 11],
  [13, 101],
  [1215122, 1218121],
  [9932400, 9935399]
]);
