const ColorCell = require('./ColorCell');
const { colors } = require('./constant');
const assert = require('assert');

assert(new ColorCell().addRed().addGreen().getColor() === colors.yellow, 'yellow check');
assert(new ColorCell().addRed().addBlue().getColor() === colors.purple, 'purple check');
assert(new ColorCell().addGreen().addBlue().getColor() === colors.cyan, 'cyan check');
assert(new ColorCell().addRed().addGreen().addBlue().getColor() === colors.white, 'white check');
assert(new ColorCell().addGreen().addRed().getColor() === colors.yellow, 'yellow check');
assert(new ColorCell().addBlue().addGreen().getColor() === colors.cyan, 'cyan check');
console.log('test over!',new ColorCell().addRed().addGreen().addBlue().getColor());