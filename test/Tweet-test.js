import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Tweet from '../src/containers/Tweet';
import TextArea from '../src/components/TextArea';

describe('<Tweet />', () => {

  it('renders a <TextArea>', () => {
    const wrapper = shallow(<Tweet />);
    expect(wrapper.find(TextArea)).to.have.length(1);
  });

  it('renders body passed to it', () => {
    const wrapper = mount(<Tweet body="My cool tweet"/>);
    expect(wrapper.find('textarea').props().value).to.equal('My cool tweet');
  });

});