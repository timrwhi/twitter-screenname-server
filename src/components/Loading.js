import React from 'react';

/**
 *
 * Loading
 * A simple spinning loading indicator
 *
 */

const Loading = () => (
  <div style={styles.loading}>
    <div style={styles.spinner}>
      <div style={styles.spinnerInner}></div>
    </div>
  </div>
);

const styles = {
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  spinner: {
    background: 'none',
    position: 'relative',
    width: 32,
    height: 32,
  },
  spinnerInner: {
    position: 'absolute',
    display: 'block',
    width: 32,
    height: 32,
    top: 0,
    left: 0,
    borderRadius: 80,
    boxShadow: '0 2px 0 0 #929292',
    animation: 'spinner 0.7s linear infinite'
  }
};

export default Loading;
