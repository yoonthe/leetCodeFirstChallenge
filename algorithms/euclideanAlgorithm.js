// a >= 1, b >= 1
const euclidean = (a,b) => {
    let large = Math.max(a), small = Math.min(b);
    while (small > 1) {
        const t = large % small;
        if (t === 0) {
            return small;
        }
        large = small;
        small = t;
    }
    return small;
}

// console.log(euclidean(2,3));
// console.log(euclidean(2,4));
// console.log(euclidean(6,4));
// console.log(euclidean(11,17));
// console.log(euclidean(23,33));
// console.log(euclidean(1997,615));
// console.log(euclidean(481,221));