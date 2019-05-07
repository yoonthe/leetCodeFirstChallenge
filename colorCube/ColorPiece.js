const { colors, directionNum } = require('./constant');
/**
 * @class ColorPiece
 */
module.exports = class ColorPiece {
    /**
     * 
     * @param {Number[][]} cells [direction, no] direction 0-5 no 0-3
     */
    constructor(id, cells) {
        this.id = id;
        this.posMap = { 0: [], 1: [], 2: [], 3: [] };
        this.cells = cells.map(cell => {
            const [direction, no] = cell;
            this.posMap[no].push(direction);
            return {
                direction,
                no,
            }
        });
        this.color = colors.white;
        this.direction = 0;
        this.walk = 0;
    }
    setColorRed() {
        this.color = colors.red;
        return this;
    }
    setColorGreen() {
        this.color = colors.green;
        return this;
    }
    setColorBlue() {
        this.color = colors.blue;
        return this;
    }
    resetColor() {
        this.color = colors.white;
        return this;
    }
    /**
     * 
     * @param {Number} direction 0 - 5
     */
    setDirection(direction) {
        this.direction = direction % 6;
        return this;
    }
    resetDirection() {
        this.direction = 0;
        return this;
    }
    startWalk() {
        this.walk = 0;
        return this.setWalk();
    }
    setWalk() {
        switch (Math.floor(this.walk / 6)) {
            case 0:
                this.resetColor();
                break;
            case 1:
                this.setColorRed();
                break;
            case 2:
                this.setColorGreen();
                break;
            case 3:
                this.setColorBlue();
                break;
        }
        this.setDirection(this.walk % 6);
        // console.log(this.id, 'walk to', this.walk, 'color:', this.color, 'direction:', this.direction );
        // return this.walk === 4 * directionNum;
        return this.walk === 4 * directionNum - 1;
    }
    next() {
        this.walk += 1;
        return this.setWalk();
    }
    getColor(direction, no) {
        return this.posMap[no].findIndex(dir => (dir + this.direction) % 6 === direction) > -1 ? this.color : ''; 
    }
    getCurrent() {
        return {
            direction: this.direction,
            color: this.color,
        };
    }
}