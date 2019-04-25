/**
 * 
 * @param {Any[]} arr 
 * @param {Number} num 
 * @param {Function} callback
 */
const cArrNum = (arr, num, callback) => {
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
}

cArrNum([1,2,3,4,5], 3, console.log);

cArrNum([1,2,3,4,5], 2, console.log);