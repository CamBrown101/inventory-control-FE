import React, { useState } from 'react';

type Props = {
  isLoggedIn: boolean;
};

const Login = ({ isLoggedIn }: Props) => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1>Login Screen</h1>
      <form>
        <label for="username"> Username:</label>
        <p>{username}</p>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label> Password:</label>
        <input />
        <button>Clear</button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
