import radon from '../../radon/radon';
import { radiumSelectors } from './settings';

export default class Grid {
  constructor(maxWidth=1280, columns=12) {
    this.maxWidth = maxWidth;
    this.columns = columns;
    
    let i = 1;
    while (i < this.columns) {
      this['col' + i] = {width: this.calculateWidth(i)};
      i++;
    }

    Object.keys(radiumSelectors.breakpoints).forEach(breakpoint => {
      let j = 1;
      while (j < this.columns) {
        let someObject = {};
        someObject[breakpoint] = [{width: this.calculateWidth(j)}];
        this[breakpoint + 'Col' + j] = radon(someObject);
        j++;
      }
    });
  }

  calculateWidth(columnCount) {
    return (columnCount / this.columns * 100) + '%';
  }
}

