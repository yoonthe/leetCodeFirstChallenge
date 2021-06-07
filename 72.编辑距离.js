/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const l1 = word1.length, l2 = word2.length;
  if (l1 === 0 || l2 === 0) {
    return l1 + l2;
  }
  const arr = [word1[0] === word2[0] ? 0 : 1];
  let i, j;
  for (j = 1; j < l2; j++) {
    arr.push(Math.min(
      arr[j - 1] + 1, // insert
      j + (word1[0] === word2[j] ? 0 : 1))); // replace
  }
  const res = [arr];
  for (i = 1; i < l1; i++) {
    res.push([Math.min(
      res[i - 1][0] + 1, // delete
      i + (word1[i] === word2[0] ? 0 : 1))]); // replace
  }
  for (i = 1; i < l1; i++) {
    for (j = 1; j < l2; j++) {
      res[i][j] = Math.min(
        res[i][j - 1] + 1, // insert
        res[i - 1][j] + 1, // delete
        res[i - 1][j - 1] + (word1[i] === word2[j] ? 0 : 1)); // replace
    }
  }
  return res[l1 - 1][l2 - 1];
};
// @lc code=end

