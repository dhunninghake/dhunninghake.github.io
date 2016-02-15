
import React, { Component } from 'react'
import Icon from './Icon.jsx'
import Nav from './Nav.jsx'
import BannerImg from '../banner-bg.jpg'

class Banner extends React.Component {
  render() {
    const bannerBg = {
      backgroundImage: "url(" + BannerImg + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#393939",
      backgroundBlendMode: "multiply"
    }
    return (
      <div className='white pl3 pr3 pb4' style={bannerBg}>
        <Nav />
        <div className='montserrat-bold muted right-align pt1 pb2'>
          <Icon classes='inline-block align-middle' icon={'icon-location'} width={10} height={18} viewbox={'0 0 10 18'} />
          <h4 className='inline-block align-middle mb0 pl-icon'>Brooklyn, NY</h4>
        </div>
        <div className='container container--sm full-width'>
          <h1 className='h0 montserrat-bold m0 pb2'>
            Yo! I’m Daniel, a product designer &amp; developer, hustling to bring ideas to life
            <span className='merriweather'> ✌</span>
          </h1>
          <p>Currently reinventing how artists and their fans interact at <a className='white' href='https://drip.com'>Drip.com</a>. When I’m not obsessing over the details there, I’m <a className='white' href='https://drip.com'>crate digging for house records</a>, <a className='white' href=''>photographing typography</a>, and <a className='white' href=''>eating avocados</a>.</p>
          <p>After you’ve had a look around, <a className='white'>say hello</a>.</p>
        </div>
      </div>
    )
  }

}

export default Banner

