import React, { Component } from 'react';
import { render } from 'react-dom';
import { icons, Moodycon } from 'react-moodycons';
import Bitmoji from './bitmoji.png'
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
      'a': {
        textDecoration: 'underline'
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
    },
    'svg': {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },
  headline: {
    fontSize: '2.8vw',
    width: '56vw',
    margin: '0 0 1rem',
    'svg': {
      marginLeft: '1rem'
    }
  },
  bitmoji: {
    top: '30%',
    right: 0,
    transform: 'rotate(-35deg) translate(230px, 100px)',
    transition: 'all .3s ease',
    position: 'fixed',
    zIndex: 1
  },
  peace: {
    animationName: 'peace',
    animationDuration: '6.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    fill: 'currentColor',
    ['@keyframes peace']: {
      '0%': { transform: 'rotate(0)' },
      '.75%': { transform: 'rotate(-25deg)' },
      '1.5%': { transform: 'rotate(0)' },
      '3%': { transform: 'rotate(25deg)' },
      '3.75%': { transform: 'rotate(0)' },
      '4.5%': { transform: 'rotate(-25deg)' },
      '5.25%': { transform: 'rotate(0)' },
      '100%': { transform: 'rotate(0)' }
    },
    ':hover ~ img': {
      top: '33%',
      transform: 'rotate(-35deg) translate(30px, 0)',
      transition: 'all .2s ease'
    }
  },
  name: {
    fontWeight: 'normal'
  }
});

const links = [
  {
    link: 'https://www.instagram.com/dhunninghake/',
    name: 'Instagram'
  },
  {
    link: 'https://twitter.com/dhunninghake',
    name: 'Twitter'
  },
  {
    link: 'https://github.com/dhunninghake',
    name: 'Github'
  },
  {
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
              <a href='/react-moodycons'>
                <Moodycon name={random} width={46} />
              </a>
            </div>
          </header>
        </Col>
      </Row>
      <Row height={'60%'}>
        <Col align={'middle'}>
          <p className={styles.headline}>
            {'I’m a product designer & developer focused on empowering creators through amazing tech. Based in Brooklyn,NY.'}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 478 684" className={styles.peace}>
              <g transform="translate(15 14)" style={{ fill: 'white', stroke: '#111' }}>
                <path d="M249 592.4C249 592.4 220.9 557.8 220.9 531.4 220.9 505 217.1 501.6 229.9 466.5 242.8 431.5 303 396.7 303 396.7L325.9 384.4C325.9 384.4 276.4 387.7 208.6 363.3 140.9 338.8 175.8 270.4 175.8 270.4 175.8 270.4 185.1 258.5 237.8 264.4 290.4 270.4 330.5 276 330.5 276 330.5 276 390.6 289.3 402.7 299.3 414.7 309.2 428.3 317.9 434.1 337.2 439.9 356.5 437.2 397.9 437.2 412.7 437.2 427.6 424.7 493.6 413.7 514.9 402.7 536.2 384.5 583.9 313.5 622.3 242.5 660.7 177.7 646.2 177.7 646.2 177.7 646.2 119.8 651.7 62.2 591.6 4.7 531.4 6.8 501.3 6.8 501.3 6.8 501.3-16.5 439.7 26.5 408.6 69.5 377.5 89.9 406.8 89.9 406.8 89.9 406.8 125.7 444.6 141.6 473 157.5 501.3 158.6 516.3 158.6 526 158.6 535.7 144.4 549.6 127.4 549.6 110.4 549.6 89.9 543.5 76.1 524.5 62.2 505.5 62.2 501.3 62.2 501.3 62.2 501.3 66.7 506.4 89.9 536.2" strokeWidth="31"/>
                <path d="M163 298.1C163 298.1 116.1 156.9 106.8 121.6 97.5 86.2 93.3 87.2 89.8 44 89.4 39.1 95 21.2 95.3 20 99.9 1.2 124.3 0.9 124.3 0.9 124.3 0.9 154-5.2 168.6 30.6 183.2 66.3 183.2 63.9 193.6 99.3 203.9 134.7 249.5 265 249.5 265 249.5 265 186.8 253.7 181.1 260.8 175.4 267.8 163 298.1 163 298.1Z" strokeWidth="28"/>
                <path d="M270.7 260.1C270.7 260.1 337.9 68 349.9 47.5 361.9 27.1 362 28.2 378.8 17.3 395.6 6.5 417.5 27.4 417.5 27.4 417.5 27.4 434.2 44.2 423.1 79.9 412 115.6 400 157.3 400 157.3L357.2 280 270.7 260.1Z" strokeWidth="28"/>
                <path d="M65.1 316.1C81.1 296.9 91.9 290.2 96.3 290.2 100.7 290.2 124.4 284.5 142.4 303.3 160.5 322.1 182.4 356.3 182.4 356.3 182.4 356.3 211.1 412 217 433.8 222.9 455.5 219.3 472.8 204.6 485.8 189.9 498.9 178 493.4 157.5 481.7 137.1 470 114.1 436.9 114.1 436.9L89.8 405.3 74.3 380.6C74.3 380.6 49 335.3 65.1 316.1Z" strokeWidth="28"/>
              </g>
            </svg>
            <img className={styles.bitmoji} width={200} src={Bitmoji} />
          </p>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.name}>
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
