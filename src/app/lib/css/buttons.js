import radon from '../../radon/radon';
import { colors } from './settings';

export default class Button {
  constructor(color='black', size='medium') {
    this['fontFamily']      = 'inherit';
    this['fontSize']        = 'inherit';
    this['textDecoration']  = 'none';
    this['cursor']          = 'pointer';
    this['display']         = 'inline-block';
    this['borderRadius']    = '999rem';
    this['verticalAlign']   = 'middle';
    this['appearance']      = 'none';
    this['height']          = 'auto';
    this['backgroundColor'] = colors[color];
    this['color']           = colors['white'];
    this['margin']          = 0;
    this['border']          = 0;
    this['opacity']         = 1;
    this['padding']         = this.handleSizing(size).padding;
    this['lineHeight']      = this.handleSizing(size).lineHeight;
    this['transition']      = 'all .15s ease';  
    this[':hover']          = { opacity: '.75' };
    this[':focus']          = { boxShadow: '0 0 0 3px rgba(0,0,0,.3)', outline: 'none' };
  }

  handleSizing(size) {
    switch (size) {
      case 'large':
        return {
          padding: '1.5rem',
          lineHeight: '1.5rem'
        }
        break;
      case 'small':
        return {
          padding: '.75rem',
          lineHeight: '.75rem'
        }
        break;
      default:
        return {
          padding: '1rem',
          lineHeight: '1rem'
        }
        break;
    }
  }
}