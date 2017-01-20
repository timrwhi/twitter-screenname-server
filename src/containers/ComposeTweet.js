import React, {Component} from 'react';

import SuggestedUsers from './SuggestedUsers';
import Tweet from './Tweet';

/**
 *
 * ComposeTweet
 * Provides an editor to compose a tweet and get suggested Twitter users while typing
 *
 * */

class ComposeTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSuggestionIndex: 0,
      screenName: '',
      tweetBody: '',
      fetchingUsers: false,
      users: [],
    };

    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleChangeTweet = this.handleChangeTweet.bind(this);
    this.handleKey = this.handleKey.bind(this);

    // Cache searches outside of this.state to prevent unnecessary renders
    this.cache = {};
  }

  /* Fetch users by query string from cache or from endpoint */
  fetchUsers(query) {
    // Don't do anything if query is under 2 characters
    if (!query || query.length < 2) {
      return;
    }

    // Attempt to grab users from cache
    if (this.cache[query]) {
      return this.setState({users: this.cache[query]});
    }

    // Set the state to "fetching" and do the request, set "fetching" state back when finished
    this.setState({fetchingUsers: true});
    fetch(`/twitter/user/search?username=${query}`)
      .then(res => res.json())
      .then(({users}) => {
        this.setState({users, fetchingUsers: false});
        this.cache[query] = users;
      });
  }

  /* Handle selecting a user from the suggestions */
  handleSelectUser(screenName) {
    // Split the tweet into words, and replace the partial screen name with selected user's screen name
    const tweetBodyWords = this.state.tweetBody.split(' ');
    tweetBodyWords.splice(this.state.screenNameIndex, 1, `@${screenName}`);
    const tweetBody = tweetBodyWords.join(' ');
    this.setState({tweetBody, screenNameIndex: -1, selectedSuggestionIndex: 0});
  }

  /* Hijack keystrokes inside the tweet, and act on the important ones */
  handleKey(e) {
    const key = e.which;

    // Handle up arrow
    if (key === 38) {
      e.preventDefault();

      // Set the previous user selected so it gets highlighted
      this.setState({selectedSuggestionIndex: this.state.selectedSuggestionIndex - 1})
    }

    // Handle down arrow
    if (key === 40) {
      e.preventDefault();

      // Set the next user selected so it gets highlighted
      this.setState({selectedSuggestionIndex: this.state.selectedSuggestionIndex + 1})
    }

    // Handle enter
    if (key === 13) {
      e.preventDefault();

      // Select the highlighted user
      this.handleSelectUser(this.state.users[this.state.selectedSuggestionIndex].screen_name);
    }
  }

  /* Handle changing the body of a tweet */
  handleChangeTweet(tweetBody) {
    this.setState({tweetBody, screenNameIndex: -1});
  }

  /* Handle changes to a word that starts with "@" */
  handleEditScreenName(screenName, indexInBody) {
    this.setState({screenNameIndex: indexInBody});
    this.fetchUsers(screenName);
  }

  render() {
    return (
      <div style={styles.composeTweet}>
        {/* Compose the tweet body */}
        <Tweet
          body={this.state.tweetBody}
          handleChange={this.handleChangeTweet}
          handleKeyDown={this.handleKey}
          handleEditScreenName={(screenName, index) => this.handleEditScreenName(screenName, index)}
        />

        {/* Show a list of suggested Twitter users if editing a screen name */}
        {this.state.screenNameIndex >= 0 &&
        <SuggestedUsers
          users={this.state.users}
          selectedIndex={this.state.selectedSuggestionIndex}
          loading={this.state.fetchingUsers}
          handleClickUser={this.handleSelectUser}
        />
        }
      </div>
    );
  }
}

const styles = {
  composeTweet: {
    maxWidth: 400,
    margin: '40px auto',
  }
};

export default ComposeTweet;
