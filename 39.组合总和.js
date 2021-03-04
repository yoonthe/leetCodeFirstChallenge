/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const nums = candidates.sort((a, b) => a - b);
  const res = [], out = [];
  let next, len = nums.length;
  const dfs = (t, s) => {
    for (let i = s; i < len; ++i) {
      out.push(nums[i]);
      next = t - nums[i];
      if (next > 0) {
        dfs(next, i);
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

