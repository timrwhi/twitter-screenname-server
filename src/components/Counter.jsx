import React from 'react';

const Counter = ({ value, max }) => (
  <div style={styles.counter}>
    <div style={value > max ? styles.invalid : {}}>{value}</div>
    <div>/</div>
    <div>{max}</div>
  </div>
);

const styles = {
  counter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: '#ddd',
    height: 24,
    width: 64,
    borderRadius: 2,
    fontSize: 12,
    marginBottom: 8,
    color: 'gray',
  },
  invalid: {
    color: 'red',
  },
};

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
};

export default Counter;
