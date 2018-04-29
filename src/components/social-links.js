import * as React from 'react';
import v from 'vudu';

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

const styles = v({
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    fontSize: '.75rem',
    display: 'inline-block',
    marginRight: '2rem',
    a: {
      textDecoration: 'underline'
    },
    '@media (min-width: 768px)': {
      fontSize: '1rem'
    }
  }
});

export const SocialLinks = () => (
  <ul className={styles.list}>
    {links.map(link => (
      <li key={link.name} className={styles.link}>
        <a href={link.link}>{link.name}</a>
      </li>
    ))}
  </ul>
);
