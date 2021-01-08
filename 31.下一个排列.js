/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length >= 2) {
    const len = nums.length;
    let i = len - 2;
    while (i >= 0) {
      if (nums[i] < nums[i + 1]) {
        break;
      }
      i--;
    }
    if (i < 0) {
      nums.reverse();
    } else {
      let j = i + 1;
      const t = nums[i];
      while(nums[j] > t && j < len) {
        j++;
      }
      nums[i] = nums[j - 1];
      nums[j - 1] = t;
      let x = i + 1;
      let y = len - 1;
      while(x < y) {
        const t = nums[x];
        nums[x] = nums[y];
        nums[y] = t;
        x++;
        y--;
      }
    }
  }
};
// @lc code=end

