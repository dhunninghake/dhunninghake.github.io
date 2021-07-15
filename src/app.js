import React, { Component } from 'react';
import { render } from 'react-dom';
import v from 'vudu';
import { Headline, Logo, Mood, SocialLinks, WorkHistory } from './components';

require('./fonts.css');

const styles = v({
  container: {
    fontFamily: '"space_monoregular", Helvetica',
    boxSizing: 'border-box',
    flexDirection: 'column',
    padding: '2rem 4%',
    height: '100%',
    width: '100%',
    color: '#333',
    a: {
      color: 'inherit',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    '@media (min-width: 768px)': {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    margin: '4rem -1rem 1rem',
    '@media (min-width: 768px)': {
      display: 'flex',
      margin: '0 -1rem 1rem'
    }
  }
});

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
        {/* <Mood /> */}
      </header>
      <div>
        <Headline />
        <SocialLinks />
      </div>
      <footer className={styles.footer}>
        <WorkHistory />
      </footer>
    </div>
  );
};

render(<App />, document.getElementById('app'));
