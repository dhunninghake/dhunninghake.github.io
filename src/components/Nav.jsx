
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon.jsx'

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      class: props.initialClass,
      active: props.initialActive
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    const height = window.innerHeight - 73;

    if (!this.state.active && scrollTop > height) {
      this.setState({
        class: 'fixed',
        active: !this.props.initialActive
      });
    } else if (this.state.active && scrollTop < height) {
      this.setState({
        class: this.props.initialClass,
        active: this.props.initialActive
      });
    }
  }

  render() {
    const classes = 'header l0 t0 z1 full-width bg-white ' + this.state.class;
    return (
      <header className={classes}>
        <div className='container container--lg h4 montserrat-reg gray-dark clearfix'>
          <div className='left'>
            <span className='active inline-block mr1'>Daniel Hunninghake</span>
            <span className='inline-block muted-heavy'>{'{ honey - hockey }'}</span>
          </div>
          <nav className='right inbl-fix'>
            <a className='inbl vert-middle gray-dark ml1' href='https://twitter.com/dhunninghake' target='_blank'>
              <Icon icon={'icon-twitter'} width={20} height={20} viewbox={'0 0 612 612'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://www.instagram.com/dhunninghake/' target='_blank'>
              <Icon icon={'icon-instagram'} width={18} height={18} viewbox={'0 0 97 97'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://soundcloud.com/dhunninghake' target='_blank'>
              <Icon icon={'icon-soundcloud'} width={18} height={18} viewbox={'0 0 512 512'} />
            </a>
            <a className='inbl vert-middle gray-dark ml1' href='https://www.linkedin.com/in/dhunninghake' target='_blank'>
              <Icon icon={'icon-linkedin'} width={18} height={18} viewbox={'0 0 430 430'} />
            </a>
          </nav>
        </div>
      </header>
    )
  }

}

export default Nav

Nav.propTypes = { 
  class: React.PropTypes.string,
  active: React.PropTypes.bool
};

Nav.defaultProps = { 
  initialClass: 'absolute',
  initialActive: false
};
