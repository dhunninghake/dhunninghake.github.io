
import React, { Component } from 'react'
import Icon from './Icon.jsx'
import Contact from './Contact.jsx'
import Links from './Links.jsx'
import BannerImg from '../banner-bg.jpg'

class Banner extends React.Component {
  render() {
    return (
      <div className='banner table pl1 pr1 md-pl3 md-pr3'>
        <Contact />
        <div className='table-row full-height'>
          <div className='table-cell pt3 pb3'>
            <div className='container container--sm md-center full-width'>
              <h1 className='h0 montserrat-bold m0 pb1'>
                Daniel Hunninghake is a product designer and developer, hustling to bring ideas to life
                <span className='merriweather'> ✌</span>
              </h1>
              <p className='h3 mb2 muted-light'>
                Previously at Drip.com reinventing fan clubs for artists.<br />
                Now, I’m looking for the next adventure! <a className='gray-dark' href='mailto:d@dhunninghake.com'>Say hey</a>.
              </p>
              <Links />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Banner

