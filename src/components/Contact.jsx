
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon.jsx'

class Contact extends React.Component {
  render() {
    return (
      <a className='contact bg-white gray-dark circle p1 z1' href='mailto:d@dhunninghake.com'>
        <Icon classes={'block'} icon={'icon-contact'} width={18} height={18} viewbox={'0 0 512 512'} />
      </a>
    )
  }

}

export default Contact