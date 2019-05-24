/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const set = [];
    const keys = new Set();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        for (const key of keys) {
            if (Math.abs(key - num) <= t &&i - set[key] <= k) {
                return true;
            }
        }
        keys.add(num);
        set[num] = i;
    }
    return false;
};

