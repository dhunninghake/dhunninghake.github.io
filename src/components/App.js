import React, { Component } from 'react';
import Icon from 'react-moodycons';
import v from 'vudu';

export default class Home extends Component {
  render() {
    const styles = v({
      container: {
        width: '100%',
        height: '100vh',
        display: 'table',
        fontFamily: "'CalibreRegular', sans-serif"
      },
      cell: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        paddingBottom: '3rem'
      },
      header: {
        margin: '0rem',
        fontSize: '2rem',
        fontFamily: '"CalibreBold", sans-serif'
      },
      subhead: {
        margin: '0rem',
      }
    });
    return (
      <div className={styles.container} onClick={this.changeBg}>
        <div className={styles.cell}>
          <Icon name='grinning' width={42} />
          <h1 className={styles.header}>{'Daniel Hunninghake'}</h1>
          <p className={styles.subhead}>{'Designer / developer based in Brooklyn'}</p>
        </div>
      </div>
    );
  }
}
