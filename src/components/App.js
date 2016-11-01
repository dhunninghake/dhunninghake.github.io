import React, { Component } from 'react';
import Icon from 'react-moodycons';
import v from 'vudu';

const c = v.atomics;

export default class Home extends Component {
  render() {
    const styles = v({
      container: {
        width: '100%',
        display: 'table',
        height: 'calc(100vh - 2rem)',
        fontFamily: "'CalibreRegular', sans-serif",
      },
      cell: {
        '@composes': [
          c.tableCell,
          c.alignMiddle,
          c.center
        ]
      },
      header: {
        fontFamily: '"CalibreBold", sans-serif',
        '@composes': [
          c.normal,
          c.m0,
          c.h1
        ]
      },
      subhead: {
        '@composes': [ c.m0 ]
      },
      list: {
        '@composes': [
          c.listReset
        ],
        'li': {
          '@composes': [ 
            c.mb1,
            c.h3,
            c.fixed,
          ],
          ':nth-child(1)': {
            top: '11%',
            transform: 'translateX(-50%)',
            left: '50%',
            '@media (min-width: 52em)': {
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              width: '10rem',
              left: '-2rem',
            }
          },
          ':nth-child(2)': {
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
          },
          ':nth-child(3)': {
            bottom: '11%',
            transform: 'translateX(-50%)',
            left: '50%',
            '@media (min-width: 52em)': {
              top: '50%',
              transform: 'translateY(-50%) rotate(90deg)',
              width: '10rem',
              right: '-2rem',
              left: 'auto',
              bottom: 'auto'
            }
          },
          ':nth-child(4)': {
            left: '50%',
            bottom: '5%',
            transform: 'translateX(-50%)'
          },
          'a': {
            '@composes': [ c.black ]
          }
        }
      }
    });
    return (
      <div className={styles.container}>
        <div className={styles.cell}>
          <Icon name='cool' width={46} />
          <h1 className={styles.header}>{'Daniel Hunninghake'}</h1>
          <p className={styles.subhead}>{'Designer / developer based in Brooklyn'}</p>
          <ul className={styles.list}>
            <li><a href='https://www.instagram.com/dhunninghake/' target='_blank'>Instagram</a></li>
            <li><a href='https://twitter.com/dhunninghake' target='_blank'>Twitter</a></li>
            <li><a href='https://github.com/dhunninghake' target='_blank'>Github</a></li>
            <li><a href='mailto:d@dhunninghake.com'>Email</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
