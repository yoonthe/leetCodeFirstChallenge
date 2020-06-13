/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s === '' || numRows === 1) {
    return s;
  }
  const repeatSize = 2 * numRows - 2;
  const res = new Array(numRows).fill('');
  for (let i = 0; i < s.length; i += repeatSize) {
    for (let j = 0; j < numRows; j++) {
      if (i + j === s.length) {
        return res.join('');
      }
      res[j] += s[i + j];
    }
    for (let j = numRows; j < repeatSize; j++) {
      if (i + j === s.length) {
        return res.join('');
      }
      res[repeatSize - j] += s[i + j];
    }
  }
  return res.join('');
};
// @lc code=end

