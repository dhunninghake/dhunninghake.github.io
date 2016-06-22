import React, { Component } from 'react';
import Radium from 'radium';
import radon from '../radon/radon';
import Whitespace from '../lib/css/whitespace';
import Grid from '../lib/css/grid';
import Colors from '../lib/css/colors';

const grid = new Grid(1280, 12);
const { col2, col4, col7, col10 } = grid;

const colors = new Colors();
const { bgBlack, bgFuschia, bgGreen, bgRed, white } = colors;

const whitespace = new Whitespace();
const { p2 } = whitespace;

const { PropTypes } = React;

const button = {
  base: [{border: '0px'}, p2, bgBlack, white, col2],
  thin: [col4],
  regular: [col7],
  wide: radon({
    small:  [col10, bgFuschia],
    medium: [bgGreen],
    large: [bgRed, radon({
      hover: [bgBlack]
    })]
  })
}

console.log(button);

@Radium
export default class Button extends Component {
  
  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.string
  }

  render() {
    return (
      <button style={[button.base, button[this.props.size]]}>
        {this.props.text}
      </button>
    );
  }
}