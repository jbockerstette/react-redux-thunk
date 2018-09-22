import React from 'react';

function User(props) {
  const { user } = props;
  return <li>{user.name}</li>;
}

export default User;
