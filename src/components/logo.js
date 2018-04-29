import * as React from 'react';
import v from 'vudu';

const styles = v({
  name: {
    fontWeight: 'normal',
    fontSize: '14px'
  }
});

export const Logo = () => (
  <h4 className={styles.name}>
    {'Daniel'}
    <br />
    {'Hunninghake'}
  </h4>
);
