/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */
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
Trie.prototype._search = function (word, isNew = false, index = 0,) {
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

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// const trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   // 返回 true
// console.log(trie.search("app"));     // 返回 false
// console.log(trie.startsWith("app")); // 返回 true
// trie.insert("app");
// console.log(trie.search("app"));     // 返回 true
// console.log(trie);

