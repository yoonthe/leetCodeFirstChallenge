/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    const robs = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        robs[i] = Math.max(robs[i - 2] + nums[i], robs[i - 1]);
    }
    return robs[nums.length - 1];
};

