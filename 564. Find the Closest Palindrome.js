/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  if (n === '1') {
    return '0';
  }

  const a = mirroring(n);
  let diff1 = Number.MAX_SAFE_INTEGER;

  diff1 = Math.abs(parseInt(n) - parseInt(a));

  if (diff1 === 0) {
    diff1 = Number.MAX_SAFE_INTEGER;
  }

  let s = n;
  let i = ~~((s.length - 1) / 2);

  while (i >= 0 && s[i] === '0') {
    s = spliceStr(s, i, 1, '9');
    i--;
  }

  if ((i === 0) && (s[i] === '1')) {
    s = spliceStr(s, 0, 1); // delete first char
    const mid = ~~((s.length - 1) / 2);
    s = spliceStr(s, mid, 1, '9');
  } else {
    s = spliceStr(s, i, 1, (parseInt(s[i]) - 1).toString());
  }

  const b = mirroring(s.toString());
  const diff2 = Math.abs(parseInt(n) - parseInt(b));

  s = n;
  i = ~~((s.length - 1) / 2);
  while ((i >= 0) && (s[i] === '9')) {
    s = spliceStr(s, i, 1, '0');
    i--;
  }

  if (i < 0) {
    s = spliceStr(s, 0, 0, '1');
  } else {
    s = spliceStr(s, i, 1, (parseInt(s[i]) + 1).toString());
  }

  const c = mirroring(s.toString());
  const diff3 = Math.abs(parseInt(n) - parseInt(c));

  if ((diff2 <= diff1) && (diff2 <= diff3)) {
    return b;
  } else if ((diff1 <= diff3) && (diff1 <= diff2)) {
    return a;
  } else {
    return c;
  }
};

const mirroring = (str) => {
  const result = str.slice(0, ~~(str.length / 2));
  const midDigit = ((str.length % 2) === 1) ? str[~~(str.length / 2)] : '';

  return result + midDigit + result.split('').reverse().join('');
};

const spliceStr = (str, start, len, replace = '') => {
  str = str.split('');
  str.splice(start, len, replace);
  str = str.join('');

  return str;
};

require('./_test').runTestsSingleArg(nearestPalindromic, [
  ['123', '121'],
  ['1', '0'],
  ['2', '1'],
  ['12', '11'],
  ['99', '101'],
  ['100', '99'],
  ['1000', '999'],
  ['807045053224792883', '807045053350540708']
]);
