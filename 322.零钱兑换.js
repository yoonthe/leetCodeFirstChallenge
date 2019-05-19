/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (coins.length === 0) {
        return -1;
    }
    if (amount === 0) {
        return 0;
    }
    const res = [-1];
    // 获取最小的，直接写前面的
    const min = Math.min(...coins);
    if (amount < min) {
        return -1;
    }
    for (let i = 1; i < min; i++) {
        res[i] = -1;
    }
    res[min] = 1;
    if (amount === min) {
        return 1;
    }
    for (let i = min + 1; i <= amount; i++) {
        let m = -1;
        for (const coin of coins) {
            if (i === coin) {
                m = 1;
                break;
            }
            if (i - coin > 0 && res[i - coin] > -1) {
                if (m === -1) {
                    m = res[i - coin] + 1;
                }
                m = Math.min(m, res[i - coin] + 1);
            }
        }
        res[i] = m;
    }
    return res[amount];
};

