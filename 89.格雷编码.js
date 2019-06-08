/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // n = 3
    // 0, 1, 3, 2, 6, 7, 5, 4
    // 0, 2, 3, 1, 5, 7, 6, 4
    // 0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8
    // 0000 0001 0011 0010 0110 0111 0101 0100 1100 1101 1111 1110 1010 1011 1001 1000
    let result = [0], t = 0;
    while(n > t) {
        // t + 1
        t += 1;
        const over = Math.pow(2, t - 1);
        for(let i = 0; i < over; i++) {
            result.push(over + result[over - 1 - i]);
        }
    }
    return result;
};

