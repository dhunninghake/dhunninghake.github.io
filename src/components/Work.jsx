
import React, { Component } from 'react'
import dripHp from '../drip-screenshot.jpg'
import dripArtistPage from '../drip-artist-page.jpg'
import dripBrowser from '../drip-browser.jpg'
import dripLikes from '../drip-likes.jpg'

class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  tick() {
    if (this.state.count > 75) {
      this.state.count = this.props.initialCount - this.props.distance;
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
      <div className='container container--lg clearfix'>
        <div className='col col-4 pr2 pb2'>
          <h1 className='montserrat-bold mb0'>Drip.com</h1>
          <p className='h5 mb1'>Drip is a beloved product that brings together arists and their superfans via monthly subscription. Since joining as employee #1 in January 2012, here’s what I’ve contributed:</p>
          <ul className='h3 unstyled-list'>
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
        <div className='col col-12'>
          <div className='browser mb2'>
            <img className='block' src={dripBrowser} />
            <div className='overflow-hidden'>
              <img className='screenshot' src={dripHp} style={divImage} />
            </div>
          </div>
          <img className='border mb2' src={dripArtistPage} />
          <img className='border p2 mb2' src={dripLikes} />
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
