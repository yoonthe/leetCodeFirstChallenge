/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = {};
    for (const num of nums) {
        if (set[num]) {
            return true;
        }
        set[num] = true;
    }
    return false;
};

