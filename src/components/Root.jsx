

import React, { Component, PropTypes } from 'react';
import Home from './Home.jsx';
import css from '../style.css';

class Root extends React.Component {
  render() {
    const initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title + ' ' + this.props.symbol}</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='description' content={this.props.description} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
            <Home {...this.props} />
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

