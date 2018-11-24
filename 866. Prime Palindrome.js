// /**
//  * @param {number} N
//  * @return {number}
//  */
// var primePalindrome = function (N) {
//   const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

//   let index = 0; // index of first prime not less than N

//   if (primes[primes.length - 1] < N) {
//     index = primes.length - 1; // skip to end of the primes array

//     // find more primes until at least of size N
//     while (primes[primes.length - 1] < N) {
//       getAnotherPrime(primes);
//       index++;
//     }
//   }

//   if (index === 0) { // if index was not previously updated
//     for (let i = 0; i < primes.length; i++) {
//       if (primes[index] < N) {
//         index++;
//         continue;
//       }
//       break;
//     }
//   }

//   // test if is palindrome
//   for (; index < primes.length; index++) {
//     if (numIsPalindrome(primes[index])) {
//       return primes[index];
//     }
//   }

//   // while no palindrome primes, not less than N, find another prime
//   while (true) {
//     const prime = getAnotherPrime(primes);
//     if (numIsPalindrome(prime)) {
//       return prime;
//     }
//   }
// };

// // mutates the primes array
// const getAnotherPrime = (primes) => {
//   let index = primes[primes.length - 1] + 2; // check the next odd number

//   while (true) {
//     let isPrime = true;
//     const root = Math.sqrt(index) + 1; // plus 1 to remove [or equal] comparison
//     for (let i = 0; primes[i] < root; i++) {
//       if ((index % primes[i]) === 0) {
//         isPrime = false;
//         index += 2; // check the next odd number
//         break;
//       }
//     }

//     if (isPrime) {
//       primes.push(index); // returns the new prime
//       return index;
//     }
//   }
// };

// const numIsPalindrome = (num) => {
//   const str = num.toString();

//   for (let i = 0; i < (str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// };

// require('./_test').runTestsSingleArg(primePalindrome, [
//   [6, 7],
//   [8, 11],
//   [13, 101],
//   [1215122, 1218121],
//   [9932400, 9935399]
// ]);

// console.log(primePalindrome(9932400));








/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  for (let L = 1; L <= 5; ++L) {
    //Check for odd-length palindromes
    for (let root = Math.pow(10, L - 1); root < Math.pow(10, L); ++root) {
      let sb = root.toString();
      for (k = L - 2; k >= 0; --k)
        sb += sb[k];
      x = parseInt(sb.toString());
      if (x >= N && isPrime(x))
        return x;
      //If we didn't check for even-length palindromes:
      //return N <= 11 ? min(x, 11) : x
    }

    //Check for even-length palindromes
    for (let root = Math.pow(10, L - 1); root < Math.pow(10, L); ++root) {
      sb = root.toString();
      for (k = L - 1; k >= 0; --k)
        sb += sb[k];
      x = parseInt(sb);
      if (x >= N && isPrime(x))
        return x;
    }
  }

  return null; // error case
};

const isPrime = (N) => {
  if (N < 2) {
    return false;
  }

  const limit = Math.sqrt(N);
  for (let i = 2; i <= limit; ++i) {
    if (N % i == 0) {
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
