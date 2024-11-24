import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const UserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h1>User Page</h1>
      {user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
};

export default UserPage;