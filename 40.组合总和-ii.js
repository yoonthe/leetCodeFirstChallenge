/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const nums = candidates.sort((a, b) => a - b);
  const res = [], out = [], len = nums.length;
  let next, num;
  const dfs = (t, s) => {
    for (let i = s; i < len; ++i) {
      num = nums[i];
      if (i > s && num == nums[i - 1]) {
        continue;
      }
      out.push(num);
      next = t - num;
      if (next > 0) {
        dfs(next, i + 1);
        out.pop();
      } else {
        if (next === 0) {
          res.push([...out]);
        }
        out.pop();
        return;
      }
    }
  } 
  dfs(target, 0);
  return res;
};
// @lc code=end

