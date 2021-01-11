/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (end < 0 || target <= nums[start]) {
    return 0;
  }
  if (target > nums[end]) {
    return end + 1;
  }
  if (target === nums[end]) {
    return end;
  }
  let mid = Math.floor((start + end) / 2);
  while(start < end - 1) {
    if (nums[mid] > target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      return mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return start + 1;
};
// @lc code=end

