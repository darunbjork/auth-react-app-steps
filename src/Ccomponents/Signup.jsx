import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === '' || password.trim() === '') {
      setError('Username and password are required.');
      return;
    }

    if(password.length < 6 ) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    console.log('Signup Username', username);
    console.log('Signup password', password);

    setUsername('');
    setPassword('');
    
    setError('');
    alert('Account created! redirecting to Login page.');
    naviagte("/login")
  };

  return (
    <div>
      <h2>Signup page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input 
          type="text" 
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </label>
        <br />
        <label htmlFor="username">
          Password:
          <input 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  )
};

export default Signup;