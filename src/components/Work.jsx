
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
    this.state = { count: props.initialCount };
  }

  tick() {
    if (this.state.count > 75) {
      this.setState({ count: this.props.initialCount });
    } else {
      this.setState({ count: this.state.count + this.props.distance });
    }
  }

  startInterval() {
    setInterval(this.tick.bind(this), this.props.pollInterval);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;

    if (!this.state.active && scrollTop > 100) {
      this.setState({ active: !this.props.initialActive });
      this.startInterval();
    }

  }

  render() {
    const divImage = {
      transform: "translate(" + 0 + "," + -this.state.count + "%)"
    }
    return (
      <div className='container container--lg clearfix pl1 pr1 md-pl0 md-pr0'>
        <div className='full-width md-col-14 mx-auto'>
          <div className='browser shadow mb2'>
            <img className='block' src={dripBrowser} />
            <div className='overflow-hidden'>
              <img className='screenshot' src={dripHp} style={divImage} />
            </div>
          </div>
          <div className='container container--sm center pb2'>
            <h2 className='montserrat-bold mb0'>Drip.com</h2>
            <p className='h5 mb1'><a className='gray-dark' href='https://drip.com' target='_blank'>drip.com</a></p>
            <h6 className="divider muted-heavy mb0">—</h6>
            <div className='clearfix left-align pt2 pb2'>
              <div className="col full-width md-col-4 pb2">
                <ul className='h5 list-reset'>
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
              <div className="col full-width md-col-12">
                <p className='h3 mb1'>Drip is a music + tech startup that’s reinventing fan clubs for the modern musician, currently backed by Expa New York. Originally created in 2012 by Ghostly International—a record label with a cult following in electronic music—Drip has partnered with artists and labels like Skrillex’ OWSLA and Diplo’s Mad Decent to deliver exclusive audio and foster direct authentic connections with fans.</p>
                <p className='h3 mb1'>As employee #1 in January 2012, I witnessed the product take shape and grow over the years, and I’ve grown as a creative professional alongside it. I learned to be a team player, to have empathy for the user and to iterate quickly.</p>
              </div>
            </div>
          </div>
          <img className='block border mb2' src={dripArtistPage} />
          <div className='clearfix neg'>
            <div className='col md-third pb2 md-pl1 md-pr1'>
              <img className='block border' src={dripMobile1} />
            </div>
            <div className='col md-third pb2 md-pl1 md-pr1'>
              <img className='block border' src={dripMobile2} />
            </div>
            <div className='col md-third pb2 md-pl1 md-pr1'>
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
