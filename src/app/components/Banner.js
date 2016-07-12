import React, { Component, PropTypes } from 'react';
import radon from '../radon/radon';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Positioning from '../lib/css/positioning';
import Grid from '../lib/css/grid';
import Colors from '../lib/css/colors';
import v from '../h/v';

const grid = new Grid();
const { col6, col8, col9, col10 } = grid;

const whitespace = new Whitespace();
const { p2, m0, pt4, pb4 } = whitespace;

const colors = new Colors();
const { black } = colors;

const typography = new Typography();
const { h0, center, leftAlign, rightAlign, noUnderline } = typography;

const positioning = new Positioning();
const { block } = positioning;

const headline = v({
  'base': [h0, m0, pt4, pb4, center]
});

export default class Banner extends Component {
  render() {
    return (
      <div>
        <h1 className={headline}>
          Focused on building tools<br />for a faster, more accessible web.<br />Bust a move, and create!
        </h1>
      </div>
    );
  }
}