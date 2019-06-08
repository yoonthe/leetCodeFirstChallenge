/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._cache = {}; // 一个map 用来查找
    this._usedHead = null; // 当前链表的头， 当前最常用的
    this._usedTail = null; // 当前链表的尾， 当前最常用的
    this._size = 0; // 当前size
    this.capacity = capacity;
};
/**
 * @param {number} key
 */
LRUCache.prototype.del = function(key) {
    if (key in this._cache) {
        const t= this._cache[key];
        if (t.pre !== null) {
            t.pre.next = t.next;
        }
        if (t.next !== null) {
            t.next.pre = t.pre;
        }
        if (this._usedHead === t) {
            this._usedHead = t.next;
        }
        if (this._usedTail === t) {
            this._usedTail = t.pre;
        }
        this._size -= 1;
        delete this._cache[key];
    }
}

LRUCache.prototype.unshift = function(t) {
    if (this._usedHead) {
        this._usedHead.pre = t;
    }
    t.next = this._usedHead;
    t.pre = null;
    this._usedHead = t;
    if (this._usedTail === null) {
        // 如果是空的 尾巴 = 头
        this._usedTail = t;
    }
    this._cache[t.key] = t;
    this._size += 1;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this._cache) {
        const t = this._cache[key];
        if (t.pre !== null) {
            // 删除t
            this.del(key);
            // 将t放入头
            this.unshift(t);
        }
        // 已经在头上了不用动
        // console.log('get', key, this._usedHead.key, this._usedTail.key, this._size);
        return t.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this._cache) {
        this.del(key);
    }
    if (this._size === this.capacity) {
        if(this._usedTail) {
            this.del(this._usedTail.key);
        }
    }
    const t = {
        value,
        key,
        next: this._usedHead,
        pre: null,
    };
    this.unshift(t);
    // console.log('put', key, this._usedHead.key, this._usedTail.key, this._size);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// console.log(cache.get(2));       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// console.log(cache.get(1));       // 返回 -1 (未找到)
// console.log(cache.get(3));       // 返回  3
// console.log(cache.get(4)); 

// cache.put(2, 1);
// cache.put(1, 1);
// cache.put(2, 3);
// cache.put(4, 1);
// console.log(cache.get(1));
// console.log(cache.get(2));

