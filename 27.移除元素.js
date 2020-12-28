/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if(nums.length === 0) {
    return 0;
  }
  let current = 0;
  let last = nums.length - 1;
  while(current < last) {
    if (nums[current] === val) {
      nums[current] = nums[last--];
    } else {
      current += 1;
    }
  }
  return nums[current] !== val ? current + 1 : current;
};
// @lc code=end

