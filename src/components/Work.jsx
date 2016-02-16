
import React, { Component } from 'react'
import dripHp from '../drip-screenshot.jpg'
import dripArtistPage from '../drip-artist-page.jpg'
import dripBrowser from '../drip-browser.jpg'
import dripLikes from '../drip-likes.jpg'
import dripMobile1 from '../drip-mobile-1.jpg'
import dripMobile2 from '../drip-mobile-2.jpg'
import dripMobile3 from '../drip-mobile-3.jpg'
import dripMobile4 from '../drip-mobile-4.jpg'

class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  tick() {
    if (this.state.count > 75) {
      this.setState({count: this.props.initialCount});
    } else {
      this.setState({count: this.state.count + this.props.distance});
    }
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), this.props.pollInterval);
  }

  render() {
    const divImage = {
      transform: "translate(" + 0 + "," + -this.state.count + "%)"
    }
    return (
      <div className='container container--lg pt4 clearfix'>
        <div className='col full-width md-col-4 pr2 pb2'>
          <h1 className='montserrat-bold mb0'>Drip.com</h1>
          <p className='h5 mb1'><a className='gray-dark' href='https://drip.com' target='_blank'>drip.com</a></p>
          <p className='h5 mb1'>Drip is a beloved product that brings together arists and their superfans via monthly subscription. Since joining as employee #1 in January 2012, here’s what I’ve contributed:</p>
          <ul className='h3 list-reset'>
            <li>✰ Front-end Dev</li>
            <li>✰ Visual Design</li>
            <li>✰ User Experience</li>
            <li>✰ Responsive Design</li>
            <li>✰ Prototyping</li>
            <li>✰ HTML Emails</li>
            <li>✰ Market Research</li>
            <li>✰ User Observation</li>
          </ul>
        </div>
        <div className='col full-width md-col-12'>
          <div className='browser mb2'>
            <img className='block' src={dripBrowser} />
            <div className='overflow-hidden'>
              <img className='screenshot' src={dripHp} style={divImage} />
            </div>
          </div>
          <img className='block border mb2' src={dripArtistPage} />
          <div className='clearfix pb2 neg'>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={dripMobile1} />
            </div>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={dripMobile2} />
            </div>
            <div className='pl1 pr1 col md-third'>
              <img className='block border' src={dripMobile3} />
            </div>
          </div>
          <img className='border bg-white p2 mb2' src={dripLikes} />
        </div>
      </div>
    )
  }

}

export default Work

Work.propTypes = { 
  initialCount: React.PropTypes.number,
  pollInterval: React.PropTypes.number,
  distance: React.PropTypes.number  
};

Work.defaultProps = { 
  initialCount: 0, 
  pollInterval: 3000,
  distance: 21
};
