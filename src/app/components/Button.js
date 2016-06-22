import React, { Component } from 'react';
import Radium from 'radium';

const { PropTypes } = React;

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