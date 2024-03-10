// UserDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const User = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
  );
};

export default User;
