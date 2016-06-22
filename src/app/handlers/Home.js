import React, { Component } from 'react';
import Radium from 'radium';
import radon from '../radon/radon';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Positioning from '../lib/css/positioning';
import Grid from '../lib/css/grid';

const typography = new Typography();
const { center, rightAlign } = typography;

const whitespace = new Whitespace();
const { pt4 } = whitespace;

const grid = new Grid();
const { mediumCol9, largeCol10 } = grid;

const positioning = new Positioning();
const { table, tableCell, fullWidth, overflowHidden, left, mxAuto } = positioning;

@Radium
export default class Home extends Component {
  render() {
    return (
      <div style={[mediumCol9, largeCol10, mxAuto, pt4]}>
        <header style={[table, fullWidth]}>
          <div style={[tableCell]}>
            <h1>Daniel Hunninghake</h1>
          </div>
          <div style={[tableCell, rightAlign]}>
            <p>&#x270c;</p>
          </div>
        </header>
        <Banner />
        <Footer />
      </div>
    );
  }
}
