import { colors } from './settings';

export default class Colors {
  constructor() {
    Object.keys(colors).forEach(color => {
      this[color] = { color: colors[color] };
      this['bg'+ this.capitalizeFirstLetter(color)] = { backgroundColor: colors[color] }
      this['border'+ this.capitalizeFirstLetter(color)] = { borderColor: colors[color] }
    })
  }

  capitalizeFirstLetter(color) {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }
}