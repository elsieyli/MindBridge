import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function Profile() {
  const auth = useAuth0();
  return (
    <div>
      <h1>Profile</h1>
      <div>{auth.user.given_name}</div>
      <div>{auth.user.family_name}</div>
      <div>{auth.user.email}</div>
      <div>{auth.user.nickname}</div>
      <img src={auth.user.picture} alt={auth.user.name} />
      <div>{auth.user.address}</div>
      <div>{auth.user.updated_at}</div>
      <div>{auth.user.email_verified}</div>
      <div>{auth.user.sub}</div>
      <div>{auth.user.birthdate}</div>
      <div>{auth.user.phone_number}</div>
    </div>
  );
}

export default Profile