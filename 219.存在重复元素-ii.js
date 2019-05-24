/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = [];
    for(let i = 0; i < nums.length; i++) {
        if (typeof set[nums[i]] === 'number' && i - set[nums[i]] <= k) {
            return true;
        } 
        set[nums[i]] = i;
    }
    return false;
};

