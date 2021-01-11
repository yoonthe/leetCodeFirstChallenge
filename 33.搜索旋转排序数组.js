/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
if (target > nums[0]) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1] || target < nums[i]) {
      return -1;
    }
    if (target === nums[i]) {
      return i;
    }
  }
} else if (target < nums[0]) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i + 1] || target > nums[i]) {
      return -1;
    }
    if (target === nums[i]) {
      return i;
    }
  }
} else {
  return 0;
}
return -1;
};
// @lc code=end

