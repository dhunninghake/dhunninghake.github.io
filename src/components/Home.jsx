

import React, { Component, PropTypes } from 'react';
import avatar from '../avatar.png';

class Home extends React.Component {

  render() {
    return (
      <main className='table container full-height col-12 center'>
        <div className='table-cell align-middle pb4'>
          <img style={{ width: '8rem' }} src={avatar} />
          <h1 className='montserrat m0'>{this.props.title}</h1>
          <p className='md-col-5 mx-auto px2'>
            {this.props.description + ' '}
            <a className="black" href='https://drip.com/' target='_blank'>
              {this.props.employer}
            </a>.
          </p>
        </div>
      </main>
    )
  }

}

export default Home

