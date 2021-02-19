import React from 'react';

type Props = {
  isLoggedIn: boolean;
};

const Login = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <h1>Login Screen</h1>
      <p>{isLoggedIn ? 'true' : 'false'}</p>
    </div>
  );
};

export default Login;
