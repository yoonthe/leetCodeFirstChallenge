/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0], t = res;
  for (let i = 1; i < nums.length; i++) {
    t = Math.max(t + nums[i], nums[i]);
    res = Math.max(t, res);
  }
  return res;
};
// @lc code=end

