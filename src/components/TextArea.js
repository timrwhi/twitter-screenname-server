import React from 'react';

/**
 *
 * TextArea
 * Simple editable text input
 *
 */

const TextArea = ({handleChange, handleKeyDown, value, placeholder}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    style={styles.textArea}
    onKeyDown={handleKeyDown}
    onChange={e => handleChange(e.target)}
  />
);

const styles = {
  textArea: {
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid gray',
    resize: 'none',
    padding: 8,
    fontSize: 24,
  },
};

TextArea.propTypes = {
  handleChange: React.PropTypes.func,
  handleKeyDown: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default TextArea;