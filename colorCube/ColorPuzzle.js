const ColorGoal = require('./ColorGoal');
const ColorPiece = require('./ColorPiece');
const ColorCell = require('./ColorCell');
const { cellNum, directionNum, noNum, colors } = require('./constant');

module.exports = class ColorPuzzle {
    constructor() {
        this.pieces = [];
        this.goal = null;
    }
    /**
     * 
     * @param {Number[][][]} pieces 
     */
    setPieces(pieces) {
        this.pieces = pieces.map((piece, index) => new ColorPiece(index, piece));
        return this;
    }
    /**
     * 
     * @param {String[][]} colors 
     */
    setGoal(colors) {
        this.goal = new ColorGoal(colors);
        return this;
    }
    solve() {
        if (this.goal === null) {
            throw new Error('Please set Goal first!');
        }
        return this.solveViolently();
    }
    solveViolently() {
        this.pieces.forEach(piece => {
            piece.startWalk();
        });
        for (let i = 0; i < Math.pow(4 * directionNum + 1, this.pieces.length); i++) {
            let flag = this.pieces[0].next();
            for (let i = 1; i < this.pieces.length; i ++) {
                if (flag) {
                    flag = this.pieces[i].next();
                    this.pieces[i - 1].startWalk();
                }
            }
            const { result, misPos } = this.goal.compare(this.getCurrent());
            if (result) {
                return this.pieces.map((piece, index) => Object.assign({
                    index,
                }, piece.getCurrent()));
            }
        }
        return false;
    }
    getCurrent() {
        const cells = [];
        for (let dir = 0; dir < directionNum; dir++) {
            cells[dir] = [];
            for (let no = 0; no < noNum; no++) {
                const cell = new ColorCell();
                this.pieces.forEach(piece => {
                    switch (piece.getColor(dir, no)) {
                        case colors.red:
                            cell.addRed();
                            return;
                        case colors.green:
                            cell.addGreen();
                            return;
                        case colors.blue:
                            cell.addBlue();
                            return;
                        default:
                            return;
                    }
                });
                cells[dir][no] = cell.getColor();
            }
        }
        return cells;
    }
}