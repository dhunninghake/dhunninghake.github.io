

import React, { Component, PropTypes } from 'react';
import avatar from '../avatar.gif';

class Home extends React.Component {

  render() {
    return (
      <main className="table full-height col-12 center">
        <div className="table-cell align-middle pb4">
          <img style={{ width: '8rem' }} src={avatar} />
          <h1 className="montserrat m0">{this.props.title}</h1>
          <p>Product designer based in Brooklyn, NY</p>
        </div>
      </main>
    )
  }

}

export default Home

