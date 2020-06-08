/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 5) {
    return ([0, 0, 0, 1, 2, 2])[n];
  }
  // 素数所在 数列 6t - 1, 6t + 1 t>=1
  let primes = 2; // 2, 3 默认的
  // t 不能 取 6NM +- (M +- N) N M >=1 & N <= M
  const t = Math.floor((n + 1) / 6), notPrimesAdd = new Set(), notPrimesMinus = new Set();
  const getNotPrimes = (N, M) => {
    const nm1 = 6 * N * M - (M + N), // nm1 * 6 - 1 是质数， nm1 * 6 + 1 是合数
      nm2 = 6 * N * M - (M - N), // nm2 * 6 - 1 是合数， nm2 * 6 + 1 是质数
      nm3 = 6 * N * M + (M - N), // nm2 * 6 - 1 是合数， nm2 * 6 + 1 是质数
      nm4 = 6 * N * M + (M + N); // nm4 * 6 - 1 是质数， nm4 * 6 + 1 是合数
    if (nm1 < t) {
      notPrimesAdd.add(nm1);
      if (nm2 < t) {
        notPrimesMinus.add(nm2);
        if (nm3 < t) {
          notPrimesMinus.add(nm3);
          if (nm4 < t) {
            notPrimesAdd.add(nm4);
          }
        }
      }
      getNotPrimes(N, M + 1);
      if (N + 1 <= M) {
        getNotPrimes(N + 1, M);
      }
    }

  }
  getNotPrimes(1, 1);
  for(let i = 1; i <t; i++) {
    if (!notPrimesAdd.has(i)) {
      primes += 1;
    }
    if (!notPrimesMinus.has(i)) {
      primes += 1;
    }
  }
  if (6 * t - 1 < n && !notPrimesMinus.has(t)) {
    primes += 1;
  }
  if (6 * t + 1 < n && !notPrimesAdd.has(t)) {
    primes += 1;
  }
  return primes;
};

// console.log(countPrimes(492954));

