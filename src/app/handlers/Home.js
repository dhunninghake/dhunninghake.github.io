import React, { Component } from 'react';
import Radium from 'radium';
import radon from '../radon/radon';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Whitespace from '../lib/css/whitespace';
import Positioning from '../lib/css/positioning';
import Grid from '../lib/css/grid';

const w = new Whitespace();
const { pt4 } = w;

const g = new Grid();
const { mediumCol9, largeCol10 } = g;

const p = new Positioning();
const { mxAuto } = p;

@Radium
export default class Home extends Component {
  render() {
    return (
      <div style={[mediumCol9, largeCol10, mxAuto, pt4]}>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}
