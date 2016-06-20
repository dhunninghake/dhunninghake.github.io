import React from 'react';
import { StyleRoot } from 'radium';

export default props => {
  return (
    <StyleRoot>
      <div>{props.children}</div>
    </StyleRoot>
  )
}

