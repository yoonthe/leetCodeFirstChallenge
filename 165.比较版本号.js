/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.'), v2 = version2.split('.'), length = Math.max(version1.length, version2.length);
    for (let i = 0; i < length; i++) {
      const c1 = i < v1.length ? Number(v1[i]) : 0, c2 = i < v2.length ? Number(v2[i]) : 0;
      if (c1 > c2) {
        return 1;
      }
      if (c2 > c1) {
        return -1;
      }
    }
    return 0;
};
// @lc code=end

const logFactory = require('./utils/logFactory');

const d = logFactory(compareVersion);

d('0.1', '1.1');
d('1.0.1', '1');
d('7.5.2.4', '7.5.3');
d('1.01', '1.001');
d('1.0', '1.0.0');
