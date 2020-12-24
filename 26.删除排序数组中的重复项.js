/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let current = 0;
  let step = 1;
  while(step < nums.length) {
    if (nums[step] !== nums[current]) {
      nums[++current] = nums[step++];
    } else {
      step++;
    }
  }
  return current + 1;
};
// @lc code=end

