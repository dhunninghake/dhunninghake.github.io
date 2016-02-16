
import React, { Component } from 'react'
import Headshot from '../daniel-headshot.jpg'

class Footer extends React.Component {
  render() {
    return (
      <div className='container container--sm pt4 pb4'>
        <div className='pt4 pb4 clearfix'>
          <div className='left col-6 md-col-3 pb4'>
            <img className='block circle' src={Headshot} />
          </div>
          <div className='left full-width md-col-13 pb4 pl2'>
            <h1 className='h0 montserrat-bold mt0 mb1'>Product design &amp; development in Bk</h1>
            <p className='h3 mb1'>Front-end Dev (scalable, modular HTML &#43; CSS, JS), Visual Design, User Experience. You’ve made it this far, <a className='gray-dark' href='mailto:dhunn1587@gmail.com'>say hi</a>!</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer

