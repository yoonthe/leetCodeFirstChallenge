/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 8 2 7 1 3 4 nlogn
    // n 0 0 4 4 
    if (prices.length === 0) {
        return 0;
    }
    const mins = [prices[0]];
    const results = [0];
    for (let i = 1; i < prices.length; i++) {
        results[i] = Math.max(results[i - 1], prices[i] - mins[i - 1]);
        mins[i] = Math.min(mins[i - 1], prices[i]);
    }
    return results[prices.length - 1];
}
