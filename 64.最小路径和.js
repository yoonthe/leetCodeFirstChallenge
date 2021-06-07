/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length, col = grid[0].length, res = new Array(row).fill(0).map(() => []);
  let i, j;
  res[0][0] = grid[0][0];
  for (i = 1; i < row; i++) {
    res[i][0] = grid[i][0] + res[i - 1][0];
  }
  for (i = 1; i < col; i++) {
    res[0][i] = grid[0][i] + res[0][i - 1];
  }
  for (i = 1; i < row; i++) {
    for (j = 1; j < col; j++) {
      res[i][j] = grid[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
    }
  }
  // console.log(res);
  return res[row - 1][col - 1];
};
// @lc code=end

