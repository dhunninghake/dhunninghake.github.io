import React, { Component } from 'react';
import Icon from 'react-moodycons';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Daniel Hunninghake</h1>
          <h5>Product designer / developer</h5>
        </div>
        <div>
          <Icon name='grinning' />
        </div>
      </header>
    );
  }
}

