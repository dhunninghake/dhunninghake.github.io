
import React, { Component, PropTypes } from 'react';
import avatar from '../avatar.png';
import Icon from './Icon.jsx';

class Home extends React.Component {

  render() {
    return (
      <main className='table container full-height col-12 center'>
        <div className='table-cell align-middle pb4'>
          <img style={{ width: '8rem' }} src={avatar} />
          <h1 className='montserrat m0'>{this.props.title}</h1>
          <p className='md-col-5 mx-auto px2'>
            {this.props.description + ' '}
            <a className='black' href='https://drip.com/' target='_blank'>
              {this.props.employer}
            </a>.
          </p>
          <div className='mt3'>
            <a className='btn btn-outline silver' href='mailto:daniel@drip.com' target='_blank'>
              <Icon classes='inline-block align-middle' icon={'icon-contact'} width={15} height={15} viewbox={'0 0 469 469'} />
              <span className='inline-block align-middle black' style={{ marginLeft: '.3rem' }}>Contact</span>
            </a>
            <a className='btn btn-outline silver ml2' href='https://twitter.com/dhunninghake' target='_blank'>
              <Icon classes='inline-block align-middle' icon={'icon-twitter'} width={15} height={15} viewbox={'0 0 2000 1625'} />
              <span className='inline-block align-middle black' style={{ marginLeft: '.3rem' }}>Follow</span>
            </a>
          </div>
        </div>
      </main>
    )
  }

}

export default Home

