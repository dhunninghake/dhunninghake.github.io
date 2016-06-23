import { colors } from './settings';

export default class Colors {
  constructor() {
    Object.keys(colors).forEach(color => {
      this[color] = { color: colors[color] };
      this['bg'+ this.capFirstLetter(color)] = { backgroundColor: colors[color] }
      this['border'+ this.capFirstLetter(color)] = { borderColor: colors[color] }
    })
  }

  capFirstLetter(color) {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }
}