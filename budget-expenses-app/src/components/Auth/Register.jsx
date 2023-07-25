import React, { useState } from 'react';
import { registerUser } from '../../firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser(email, password);
      // User registered successfully, redirect to login page or desired page
      // You can use React Router or any other method to handle navigation here
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
