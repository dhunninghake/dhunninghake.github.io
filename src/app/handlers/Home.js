import React, { Component } from 'react';
import Radium from 'radium';
import otherside from '../otherside/otherside';

import { center, rightAlign, h0 } from '../lib/css/typography';

import { table, tableCell } from '../lib/css/positioning';

import { mxAuto, pt4, m0 } from '../lib/css/whitespace';

import { fullWidth, col9 } from '../lib/css/grid';

const container = otherside({
  small:  [{width: '95%'}, mxAuto],
  medium: [{width: '90%'}],
  large:  [{width: '80%'}]
});

@Radium
export default class Home extends Component {
  render() {
    return (
      <div style={[container]}>
        <header style={[table, fullWidth]}>
          <div style={[tableCell]}>
            <h1>Daniel Hunninghake</h1>
          </div>
          <div style={[tableCell, rightAlign]}>
            <p>&#x270c;</p>
          </div>
        </header>
        <div style={[col9]}>
          <h1 style={[h0, m0]}>I’m a product designer and developer hustling to bring ideas to life.</h1>
          <h4>Currently making artful interfaces at <a href='http://sanctuary.computer/'>Sanctuary Computer</a>. Before that, I spent four years at <a href='http://drip.com/'>Drip.com</a> reinventing fan clubs for musicians. It was acquired by Kickstarter in April 2016.</h4>
        </div>
      </div>
    );
  }
}
