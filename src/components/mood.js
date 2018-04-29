import * as React from 'react';
import { icons, Moodycon } from 'react-moodycons';
import v from 'vudu';

const styles = v({
  mood: {
    display: 'none',
    alignItems: 'center',
    span: {
      marginRight: '1rem'
    },
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    '@media (min-width: 768px)': {
      display: 'flex'
    }
  }
});

const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomIcon = () => {
  const filteredIcons = Object.keys(icons).filter(icon =>
    [
      'cool',
      'grinning',
      'laughing',
      'dying',
      'skull',
      'robot',
      'kissing'
    ].includes(icon)
  );
  return random(filteredIcons);
};

export const Mood = () => (
  <div className={styles.mood}>
    <span>{'Mood:'}</span>
    <a href="/react-moodycons">
      <Moodycon name={getRandomIcon()} width={42} />
    </a>
  </div>
);
