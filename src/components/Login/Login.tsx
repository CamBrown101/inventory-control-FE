import React from 'react';

type Props = {
  isLoggedIn: boolean;
};

const Login = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <h1>Login Screen</h1>
      <form>
        <label> Username:</label>
        <input />
        <label> Password:</label>
        <input />
        <button>Clear</button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
