
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Banner from './Banner.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Work from './Work.jsx'
import Ghostly from './Ghostly.jsx'
import favicon from '../favicon.png'
import css from '../style.css'

class Root extends React.Component {
  render() {
    const initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='description' content={this.props.description + ' ' + this.props.employer} />
          <link rel='icon' href={favicon} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div className="bg-white">
            <Banner {...this.props} />
            <Work />
            <Ghostly />
            <Footer />
          </div>
          <script id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root

