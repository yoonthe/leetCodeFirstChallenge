/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const spiral = function(i) {
    const height = matrix.length - i * 2;
    if (height <= 0) {
      return [];
    }
    const width = matrix[0].length - i * 2;
    if (width <= 0) {
      return [];
    }
    if (height === 1) {
      return matrix[i].slice(i, i + width);
    }
    const line = matrix.slice(i + 1, i + height - 1);
    // 上
    return matrix[i].slice(i, i + width)
    .concat(
      // 右去除上下端点
      line.map(m => m[i + width - 1]),
      matrix[i + height - 1].slice(i, i + width).reverse(),
      width > 1 ? line.map(m => m[i]).reverse() : [],
      spiral(i + 1)
      );
  }
  return spiral(0);
};
// @lc code=end

