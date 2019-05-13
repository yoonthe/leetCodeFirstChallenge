const { colors } = require('./constant');
module.exports = class ColorCell {
  constructor() {
    this.color = colors.white;
    this.full = false;
  }
  addRed() {
    if (this.full) {
      return this;
    }
    switch (this.color) {
      case colors.white:
        this.color = colors.red;
        break;
      case colors.green:
        this.color = colors.yellow;
        break;
      case colors.blue:
        this.color = colors.purple;
        break;
      case colors.cyan:
        this.color = colors.white;
        this.full = true;
        break;
    }
    return this;
  }
  addGreen() {
    if (this.full) {
      return this;
    }
    switch (this.color) {
      case colors.white:
        this.color = colors.green;
        break;
      case colors.red:
        this.color = colors.yellow;
        break;
      case colors.blue:
        this.color = colors.cyan;
        break;
      case colors.purple:
        this.color = colors.white;
        this.full = true;
        break;
    }
    return this;
  }
  addBlue() {
    if (this.full) {
      return this;
    }
    switch (this.color) {
      case colors.white:
        this.color = colors.blue;
        break;
      case colors.red:
        this.color = colors.purple;
        break;
      case colors.green:
        this.color = colors.cyan;
        break;
      case colors.yellow:
        this.color = colors.white;
        this.full = true;
        break;
    }
    return this;
  }
  getColor() {
    return this.color;
  }
}