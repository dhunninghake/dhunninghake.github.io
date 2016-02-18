
import React, { Component } from 'react'
import Icon from './Icon.jsx'

class Links extends React.Component {
  render() {
    return (
      <div className='center'>
        <div className='inbl inbl-fix vert-bottom montserrat-reg muted-heavy'>
          <Icon classes='inline-block align-middle' icon={'icon-location'} width={10} height={18} viewbox={'0 0 10 18'} />
          <h5 className='inline-block align-middle mb0 pl-icon'>BK, NY</h5>
        </div>
        <h6 className="divider muted-heavy mb0">—</h6>
        <nav className='inbl-fix muted-heavy'>
          <a className='inbl vert-middle gray-dark' href='https://twitter.com/dhunninghake' target='_blank'>
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
    )
  }

}

export default Links


