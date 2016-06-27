import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import radon from '../radon/radon';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Positioning from '../lib/css/positioning';
import Grid from '../lib/css/grid';
import Colors from '../lib/css/colors';
import Button from '../lib/css/buttons';

const grid = new Grid();
const { col6, col8, col9, col10 } = grid;

const whitespace = new Whitespace();
const { p2, m0 } = whitespace;

const colors = new Colors();
const { black } = colors;

const typography = new Typography();
const { h0, center, noUnderline } = typography;

const positioning = new Positioning();
const { block } = positioning;

const button = new Button();

@Radium
export default class Banner extends Component {
  
  static propTypes = {
    status: PropTypes.string
  }

  render() {
    return (
      <div style={[col9]}>
        <h1 style={[h0, m0]}>I’m a product designer and developer hustling to bring ideas to life.</h1>
        <h4>Currently making artful interfaces at <a style={[black]} href='http://sanctuary.computer/'>Sanctuary Computer</a>. Before that, I spent four years at <a style={[black]} href='http://drip.com/'>Drip.com</a> reinventing fan clubs for musicians. It was acquired by Kickstarter in April 2016.</h4>
        <a style={[button]} href='https://twitter.com/dhunninghake'>Follow me on Twitter</a>
      </div>
    );
  }
}