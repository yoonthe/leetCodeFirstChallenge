/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const res = [];
  const nums = intervals.sort((a, b) => a[0] - b[0]);
  let interval = nums[0], curr = [interval[0], interval[1]];
  for(let i = 1; i < nums.length; i++) {
    interval = nums[i];
    if (interval[1] > curr[1]) {
      if (interval[0] > curr[1]) {
        res.push(curr);
        curr = [interval[0], interval[1]];
      } else {
        curr[1] = interval[1];
      }
    }
  }
  res.push(curr);
  return res;
};
// @lc code=end

