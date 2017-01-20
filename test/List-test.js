import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import List from '../src/components/List';

describe('<List />', () => {

  it('renders correct number of items', () => {
    const items = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'haha' },
    ];
    const wrapper = shallow(<List items={items} renderItem={item => <strong>{item.name}</strong>}/>);
    expect(wrapper.children()).to.have.length(3);
  });

  it('renders correct item wrapper', () => {
    const items = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'haha' },
    ];
    const wrapper = shallow(<List items={items} renderItem={item => <strong>{item.name}</strong>}/>);
    expect(wrapper.find('strong')).to.have.length(3);
  });

  it('calls handleSelect onClick item', () => {
    const spy = sinon.spy();
    const items = [
      { name: 'foo' },
    ];
    const wrapper = shallow(
      <List
        items={items}
        handleSelect={spy}
        renderItem={item => <strong>{item.name}</strong>}/>
    );
    wrapper.find('.list-item').simulate('click');
    expect(spy.callCount).to.equal(1);
  });

});