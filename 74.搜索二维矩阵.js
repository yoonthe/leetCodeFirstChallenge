/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length, col = matrix[0].length, len = row * col;
  let l = 0, r = len - 1;
  let i = Math.floor((l + r) / 2), m = Math.floor(i / col), n = i - m * col, val = matrix[m][n];
  while (val !== target && l < r - 1) {
    // console.log(l, r, m, n);
    if(val < target) {
      l = i;
    } else {
      r = i;
    }
    i = Math.floor((l + r) / 2);
    m = Math.floor(i / col);
    n = i - m * col;
    val = matrix[m][n];
  }
  if (l === r - 1 && val !== target) {
    m = Math.floor(r / col);
    n = r - m * col;
    return matrix[m][n] === target;
  }
  return val === target;
};
// @lc code=end

