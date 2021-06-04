/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  console.log(JSON.stringify(res));
  const gen = (start, t) => {
    const m = (n - t) / 2;
    if (t === 0) {
      return;
    }
    if (t === 1) {
      res[m][m] = start + 1;
      // console.log(m,m,'-', start + 1);
      return;
    }
    // top
    for (i = 0; i < t; i++) {
      res[m][m + i] = start + i + 1;
      // console.log(m,m + i,'-', start + i + 1);
    }
    // right
    for (i = 1; i < t; i++) {
      res[m + i][m + t - 1] = start + t + i;
      // console.log(m + i,m + t - 1,'-', start + t + i);
    }
    // bottom
    for (i = 1; i < t; i++) {
      res[m + t - 1][m + t - 1 - i] = start + 2 * t - 1 + i;
      // console.log(m + t - 1,m + t -1 - i,'-', start + 2 * t - 1 + i);
    }
    // left
    for (i = 1; i < t - 1; i++) {
      res[m + t - 1 - i][m] = start + 3 * t - 2 + i;
      // console.log(m + t - 1 - i,m,'-', start + 3 * t - 2 + i);
    }
    gen(start + 4 * t - 4, t - 2);
  }
  gen(0, n);
  return res;
};
// @lc code=end

