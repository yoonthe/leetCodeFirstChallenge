/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // c n m
    const nums = [];
    const cal = (n, size) => {
        let res = 1;
        for (let i = 0; i < size; i++) {
            res *= n - i;
        }
        return res;
    }
    for (let i = 0; i<= rowIndex; i++) {
        nums.push(cal(rowIndex, i)/ cal(i, i));
    }
    return nums;
};

