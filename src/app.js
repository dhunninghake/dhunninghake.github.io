import React, { Component } from 'react';
import { render } from 'react-dom';
import { icons, Moodycon } from 'react-moodycons';
import v from 'vudu';

require('./fonts.css');

const Row = ({ children, height }) => (
  <div style={{ display: 'table-row', height }}>
    {children}
  </div>
);

const Col = ({ children, style, align, width = '100%' }) => (
  <div style={{ display: 'table-cell', verticalAlign: align, width: `${width}%`, ...style }}>
    {children}
  </div>
);

const styles = v({
  container: {
    fontFamily: '"space_monoregular", Helvetica',
    boxSizing: 'border-box',
    padding: '2rem 4%',
    display: 'table',
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    color: '#333',
    'a': {
      color: 'inherit',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    }
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
      }
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    margin: '0 -.75rem',
    'h3': {
      fontWeight: 'normal',
      margin: 0
    },
    'h5': {
      fontWeight: 'normal',
      padding: '1rem 0 0',
      margin: 0
    }
  },
  mood: {
    display: 'flex',
    alignItems: 'center',
    'span': {
      marginRight: '1rem'
    }
  },
  headline: {
    fontSize: '2.8vw',
    width: '56vw',
    margin: '0 0 1rem'
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

const workHistory = [
  {
    job: 'Kickstarter',
    when: 'Currently:',
    link: 'http://kickstarter.com'
  },
  {
    job: 'Sanctuary Computer',
    when: 'Previously:',
    link: 'http://www.sanctuary.computer/'
  },
  {
    job: 'Drip',
    when: 'Before that:',
    link: 'http://drip.kickstarter.com'
  }
]

const App = () => {
  const all = Object.keys(icons);
  const random = all[Math.floor(Math.random()*all.length)];
  return (
    <div className={styles.container}>
      <Row height={'20%'}>
        <Col align={'top'}>
          <header className={styles.header}>
            <h4 className={styles.name}>{'Daniel'}<br/ >{'Hunninghake'}</h4>
            <div className={styles.mood}>
              <span>{'Mood:'}</span>
              <Moodycon name={random} width={46} />
            </div>
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
          <footer className={styles.footer}>
            {workHistory.map((history) => (
              <Col key={history.job} width={4/12} style={{ padding: '0 .75rem' }}>
                <a href={history.link}>
                  <div style={{borderTop: '1px solid black'}}>
                    <h5>{history.when}</h5>
                    <h3>{history.job}</h3>
                  </div>
                </a>
              </Col>
            ))}
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
