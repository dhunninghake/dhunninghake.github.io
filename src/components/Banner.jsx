
import React, { Component } from 'react'
import Icon from './Icon.jsx'
import Nav from './Nav.jsx'
import BannerImg from '../banner-bg.jpg'

class Banner extends React.Component {
  render() {
    const bannerBg = {
      backgroundImage: 'url(' + BannerImg + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#3f3f3f',
      backgroundBlendMode: 'multiply',
      height: 'calc(100% - 72px)'
    }
    return (
      <div className='table white pl3 pr3' style={bannerBg}>
        <div className='table-row full-height'>
          <div className='table-cell'>
            <div className='container container--sm full-width'>
              <h1 className='h0 montserrat-bold m0 pb1 center'>
                I’m a product designer and developer, hustling to bring ideas to life
                <span className='merriweather'> ✌</span>
              </h1>
              <p className='h3 mb2 pl3 pr3 muted-light center'>Currently reinventing how artists and their fans interact at <a className='white' href='https://drip.com' target='_blank'>Drip.com</a>. When I’m not obsessing over the details there, I’m <a className='white' href='https://soundcloud.com/dhunninghake'>crate digging for house records</a>, <a className='white' href='https://www.instagram.com/p/5fK2HImvPs/'>photographing typography</a>, and <a className='white' href='https://www.instagram.com/p/37v1GHGvLX'>eating clean</a>.</p>
              <div className='center'><a className='button button-small button-banner white h3' href='mailto:dhunn1587@gmail.com'>Say hi ☞</a></div>
            </div>
          </div>
        </div>
        <div className='table-row'>
          <div className='table-cell vert-bottom pb2'>
            <div className='container container--lg montserrat-bold muted right-align'>
              <Icon classes='inline-block align-middle' icon={'icon-location'} width={10} height={18} viewbox={'0 0 10 18'} />
              <h4 className='inline-block align-middle mb0 pl-icon'>Brooklyn, NY</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Banner

