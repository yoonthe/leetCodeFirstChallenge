/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [], curr = [];
  let i = 0, j = 0;
  while (i > -1) {
    if (i === k) {
      res.push([].concat(curr));
      j = curr.pop();
      i--;
    }
    if (j < n) {
      curr.push(++j);
      i++;
    } else {
      j = curr.pop();
      i--;
    }
  }
  return res;
};
// @lc code=end

