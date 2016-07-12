import React, { Component } from 'react';
import Radium from 'radium';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Positioning from '../lib/css/positioning';
import Colors from '../lib/css/colors';
import Icon from 'react-moodycons';
import v from '../h/v';

const t = new Typography();
const { h0, rightAlign } = t;

const c = new Colors();
const { red, fuschia, green, yellow } = c;

const w = new Whitespace();
const { pt4, m0 } = w;

const p = new Positioning();
const { table, tableCell, fullWidth } = p;

const headline = v({
  'base':    [fuschia],
  ':hover':  [red],
  ':active': [green],
});

@Radium
export default class Footer extends Component {
  render() {
    return (
      <header style={[table, fullWidth]}>
        <div style={[tableCell]}>
          <h1 className={headline} style={[m0]}>Daniel Hunninghake</h1>
          <h5 style={[m0]}>Product designer / developer</h5>
        </div>
        <div style={[tableCell, rightAlign]}>
          <Icon name='grinning' />
        </div>
      </header>
    );
  }
}

