export default class Positioning {
  constructor() {
    this['relative']        = { position: 'relative' };
    this['absolute']        = { position: 'absolute' };
    this['fixed']           = { position: 'fixed', willChange: 'transform' };

    this['top0']            = { top: '0px' };
    this['left0']           = { left: '0px' };
    this['right0']          = { right: '0px' };
    this['bottom0']         = { bottom: '0px' };

    this['inline']          = { display: 'inline' };
    this['block']           = { display: 'block' };
    this['inlineBlock']     = { display: 'inline-block' };
    this['tableRow']        = { display: 'table-row' };
    this['tableCell']       = { display: 'table-cell', verticalAlign: 'middle' };
    this['table']           = { display: 'table', borderSpacing: '0px', width: '100%' };

    this['left']            = { float: 'left' };
    this['right']           = { float: 'right' };

    this['overflowAuto']    = { overflow: 'auto' };
    this['overflowHidden']  = { overflow: 'hidden' };
    this['overflowVisible'] = { overflow: 'visible' };
    this['overflowScroll']  = { overflow: 'scroll' };

    this['fullWidth']       = { width: '100%' };
    this['fullHeight']      = { height: '100%' };
    this['mxAuto']          = { marginLeft: 'auto', marginRight: 'auto' };
  }
}