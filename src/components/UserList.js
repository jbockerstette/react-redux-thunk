import React from 'react';
import User from './User';

function UserList(props) {
  const { users, error, loading } = props;
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
      {!error &&
        !loading && (
          <ul>
            {users.map(u => (
              <User user={u} />
            ))}
          </ul>
        )}
    </div>
  );
}

export default UserList;
