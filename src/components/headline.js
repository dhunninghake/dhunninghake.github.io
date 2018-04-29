import * as React from 'react';
import v from 'vudu';
import { PeaceIconWithBitmoji } from './index';

const styles = v({
  headline: {
    fontSize: '1.75rem',
    margin: '3rem 0 1rem',
    svg: {
      display: 'block',
      margin: '1rem 0 2rem'
    },
    '@media (min-width: 768px)': {
      fontSize: '2.8vw',
      width: '56vw',
      margin: '0 0 1rem',
      svg: {
        display: 'inline',
        margin: '0 0 0 1rem'
      }
    }
  }
});

export const Headline = () => (
  <p className={styles.headline}>
    I’m a product designer & developer focused on empowering creators through
    amazing tech. Based in Brooklyn, NY.
    <PeaceIconWithBitmoji />
  </p>
);
