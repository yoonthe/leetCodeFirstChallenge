/**
 * @param {string} str str need to judge
 * @return {boolean} isPalindrome
 */
module.exports = str => {
  let i = 0, j = str.length - 1;
  while(str[i] === str[j]) {
    if (i >= j) {
      return true;
    }
    i++;
    j--;
  }
  return false;
}