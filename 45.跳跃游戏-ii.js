/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length < 2) {
    return 0;
  }
  const res = new Array(nums.length).fill(nums.length);
  res[0] = 0;
  const last = nums.length - 1;
  let i, j, currentMax = nums[0], curr = currentMax;
  if (currentMax >= last) {
    return 1;
  }
  for (j = 1; j <= currentMax; j++) {
    res[j] = 1;
  }
  for(i = 1; i < nums.length - 1; i++) {
    curr = nums[i] + i;
    if (curr > currentMax) {
      if (curr >= last) {
        return res[i] + 1;
      }
      for (j = currentMax + 1; j <= curr; j++) {
        res[j] = res[i] + 1;
      }
      currentMax = curr;
    }
  }
  return res[nums.length - 1];
};
// @lc code=end

