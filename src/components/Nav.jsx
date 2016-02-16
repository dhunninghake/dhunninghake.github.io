
import React, { Component } from 'react'
import Icon from './Icon.jsx'

class Nav extends React.Component {

  render() {
    return (
      <header className='header bg-white'>
        <div className='container container--lg h4 montserrat-reg gray-dark clearfix'>
          <div className='left'>
            <span className='active inline-block mr1'>Daniel Hunninghake</span>
            <span className='inline-block muted-heavy'>{'{ honey - hockey }'}</span>
          </div>
          <nav className='right inbl-fix'>
            <a className='inbl vert-middle gray-dark ml1' href='https://twitter.com/dhunninghake' target='_blank'>
              <Icon icon={'icon-twitter'} width={20} height={20} viewbox={'0 0 612 612'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://www.instagram.com/dhunninghake/' target='_blank'>
              <Icon icon={'icon-instagram'} width={18} height={18} viewbox={'0 0 97 97'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://soundcloud.com/dhunninghake' target='_blank'>
              <Icon icon={'icon-soundcloud'} width={18} height={18} viewbox={'0 0 512 512'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://www.linkedin.com/in/dhunninghake' target='_blank'>
              <Icon icon={'icon-linkedin'} width={18} height={18} viewbox={'0 0 430 430'} />
            </a>
          </nav>
        </div>
      </header>
    )
  }

}

export default Nav

