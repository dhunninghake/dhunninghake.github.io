import React, { Component } from 'react';
import Radium from 'radium';
import Button from '../components/Button';
import Whitespace from '../lib/css/whitespace';
import Typography from '../lib/css/typography';
import Grid from '../lib/css/grid';
import Colors from '../lib/css/colors';

const grid = new Grid(1280, 12);
const { col9 } = grid;

const whitespace = new Whitespace();
const { m0 } = whitespace;

const colors = new Colors();
const { green, red, yellow, fuchsia } = colors;

const typography = new Typography();
const { h0 } = typography;

const { PropTypes } = React;

const statusColor = {
  success: green,
  warning: yellow,
  error:   red,
};

@Radium
export default class Banner extends Component {
  
  static propTypes = {
    status: PropTypes.string
  }

  render() {
    return (
      <div style={[fuchsia, col9, statusColor[this.props.status]]}>
        <h1 style={[h0, m0]}>I’m a product designer and developer hustling to bring ideas to life.</h1>
        <h4>Currently making artful interfaces at <a href='http://sanctuary.computer/'>Sanctuary Computer</a>. Before that, I spent four years at <a href='http://drip.com/'>Drip.com</a> reinventing fan clubs for musicians. It was acquired by Kickstarter in April 2016.</h4>
        <Button text={'Submit'} size={'wide'} />
      </div>
    );
  }
}