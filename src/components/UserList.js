import React from 'react';
import User from './User';

const LoadingView = () => <p>Something went wrong!</p>;

const ErrorView = () => <p>Something went wrong!</p>;

function UserList(props) {
  const { users, error, loading } = props;
  if (error) {
    return <ErrorView />;
  }
  if (loading) {
    return <LoadingView />;
  }

  return (
    <ul>
      {users.map(u => (
        <User user={u} />
      ))}
    </ul>
  );
}

export default UserList;
