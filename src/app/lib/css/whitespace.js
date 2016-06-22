export default class Whitespace {
  constructor(unit=1) {
    let range = [0, 0.5, 1, 2, 4];

    range = range.map(number => {
      return number * unit + 'rem';
    });

    let i = 0;
    while (i < range.length) {
      this['p' + i]  = { padding: range[i] };
      this['pt' + i] = { paddingTop: range[i] };
      this['pb' + i] = { paddingBottom: range[i] };
      this['pl' + i] = { paddingLeft: range[i] };
      this['pr' + i] = { paddingRight: range[i] };

      this['m' + i]  = { margin: range[i] };
      this['mt' + i] = { marginTop: range[i] };
      this['mb' + i] = { marginBottom: range[i] };
      this['ml' + i] = { marginLeft: range[i] };
      this['mr' + i] = { marginRight: range[i] };
      i++;
    }
  }
}
