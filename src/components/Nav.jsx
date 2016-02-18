
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon.jsx'

class Nav extends React.Component {
  render() {
    return (
      <header className='pt2 pb1 h4 montserrat-reg'>
        
        <a className='bg-white gray-dark contact circle p1' href='mailto:d@dhunninghake.com'>
          <Icon classes={'block'} icon={'icon-contact'} width={18} height={18} viewbox={'0 0 512 512'} />
        </a>
      </header>
    )
  }

}

export default Nav