const findPrime = (maxSize) => {
    // 素数所在 数列 6n - 1, 6n + 1 n>=1
    const primes = [2, 3]; // 2, 3 默认的
    // n 不能 取 6NM +- (M +- N) N M >=1 & N <= M
    let n = 1, N = 1, M = 1;
    const nm1 = 6 * N * M  - (M + N),
        nm2 = 6 * N * M  - (M - N),
        nm3 = 6 * N * M  + (M - N),
        nm4 = 6 * N * M  + (M + N);
    while (6 * n + 1 <= maxSize) {
        if (n > nm4) {
            // 
        }
    }
}