/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length, col = obstacleGrid[0].length, res = new Array(row).fill(0).map(() => []);
  let i, j;
  res[0][0] = obstacleGrid[0][0] ? 0 : 1;
  for (i = 1; i < row; i++) {
    res[i][0] = obstacleGrid[i][0] ? 0 : res[i - 1][0];
  }
  for (i = 1; i < col; i++) {
    res[0][i] = obstacleGrid[0][i] ? 0 : res[0][i - 1];
  }
  for (i = 1; i < row; i++) {
    for (j = 1; j < col; j++) {
      res[i][j] = obstacleGrid[i][j] ? 0 : res[i - 1][j] + res[i][j - 1];
    }
  }
  // console.log(res);
  return res[row - 1][col - 1];
};
// @lc code=end

