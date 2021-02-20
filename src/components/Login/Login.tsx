import React, { useState } from 'react';

type Props = {
  isLoggedIn: boolean;
};

const Login = ({ isLoggedIn }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login Screen</h1>
      <form>
        <label htmlFor="username"> Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label htmlFor="password"> Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Clear</button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
