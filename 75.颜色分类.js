/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let rr = 0,wr = 0, curr;
  if (nums.length < 2) {
    return;
  } 
  for (let i = 0; i < nums.length; i++) {
    curr = nums[i];
    if (curr === 0) {
      // red
      curr = nums[rr];
      nums[rr] = 0;
      rr++;
      nums[i] = curr;
    }
    if (curr === 1) {
      // white
      curr = nums[wr];
      nums[wr] = 1;
      wr++;
      nums[i] = curr;
    }
    if (wr < rr) {
      wr = rr;
    }
  }
};
// @lc code=end

