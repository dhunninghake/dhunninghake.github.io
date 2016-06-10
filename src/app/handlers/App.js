import React from 'react';

export default props => {
  return (
    <div>
      <h1>Application</h1>
      <div>{props.children}</div>
    </div>
  )
}
