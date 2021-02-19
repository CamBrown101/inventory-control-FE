import React from 'react';
import Login from './Login';

export default {
  title: 'Login Screen',
  component: Login,
};

export const Default = () => <Login isLoggedIn={false} />;
