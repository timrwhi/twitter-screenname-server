import React from 'react';

const User = ({name, screenName, profileImageUrl, handleClick}) => (
  <div style={styles.user}>
    <img src={profileImageUrl} style={styles.profileImageUrl}/>
    <div style={styles.screenName}>@{screenName}</div>
    <div style={styles.name}>{name}</div>
  </div>
);

const styles = {
  user: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileImageUrl: {
    borderRadius: '50%',
    height: 30,
    width: 30,
    marginRight: 24,
  },
  screenName: {
    marginRight: 24,
  },
  name: {
    color: '#aaa',
  },
};

User.propTypes = {
  name: React.PropTypes.string,
  profileImageUrl: React.PropTypes.string,
  screenName: React.PropTypes.string,
};

export default User;
