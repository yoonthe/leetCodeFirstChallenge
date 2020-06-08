/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function (grid) {
//   if (grid.length === 0) {
//     return 0;
//   }
//   const height = grid.length, width = grid[0].length;
//   let result = [], curr = [0]; // 当前是否处于陆地
//   while (curr.length > 0) {
//     const next = new Set();
//     for (let i = 0; i < curr.length; i++) {
//       const pos = curr[i], x = pos % height, y = (pos - x) / height, isLand = grid[x][y] === '1';
//       if (isLand) {
//         let borders;
//         const links = [];
//         result.forEach((borders, index) => {
//           if (borders.has(pos)) {
//             links.unshift(index);
//           }
//         });
//         if (links.length === 0) {
//           borders = new Set();
//           result.push(borders);
//         } else {
//           borders = result[links[links.length - 1]];
//           for (let i = 0; i < links.length - 1; i++) {
//             for(const p of result[links[i]]) {
//               borders.add(p);
//             }
//             result.splice(links[i], 1);
//           }
//         }
//         if (x + 1 < height) {
//           borders.add(pos + 1);
//         }
//         if (y + 1 < width) {
//           borders.add(pos + height);
//         }
//       }
//       if (x + 1 < height) {
//         next.add(pos + 1);
//       }
//       if (y + 1 < width) {
//         next.add(pos + height);
//       }
//     }
//     curr = Array.from(next);
//   }
//   // return result;
//   return result.length;
// };

var numIslands = function (grid) {
  if (grid.length === 0) {
    return 0;
  }
  const height = grid.length, width = grid[0].length;
  const lands = new Set();
  let result = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        lands.add(i + j * height);
      }
    }
  }
  let next = lands.values().next();
  const getPosBorders = (pos, borders) => {
    const x = pos % height, y = (pos - x) / height
    if (lands.has(pos)) {
      lands.delete(pos);
      if (x + 1 < height && lands.has(pos + 1)) {
        borders.add(pos + 1);
      }
      if (y + 1 < width && lands.has(pos + height)) {
        borders.add(pos + height);
      }
      if (x - 1 >= 0 && lands.has(pos - 1)) {
        borders.add(pos - 1);
      }
      if (y - 1 >= 0 && lands.has(pos - height)) {
        borders.add(pos - height);
      }
    }
  }
  while (!next.done) {
    result += 1;
    let isLandBorders = new Set();
    getPosBorders(next.value, isLandBorders);
    while(isLandBorders.size > 0) {
      const newBorders = new Set();
      for (const p of isLandBorders) {
        getPosBorders(p, newBorders);
      }
      isLandBorders = newBorders;
    }
    next = lands.values().next();
  }
  return result;
}

// console.log(numIslands(['1']));
// console.log(numIslands([
//   '11110',
//   '11010',
//   '11000',
//   '00000'
// ]));
// console.log(numIslands([
//   '11000',
//   '11000',
//   '00100',
//   '00011',
// ]));
// console.log(numIslands([
//   '10001',
//   '01000',
//   '00100',
//   '10011'
// ]));
// console.log(numIslands([["0","1","0"],["1","0","1"],["0","1","0"]]));
// console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]));
