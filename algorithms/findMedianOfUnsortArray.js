/**
 * 
 * @param {Number[]} arr unsort array
 * @returns {Number} median
 */
const findMedianOfUnsortArray = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    const arrLit = [Math.min(arr[0], arr[1])], arrLar = [Math.max(arr[0], arr[1])];
    let litTopIndex = 0, litTopSndIndex = 0, larBottomIndex = 0, larBottomSndIndex = 0;
    for (let i = 2; i < arr.length; i++) {
        const num = arr[i];
        const litTop = arrLit[litTopIndex];
        const larBottom = arrLar[larBottomIndex];
        if (num <= litTop) {
            const index = arrLit.push(num) - 1;
            if (num > arrLit[litTopSndIndex]) {
                litTopSndIndex = index;
            }
        } else if (num >= larBottom) {
            const index = arrLar.push(num) - 1;
            if (num < arrLar[larBottomSndIndex]) {
                larBottomSndIndex = index;
            }
        } else {
            if (arrLit.length > arrLar.length) {
                larBottomSndIndex = larBottomIndex;
                larBottomIndex = arrLar.push(num) - 1;
            } else {
                litTopSndIndex = litTopIndex;
                litTopIndex = arrLit.push(num) - 1;
            }
        }
        if (arrLar.length > arrLit.length) {
            // 把arrLar最小的放入arrLit
            if (larBottomIndex < larBottomSndIndex) {
                larBottomSndIndex -= 1;
            }
            litTopIndex = arrLit.push(arrLar.splice(larBottomIndex, 1)[0]) - 1;
            larBottomIndex = larBottomSndIndex;
        }
        if (arrLit.length > arrLar.length + 1) {
            // 把 arrLit最大的放入 arrLar
            if (litTopIndex < litTopSndIndex) {
                litTopSndIndex -= 1;
            }
            larBottomIndex = arrLar.push(arrLit.splice(litTopIndex, 1)[0]) - 1;
            litTopIndex = litTopSndIndex;
        }
    }
    console.log(arrLit, arrLar, litTopIndex, larBottomIndex);
    if (arrLit.length > arrLar.length) {
        return arrLit[litTopIndex];
    }
    return (arrLit[litTopIndex] + arrLar[larBottomIndex]) / 2;
}

// console.log(findMedianOfUnsortArray([-4,3,1,5,31,1,-2,5]));

console.log(findMedianOfUnsortArray([-4,1,2,3,4,5,-4,-4,-4,-4,-4,-4,-4,-4,-4,31,31,31,31,31,31,31,31,31,0,-4,-4,-4,-4,-4,-4]));