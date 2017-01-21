import React from 'react';

/**
 *
 * List
 * Display a list of items and handle selecting item without caring about how the items are rendered
 *
 */

const List = ({ items, selected, renderItem, handleSelect }) => (
  <div>
    {items.map((item, i) => (
      <div
        key={i}
        className="list-item"
        onClick={() => handleSelect(item)}
        style={selected === i ? styles.selectedItem : styles.item}>
        {renderItem(item)}
      </div>
    ))}
  </div>
);

const styles = {
  item: {},
  selectedItem: {
    background: '#ccc',
  },
};

List.defaultProps = {
  items: [],
  selected: 0,
  handleSelect: () => {},
};

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
  selected: React.PropTypes.number,
  renderItem: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func,
};

export default List;
