

import React, { Component, PropTypes } from 'react';
import avatar from '../avatar.gif';

class Home extends React.Component {

  render() {
    return (
      <main>
        <h1>{this.props.title}</h1>
        <img src={avatar} />
      </main>
    )
  }

}

export default Home

