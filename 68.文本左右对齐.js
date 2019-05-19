/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const blankMap = {}, res = [];
    let blank = '', current = [],blankWidth = maxWidth;
    for(let i = 0; i < maxWidth; i++) {
        blankMap[i] = blank;
        blank += ' ';
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // 单词 加上 每个前面的单词至少一个空格
        if (word.length + current.length > blankWidth) {
            // 换行
            if (current.length === 1) {
                res.push(current[0] + blankMap[blankWidth]);
            } else {
                const blankNum = current.length - 1;
                const additionNum = blankWidth % blankNum;
                const eachBlankWidth = (blankWidth - additionNum) / blankNum;
                // console.log(blankNum, additionNum, blankNum, eachBlankWidth);
                let line = '';
                for (let j = 0; j < current.length; j++) {
                    line += current[j];
                    if (j < additionNum) {
                        line += blankMap[eachBlankWidth + 1];
                    } else if (j < current.length - 1) {
                        line += blankMap[eachBlankWidth];
                    }
                }
                res.push(line);
            }
            current = [];
            blankWidth = maxWidth;
        }
        current.push(word);
        blankWidth -= word.length;
    }
    if (current.length > 0) {
        let line = '';
        for(let j = 0; j < current.length; j++) {
            line += current[j];
            if (blankWidth > 0) {
                line += blankMap[1];
                blankWidth -= 1;
            }
        }
        // 添加剩余空格
        line += blankMap[blankWidth];
        res.push(line);
    }
    return res;
};

