export default class Typography {
  constructor(webfonts=[], unit=1) {
    const scale = ['4', '2', '1.5', '1.25', '1', '0.875', '0.75'];

    const newScale = scale.map(value => {
      return value * unit + 'rem';
    });

    let i = 0;
    while (i < newScale.length) {
      this['h'+i] = { fontSize: newScale[i] };
      i++;
    }

    webfonts.forEach(font => {
      this[font] = { fontFamily: "'" + font + "', 'Helvetica Neue', Helvetica, sans-serif" }
    });

    this['center']      = { textAlign: 'center' };
    this['leftAlign']   = { textAlign: 'left' };
    this['rightAlign']  = { textAlign: 'right' };

    this['alignTop']    = { verticalAlign: 'top' };
    this['alignMiddle'] = { verticalAlign: 'middle' };
    this['alignBottom'] = { verticalAlign: 'bottom' };

    this['italic']      = { fontStyle: 'italic' };
    this['caps']        = { textTransform: 'uppercase' };
    this['justify']     = { textAlign: 'justify' };
    this['noWrap']      = { whiteSpace: 'nowrap' };
    this['underline']   = { textDecoration: 'underline' };
    this['noUnderline'] = { textDecoration: 'none' };
    this['trackedOut']  = { letterSpacing: '0.1em' };
    this['listReset']   = { listStyle: 'none', paddingLeft: '0px' };
  }
}