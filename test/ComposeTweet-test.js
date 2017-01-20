import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ComposeTweet from '../src/containers/ComposeTweet';
import Tweet from '../src/containers/Tweet';
import SuggestedUsers from '../src/containers/SuggestedUsers';

describe('<ComposeTweet />', () => {

  it('renders a <Tweet>', () => {
    const wrapper = shallow(<ComposeTweet />);
    expect(wrapper.find(Tweet)).to.have.length(1);
  });

  it('does not render a <SuggestedUsers> if not editing a screen name', () => {
    const wrapper = shallow(<ComposeTweet />);
    expect(wrapper.find(SuggestedUsers)).to.have.length(0);
  });

  it('renders a <SuggestedUsers> if editing a screen name', () => {
    const wrapper = shallow(<ComposeTweet />);
    wrapper.setState({screenNameIndex: 0});
    expect(wrapper.find(SuggestedUsers)).to.have.length(1);
  });

});