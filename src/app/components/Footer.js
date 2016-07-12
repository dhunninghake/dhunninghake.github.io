import React, { Component } from 'react';
import Radium from 'radium';
import Whitespace from '../lib/css/whitespace';
import Colors from '../lib/css/colors';

const colors = new Colors();
const { black } = colors;

const whitespace = new Whitespace();
const { pt4 } = whitespace;

@Radium
export default class Footer extends Component {
  render() {
    return (
      <div style={[pt4]}>
        <a style={[black]} href='https://github.com/dhunninghake/dhunninghake.github.io'>Github</a>
      </div>
    );
  }
}