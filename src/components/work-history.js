import * as React from 'react';
import v from 'vudu';

const workHistory = [
  {
    job: 'Pattern Brands',
    when: 'Currently:',
    link: 'http://kickstarter.com'
  },
  {
    job: 'Kickstarter',
    when: 'Previously:',
    link: 'http://kickstarter.com'
  },
  {
    job: 'Sanctuary Computer',
    when: 'Previously:',
    link: 'http://www.sanctuary.computer/'
  },
  {
    job: 'Drip (Pre-Acq.)',
    when: 'Previously:',
    link: 'http://drip.kickstarter.com'
  }
];

const styles = v({
  workHistory: {
    margin: '0 0 1rem 1rem',
    padding: '0 0 0 1rem',
    borderLeft: '1px solid black',
    a: {
      textDecoration: 'none'
    },
    h3: {
      fontWeight: 'normal',
      margin: 0
    },
    h5: {
      fontWeight: 'normal',
      padding: '.5rem 0 0',
      margin: 0
    },
    '@media (min-width: 768px)': {
      flex: 1,
      margin: '0 1rem',
      padding: 0,
      borderTop: '1px solid black',
      borderLeft: 'none',
      h5: {
        padding: '1rem 0 0'
      }
    }
  }
});

export const WorkHistory = () => (
  <React.Fragment>
    {workHistory.map(history => (
      <div className={styles.workHistory}>
        <h5>{history.when}</h5>
        <a href={history.link}>
          <h3>{history.job}</h3>
        </a>
      </div>
    ))}
  </React.Fragment>
);
