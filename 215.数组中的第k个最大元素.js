/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const larger = nums.slice(0, k).sort((a, b) => a - b);
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > larger[0]) {
      // 找到对应的位置插进去,
      let j = 1;
      while(nums[i] > larger[j]) {
        j += 1;
      }
      larger.shift();
      larger.splice(j - 1, 0, nums[i]);
    }
  }
  return larger[0];
};

