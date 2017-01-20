import React from 'react';

const User = ({name, screenName, profileImageUrl, handleClick}) => (
  <div style={styles.user}>
    <img src={profileImageUrl} style={styles.profileImageUrl}/>
    <div>@{screenName}</div>
    <div>{name}</div>
  </div>
);

const styles = {
  user: {
    display: 'flex',
    alignItems: 'center',
    justifyConten: 'space-between',
    minHeight: 40,
  },
  profileImageUrl: {
    borderRadius: '50%',
    height: 30,
    width: 30,
  },
};

User.propTypes = {
  name: React.PropTypes.string,
  profileImageUrl: React.PropTypes.string,
  screenName: React.PropTypes.string,
};

export default User;
