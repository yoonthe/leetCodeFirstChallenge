const { cellNum, directionNum, noNum } = require('./constant');

module.exports = class ColorGoal {
    /**
     * 
     * @param {String[][]} colors [direction][no]
     */
    constructor(colors) {
        this.colors = colors;
    }
    compare(colors) {
        for(let dir = 0; dir < directionNum; dir++) {
            for(let no = 0; no < noNum; no++) {
                if (this.colors[dir][no] !== colors[dir][no]) {
                    return {
                        result: false,
                        misPos: {
                            direction: dir,
                            no,
                            expected: this.colors[dir][no],
                            actual:  colors[dir][no],
                        }
                    }
                }
            }
        }
        return {
            result: true,
        };
    }
}