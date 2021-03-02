/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let currentMax = nums[0];
  let curr = currentMax;
  const last = nums.length - 1;
  if (currentMax >= last) {
    return true;
  }
  for (let i = 1; i <= currentMax; i++) {
    curr = nums[i] + i;
    if (curr > currentMax) {
      if (curr >= last) {
        return true;
      }
      currentMax = curr;
    }
  }
  return false;
};
// @lc code=end

