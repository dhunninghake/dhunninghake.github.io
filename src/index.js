import React, {PropTypes} from 'react';
import Root from './components/Root.jsx';

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
  React.render(React.createElement(Root, initialProps), document);
}

module.exports = function render(locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};