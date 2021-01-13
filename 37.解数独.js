/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rowSpaces = [];
    // row
    for (let i = 0; i < 9; i++) {
      const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
      const spaces = [];
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          spaces.push(j);
        } else {
          set.delete(board[i][j]);
        }
      }
      spaces.forEach(j => board[i][j] = new Set(set));
      rowSpaces.push(spaces);
    }
    console.log(rowSpaces);
    const solve = (i, j) => {
      console.log(i, j);
      const val = [...board[i][j]][0];
      board[i][j] = val;
      console.log(val);
      let jIndex = 0;
      const resolves = [];
      // row
      rowSpaces[i].forEach((t, index) => {
        if (t === j) {
          jIndex = index;
        } else {
          board[i][t].delete(val);
          if (board[i][t].size === 1) {
            resolves.push([i, t]);
          }
        }
      });
      rowSpaces[i].splice(jIndex, 1);
      // column
      for (let t = 0; t < 9; t++) {
        if (t !== i && typeof board[t][j] !== 'string') {
          board[t][j].delete(val);
          if (board[t][j].size === 1) {
            resolves.push([t, j]);
          }
        }
      }
      // cube
      let cubeXStart = Math.floor(i / 3) * 3;
      let cubeYStart = Math.floor(j / 3) * 3;
      for (let ti = cubeXStart; ti < cubeXStart + 3; ti ++) {
        for (let tj = cubeYStart; tj < cubeYStart + 3; tj ++) {
          if ((ti !== i || tj !== j) && typeof board[ti][tj] !== 'string') {
            board[ti][tj].delete(val);
            if (board[ti][tj].size === 1) {
              resolves.push([ti, tj]);
            }
          }
        }
      }
      resolves.forEach(([ti, tj]) => solve(ti, tj));
    }
    for (let i = 0; i < 9; i++) {
      const spaces = rowSpaces[i];
      spaces.forEach(j => {
        // column
        for (let t = 0; t < 9; t++) {
          if (t !== i && typeof board[t][j] === 'string') {
            board[i][j].delete(board[t][j]);
          }
        }
        if (board[i][j].size === 1) {
          solve(i, j);
          return;
        }
        // cube
        let cubeXStart = Math.floor(i / 3) * 3;
        let cubeYStart = Math.floor(j / 3) * 3;
        for (let ti = cubeXStart; ti < cubeXStart + 3; ti ++) {
          for (let tj = cubeYStart; tj < cubeYStart + 3; tj ++) {
            if ((ti !== i || tj !== j) && typeof board[ti][tj] === 'string') {
              board[i][j].delete(board[ti][tj]);
            }
          }
        }
        if (board[i][j].size === 1) {
          board[i][j] = [...board[i][j]][0];
        }
      })
    }
    console.log(rowSpaces);
    // to guess
    while(rowSpaces.find(spaces => spaces.length > 0)) {
      rowSpaces
    }
};

