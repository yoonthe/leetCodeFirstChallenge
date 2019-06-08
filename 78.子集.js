/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const cArrNum = (arr, num, callback) => {
        if (num === 0) {
            callback();
            return;
        }
        if (num === 1) {
            arr.forEach(v => callback(v));
            return;
        }
        if (arr.length === num) {
            return callback(...arr);
        }
        const minArr = arr.slice(1);
        // 包含 arr[0] 
        cArrNum(minArr, num - 1, (...args) => callback(arr[0], ...args));
        // 不包含 arr[0]
        cArrNum(minArr, num, callback);
    };
    const result = [];
    for(let i = 0; i <= nums.length; i++) {
        cArrNum(nums, i, (...args) => result.push(args));
    }
    return result;
};

// console.log(subsets([1,2,3]));
