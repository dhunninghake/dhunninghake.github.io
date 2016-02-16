
import React, { Component } from 'react'
import ghostlyHp from '../ghostly-hp.jpg'
import ghostlyBrowser from '../ghostly-browser.jpg'
import ghostlyProduct from '../ghostly-product.jpg'
import ghostlyProductDetail from '../ghostly-product-detail.jpg'
import ghostlyMobile1 from '../ghostly-mobile-1.jpg'
import ghostlyMobile2 from '../ghostly-mobile-2.jpg'
import ghostlyMobile3 from '../ghostly-mobile-3.jpg'

class Ghostly extends React.Component {
  render() {
    return (
      <div className='container container--lg pt4 clearfix'>
        <div className='col full-width md-col-12'>
          <div className='browser mb2'>
            <img className='block' src={ghostlyBrowser} />
            <div className='overflow-hidden'>
              <img src={ghostlyHp} />
            </div>
          </div>
          <img className='block border mb2' src={ghostlyProduct} />
          <img className='block border mb2' src={ghostlyProductDetail} />
          <div className='clearfix pb2 neg'>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={ghostlyMobile1} />
            </div>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={ghostlyMobile2} />
            </div>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={ghostlyMobile3} />
            </div>
          </div>
        </div>
        <div className='col full-width md-col-4 pl2 pb2'>
          <h1 className='montserrat-bold mb0'>The Ghostly Store</h1>
          <p className='h5 mb1'><a className='gray-dark' href='http://theghostlystore.com' target='_blank'>theghostlystore.com</a></p>
          <p className='h5 mb1'>TGS is a boutique online shop that creates smart, well-designed products. Recently featured in <a className='gray-dark' href='http://www.nytimes.com/2015/10/30/business/media/ghostly-transcends-its-record-label-roots-to-sell-an-ethos.html' target='_blank'>The New York Times</a>, Ghostly has partnered with creative companies such as Warby Parker, Adult Swim, Makerbot, Isaora and Behance.</p>
          <ul className='h3 list-reset'>
            <li>✰ Visual Design</li>
            <li>✰ Responsive Design</li>
            <li>✰ Shopify Templating</li>
            <li>✰ HTML Emails</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Ghostly
