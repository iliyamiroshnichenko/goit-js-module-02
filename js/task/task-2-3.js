function findLongestWord(string = "") {
  // Write code under this line
  const stringToArray = string.split(" ");
  let maxLength = 0;
  let longestWord = "";
    for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i].length > maxLength) {
      maxLength = stringToArray[i].length;
      longestWord = stringToArray[i];
    }
  }
    return longestWord;
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

console.log(findLongestWord("1 23 qwe qwert df adfsdfg efrfgergreghrtgyrthgt 55"));
