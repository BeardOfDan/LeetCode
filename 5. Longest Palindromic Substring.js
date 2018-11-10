/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (string) {
  if (string.length < 1) {
    return '';
  }

  const palindromes = [];

  // start checking from each character
  for (let i = 0; i < string.length; i++) {
    // start checking from highest possible length to lowest
    for (let j = string.length; j > i; j--) {
      const str = string.slice(i, j); // potential palindrome

      let isPalindrome = true;
      for (let k = 0; k < (str.length / 2); k++) {
        if (str[k] !== str[str.length - 1 - k]) {
          isPalindrome = false;
          break;
        }
      }

      if (isPalindrome) {
        palindromes.push(str);
        break;
      }
    }
  }

  let index = 0;
  for (let i = 1; i < palindromes.length; i++) {
    if (palindromes[i].length > palindromes[index].length) {
      index = i;
    }
  }

  return palindromes[index];
};

console.log(longestPalindrome('babad')); // expecting "bab" or "aba"
console.log(longestPalindrome('cbbd')); // expecting "bb"
console.log(longestPalindrome('a')); // expecting "a"

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")); // expecting 'ranynar'
