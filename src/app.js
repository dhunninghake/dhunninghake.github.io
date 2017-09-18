import React, { Component } from 'react';
import { render } from 'react-dom';
import Icon from 'react-moodycons';
import v from 'vudu';

require('./fonts.css');

console.log(v.composes);

const Row = ({ children, height }) => (
  <div style={{ display: 'table-row', height }}>
    {children}
  </div>
);

const Col = ({ children, align }) => (
  <div style={{ display: 'table-cell', verticalAlign: align }}>
    {children}
  </div>
);

const styles = v({
  container: {
    fontFamily: '"space_monoregular", Helvetica',
    boxSizing: 'border-box',
    padding: '4rem',
    display: 'table',
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    color: '#333'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    'li': {
      display: 'inline-block',
      marginRight: '2rem',
      'span': {
        fontSize: '.75rem',
        display: 'inline-block',
        marginRight: '.25rem'
      },
      'a': {
        color: 'inherit'
      }
    }
  },
  header: {

  },
  headline: {
    fontSize: '2.8vw',
    width: '56vw',
    marginBottom: '1rem'
  },
  name: {
    fontWeight: 'normal'
  }
});

const links = [
  {
    symbol: String.fromCharCode(9824),
    link: 'https://www.instagram.com/dhunninghake/',
    name: 'Instagram'
  },
  {
    symbol: String.fromCharCode(9827),
    link: 'https://twitter.com/dhunninghake',
    name: 'Twitter'
  },
  {
    symbol: String.fromCharCode(9829),
    link: 'https://github.com/dhunninghake',
    name: 'Github'
  },
  {
    symbol: String.fromCharCode(9830),
    link: 'mailto:d@dhunninghake.com',
    name: 'Email'
  }
];

const App = () => {
  return (
    <div className={styles.container}>
      <Row height={'20%'}>
        <Col align={'top'}>
          <header>
            <h4 className={styles.name}>{'Daniel'}<br/ >{'Hunninghake'}</h4>
            <Icon name='cool' width={46} />

          </header>
        </Col>
      </Row>
      <Row height={'60%'}>
        <Col align={'middle'}>
          <p className={styles.headline}>{'I’m a product designer & developer focused on empowering creators through amazing tech. Based in Brooklyn,NY.'}</p>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.name}>
                <span>{link.symbol}</span>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row height={'20%'}>
        <Col align={'bottom'}>
          <footer>
            {'footer'}
          </footer>
        </Col>
      </Row>
    </div>
  );
};

render(
  <App />,
  document.getElementById('app')
);
