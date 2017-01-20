import React, {Component} from 'react';

import TextArea from '../components/TextArea';

/* Gets the word in a sentence at a given character index */
function getWordAt(string, index) {
  const left = string.substr(0, index).split(' ');
  const right = string.substr(index).split(' ');
  return left[left.length - 1] + right[0];
}

/* Get the screen name without the "@" */
function getScreenName(word) {
  return word.split('@')[1];
}

/**
 *
 * Tweet
 * Compose a tweet
 * Distinguishes between typing regular words and twitter screen names (beginning with "@")
 *
 */

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /* Determine if user is editing a screen name on change, and call appropriate callbacks */
  handleChange({value, selectionStart}) {
    // Get the word being edited and handle the changes
    const word = getWordAt(value, selectionStart);
    const screenName = word.includes('@') && getScreenName(word);
    this.props.handleChange(value);

    // If screen name is being edited, handle differently
    if (screenName) {
      this.props.handleEditScreenName(screenName, value.split(' ').indexOf(`@${screenName}`));
    }
  }

  render() {
    const {body, handleKeyDown} = this.props;
    return (
      <TextArea
        placeholder="What's happening?"
        value={body}
        handleKeyDown={handleKeyDown}
        handleChange={this.handleChange}
      />
    );
  }
}

Tweet.propTypes = {
  body: React.PropTypes.string,
  handleKeyDown: React.PropTypes.func,
};

export default Tweet;
