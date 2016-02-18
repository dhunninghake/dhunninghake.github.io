
import React, { Component } from 'react'
import Headshot from '../daniel-headshot.jpg'
import Icon from './Icon.jsx'
import Links from './Links.jsx'

class Footer extends React.Component {
  render() {
    return (
      <div className='container container--sm pt4 pb4'>
        <div className='pb2'>
          <Links />
        </div>
        <div className='pt4 pb4 clearfix'>
          <div className='left col-6 md-col-3 pb4'>
            <img className='block circle' src={Headshot} />
          </div>
          <div className='left full-width md-col-13 pb4 pl2'>
            <h1 className='montserrat-bold mt0 mb1'>
              Product design and development in BK
              <span className='merriweather'> ✌</span>
            </h1>
            <p className='h3 mb1'>Previously at Drip.com solving fan clubs for artists and their fans. Catch me outside of the office <a className='gray-dark' href='https://soundcloud.com/dhunninghake' target='_blank'>crate digging for house records</a>, <a className='gray-dark' href='https://www.instagram.com/p/5fK2HImvPs/' target='_blank'>photographing typography</a>, and <a className='gray-dark' href='https://www.instagram.com/p/37v1GHGvLX' target='_blank'>eating clean</a>.</p>
            <p className='h3'>Front-end Dev (scalable, modular HTML &#43; CSS, JS), Visual Design, User Experience. You’ve made it this far, <a className='gray-dark' href='mailto:d@dhunninghake.com'>say hey</a>!</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer

