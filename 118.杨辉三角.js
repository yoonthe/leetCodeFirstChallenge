/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 2) {
        return ([[],[[1]]])[numRows];
    }
    const yanghui = [[1],[1,1]];
    for (let i = 2; i < numRows; i++) {
        const row = [1], pre = yanghui[i - 1];
        for (let j = 1; j < i; j++) {
            row[j] = pre[j - 1] + pre[j];
        }
        row[i] = 1; 
        yanghui[i] = row;
    }
    return yanghui;
};

