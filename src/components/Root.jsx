import React, {PropTypes} from 'react';
import Home from './Home.jsx';

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

