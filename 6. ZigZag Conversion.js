/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  let index = 0;
  const limit = Math.ceil(s.length / numRows);
  for (let z = 0; z < limit; z++) {
    // while (index < s.length) {
    // vertical lines
    for (let i = 0; i < numRows; i++) {
      const rowNum = i;
      //       const rowNum = ((numRows - 1) * z + i);
      //       const colNum = (numRows * z) - z;
      const colNum = (numRows - 1) * z;
      rows[rowNum][colNum] = s[index];
      index++;
    }
    // diagonal lines
    for (let i = 0; i < (numRows - 2); i++) {
      const rowNum = numRows - 2 - i;
      const colNum = ((numRows - 1) * z) + i + 1;
      rows[rowNum][colNum] = s[index];
      index++;
    }

    if (true) {
      const unusedVar = 'need a breakpoint here';
    }
  }

  let result = [];
  for (let i = 0; i < numRows; i++) {
    result = result.concat(rows[i]);
  }

  return result.join('');
  // return rows.flat().join(''); // experimental feature "flat()" is not yet supported
};

// console.log(convert("PAYPALISHIRING", 3)); // expecting 'PAHNAPLSIIGYIR'
// console.log(convert("PAYPALISHIRING", 4)); // expecting 'PINALSIGYAHRPI'
// console.log(convert("AB", 1)); // expecting 'AB'

console.assert(convert("PAYPALISHIRING", 3) === 'PAHNAPLSIIGYIR', 'was expecting \'PAHNAPLSIIGYIR\'');
console.assert(convert("PAYPALISHIRING", 4) === 'PINALSIGYAHRPI', 'was expecting \'PINALSIGYAHRPI\'');
console.assert(convert("AB", 1) === 'AB', 'was expecting\'AB\'');

// // exceeds memory
// console.assert(convert("orfefwofihmozumjkgeilldtosfnorocltisrxxbelrdhdormtaxeftuxyhosxsdtbxkyuoehfkolyfxthwympskqcaibsnutkhtevylciznigkcohccywooaoychlycvfwbcuofepuowfqmouoordfttdvapudkbzmgvclzsfpomiaccqtvvyppdmrsiufkvtqqvdrnkjbzrddtwwrtwiiaucsdwzpushmomgdyphxgmdbibucycmyxoscnutjmcvcqdgoupocbremuaqsdcsctneihzrvboyrsghmvvpyovkjvadadwcylggshzninnbhvjusglrvibgdejgjfihqrpkyoajdpkllvhfeswzaahfeqlnyuwqnlblbdwesjpdewjiohjqjqynjlchhyxulagmdcrwlgbsfmcvwomfgmtpxxyfywzjyhycmpyxxbrcowakkmpqakixkgciectdjrhvghvgiokykkkuycnymvwydagicanorwladiilxsmhfwedytenocltcsdfusvnognrrvfoqrxvpdyowedmgoijilqeelsstfmkdtatkaobforctuqbjyktmayqnqkhxytarwvdyjfdawhvrywcyhxkjvcxnpglnbnfxjkxspbuoiphimjhvgteewbrnhcajqhibugtjjqzrfgctploygteewvrgaupsbztxhohqegkmpmfezuefpiklgbrgviazktwrjfiooucdihjhdqosayegcxozgoaqjzjtgtjunlzvuleydvqdtwkxuazcpzuaafthzedorfmmqqktlcyhbigvjfzahvahawozcsouxaipsukgwipztvuebvgiqgpregqhagdzilobfajdiyddtzhwvpgnwyecexlgfofozvrgvamfarlvsuspkydiyjkegwkokpcmkvuhvipvzaquwkjglmojyzogxyuhqwvctsmoadlcfewbqfibuwnuxdaudvevtbyntmdup", 620) === '', 'Don\'t have expected answer yet...');

// // exceeds time
// console.assert(convert("txkrsdyronxiisbacxkdczwdlevfughpftgxzhpnuoxegagixsnbujffpcmkivbpoimnrddnrcuzdakatxcnjjsangmxbomryahpekexmyzrzjsuiwjrfduujgrkuddsfkjjwqjjoiaptulbquvxxprgvksqnwktiwefmpqczsusnfufarfxgygbjatywgthcamqpcsrumjjufpuwwteubifcbeajzhnzvdrxyismtdgbscxqyclzksdnwgzypmxlsqisaceuglvapurnyepkwuavaztqnsbhjlzjoefurcwgznwxtliqfklileyywbihmhtanywebvnakjzewjudthlenlflontbumdimcopxbrhmrlkahqwqdafphrfumgrakzmmpclttshmgsnpilgllncteipqqgschfoxjbqcuzrcrerbrzpcnrxtbpmsveudjlcsmuxitoknueonfdpsxpmaeyubepgociiqehbyxlltrbgxfypepdevdzwiqdyungksqlqnzdjqepnlpfrekwzoxwynbwjqetiuhakidtykkoxavpefngvketzfpivudgqkgasmvtygjxiemmjzuhlyakfsudoyjekrhffcydkjbsnphyrdfcciphajkojvsunbzsezyqiblvquvjxbobjdjjovzyrruettyzswraxexqyszyvnzgsirjeqjxkdbfwzeqyxqxcpnchpafcclxkdgqtpndsqkqsqgqoynsnduwsxbwznvlsbensttmkdceukuiijaxowugtxfukageeksydllpontiansizuinrcwmbdhofnslzkkcvvsmknukdpvcjdrchppiuyyalrlmbxqzsilfyhpbwmdgrwiaozjixhikawwctndoxotvvkwsxbaoyipmiaufjfqmdooybtmzhfwestwpuwfuhwi", 926) === '', 'Don\'t have expected answer yet...');
