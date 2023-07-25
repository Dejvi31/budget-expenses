import React, { useState } from 'react';
import { loginUser } from '../../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      // User logged in successfully, redirect to dashboard or desired page
      // You can use React Router or any other method to handle navigation here
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
