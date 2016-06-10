import React, { Component } from 'react';
import Radium from 'radium';
import styles from '../lib/globalStyles';

const { t, p, w } = styles;

@Radium
export default class Home extends Component {
  render() {
    return (
      <div style={[t.center, w.mt6, w.pt6]}>
        <h1>Daniel Hunninghake</h1>
        <h4>I’m a designer/developer hustling to bring ideas to life.<br />Currently making artful interfaces at <a href='http://sanctuary.computer/'>Sanctuary Computer</a>.</h4>
      </div>
    );
  }
}
