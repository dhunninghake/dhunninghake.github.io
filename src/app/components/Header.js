import React, { Component } from 'react';
import Radium from 'radium';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Positioning from '../lib/css/positioning';

const t = new Typography();
const { rightAlign } = t;

const w = new Whitespace();
const { pt4 } = w;

const p = new Positioning();
const { table, tableCell, fullWidth } = p;

@Radium
export default class Footer extends Component {
  render() {
    return (
      <header style={[table, fullWidth]}>
        <div style={[tableCell]}>
          <h1>Daniel Hunninghake</h1>
        </div>
        <div style={[tableCell, rightAlign]}>
          <p>&#x270c;</p>
        </div>
      </header>
    );
  }
}

