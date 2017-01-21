import React, { Component } from 'react';

import Loading from '../components/Loading';
import List from '../components/List';
import User from './User';

/**
 *
 * SuggestedUsers
 * Displays a list of user suggestions based on partially-typed screen name
 *
 */

class SuggestedUsers extends Component {
  render() {
    const { loading, users, selectedIndex, handleClickUser } = this.props;
    return (
      <div>
        {loading && <Loading/>}
        <List
          items={users}
          selected={selectedIndex}
          handleSelect={user => handleClickUser(user.screen_name)}
          renderItem={user => (
            <User
              name={user.name}
              screenName={user.screen_name}
              profileImageUrl={user.profile_image_url}
            />
          )}
        />
      </div>
    );
  }
}

SuggestedUsers.defaultProps = {
  users: [],
  loading: false,
  selectedIndex: 0,
  handleClickUser: () => {
  },
};

SuggestedUsers.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    screen_name: React.PropTypes.string,
    profile_image_url: React.PropTypes.string,
  })),
  loading: React.PropTypes.bool,
  selectedIndex: React.PropTypes.number,
  handleClickUser: React.PropTypes.func
};

export default SuggestedUsers;
