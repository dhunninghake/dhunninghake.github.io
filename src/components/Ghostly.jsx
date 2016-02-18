
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
        <div className='full-width md-col-14 mx-auto'>
          <div className='browser mb2'>
            <img className='block' src={ghostlyBrowser} />
            <div className='overflow-hidden'>
              <img src={ghostlyHp} />
            </div>
          </div>
          <div className='container container--sm center pb2'>
            <h2 className='montserrat-bold mb0'>The Ghostly Store</h2>
            <p className='h5 mb1'><a className='gray-dark' href='http://theghostlystore.com' target='_blank'>theghostlystore.com</a></p>
            <h6 className="divider muted-heavy mb0">—</h6>
            <div className='clearfix left-align pt2 pb2'>
              <div className="col full-width md-col-4">
                <ul className='h5 list-reset'>
                  <li>✰ Visual Design</li>
                  <li>✰ Front-end Dev</li>
                  <li>✰ Responsive Design</li>
                  <li>✰ Shopify Templating</li>
                  <li>✰ HTML Emails</li>
                </ul>
              </div>
              <div className="col full-width md-col-12">
                <p className='h3 mb1'>The Ghostly Store is a boutique online shop featuring the work of music and visual artists. Serving as the commerce wing for experimental pop and techno label Ghostly International, it originally sold HQ audio and has expanded in recent years to smart, well-designed products. Ghostly has collaborated with creative companies such as Warby Parker, Isaora, Makerbot, and Behance.</p>
                <p className='h3 mb1'>Our primary goal with TGS was to create a space that enhances the products. This meant big beautiful photos, minimal UI and an emphasis on micro-interactions.</p>
              </div>
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
      </div>
    )
  }

}

export default Ghostly

