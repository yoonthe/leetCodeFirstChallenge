/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */
/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    /**
  * Initialize your data structure here.
  */
    var Trie = function () {
        this.isStr = false;
        this.next = {};
    };

    /**
     * @param {string} word
     * @param {boolean} isNew = false
     * @param {number} index = 0
     * @returns {Trie} result
     */
    Trie.prototype._search = function (word, isNew = false, index = 0, ) {
        if (index === word.length) {
            return this;
        }
        const char = word[index];
        if (typeof this.next[char] === 'undefined') {
            if (isNew) {
                this.next[char] = new Trie();
            } else {
                return false;
            }
        }
        return this.next[char]._search(word, isNew, index + 1);
    };

    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    Trie.prototype.insert = function (word) {
        const top = this._search(word, true);
        top.isStr = true;
    };

    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    Trie.prototype.search = function (word) {
        const top = this._search(word);
        return top && top.isStr;
    };

    /**
     * Returns if there is any word in the trie that starts with the given prefix. 
     * @param {string} prefix
     * @return {boolean}
     */
    Trie.prototype.startsWith = function (prefix) {
        const top = this._search(prefix);
        return !(top === false);
    };
    Trie.prototype.goNext = function (prefix) {
        return this._search(prefix);
    };
    const root = new Trie();
    words.forEach(word => root.insert(word));
    const res = new Set();
    /**
     * 
     * @param {Set<string>} path 
     * @param {number} i 
     * @param {number} j 
     * @returns {boolean}
     */
    const pathHas = (path, i, j) => path.has(`${i}-${j}`);
    /**
     * 
     * @param {Set<string>} path 
     * @param {number} i 
     * @param {number} j 
     * @returns {Set<string>}
     */
    const mergePath = (path, i, j) => new Set(path).add(`${i}-${j}`);
    /**
     * 
     * @param {number} i 
     * @param {number} j 
     * @param {Trie} trie 
     * @param {Set<string>} path
     * @param {string} string
     */
    const goNext = (i, j, trie, path, string) => {
        const char = board[i][j];
        const nextTrie = trie.goNext(char);
        if (nextTrie) {
            const nextStr = string + char;
            const nextPath = mergePath(path, i, j);
            if (nextTrie.isStr) {
                res.add(nextStr);
            }
            // 判断 i j 的 四个方向
            // 上
            if (i > 0 && !pathHas(path, i - 1, j)) {
                goNext(i - 1, j, nextTrie, nextPath, nextStr);
            }
            // 下
            if (i < board.length - 1 && !pathHas(path, i + 1, j)) {
                goNext(i + 1, j, nextTrie, nextPath, nextStr);
            }
            // 左
            if (j > 0 && !pathHas(path, i, j - 1)) {
                goNext(i, j - 1, nextTrie, nextPath, nextStr);
            }
            // 右
            if (j < board[i].length - 1 && !pathHas(path, i, j + 1)) {
                goNext(i, j + 1, nextTrie, nextPath, nextStr);
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        const line = board[i];
        for (let j = 0; j < line.length; j++) {
            goNext(i, j, root, new Set(), '');
        }
    }
    return Array.from(res);
    // return Array.from(res).sort();
};

// findWords(
//     [
//         ['o', 'a', 'a', 'n'],
//         ['e', 't', 'a', 'e'],
//         ['i', 'h', 'k', 'r'],
//         ['i', 'f', 'l', 'v']
//     ],
//     ["oath","pea","eat","rain"]
// )
