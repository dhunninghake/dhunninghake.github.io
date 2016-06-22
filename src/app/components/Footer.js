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
        Currently working on <a style={[black]} href='https://github.com/sanctuarycomputer/radon'>Radon</a>, an open source way to use responsive atomic styles with React.<br />
        This site is an experiment with it, check out the code <a style={[black]} href='https://github.com/dhunninghake/dhunninghake.github.io'>here</a>.
      </div>
    );
  }
}