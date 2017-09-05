import React, { Component } from 'react';
import { render } from 'react-dom';
import Icon from 'react-moodycons';
import v from 'vudu';

require('./fonts.css');

console.log(v.composes);

const App = () => {
  const styles = v({
    container: {
      fontFamily: '"space_monoregular", Helvetica',
      padding: '4rem'
    },
    headline: {
      fontSize: '3vw',
      width: '60vw'
    }

  });
  return (
    <div className={styles.container}>
      <Icon name='cool' width={46} />
      <h1>{'Daniel Hunninghake'}</h1>
      <p className={styles.headline}>{'I’m a product designer & developer focused on empowering creators through amazing tech. Based in Brooklyn,NY.'}</p>
    </div>
  );
};

render(
  <App />,
  document.getElementById('app')
);


// <ul className={styles.list}>
//   <li><a href='https://www.instagram.com/dhunninghake/' target='_blank'>Instagram</a></li>
//   <li><a href='https://twitter.com/dhunninghake' target='_blank'>Twitter</a></li>
//   <li><a href='https://github.com/dhunninghake' target='_blank'>Github</a></li>
//   <li><a href='mailto:d@dhunninghake.com'>Email</a></li>
// </ul>
