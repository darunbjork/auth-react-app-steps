import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');
  const [birthday, setBirthday ] = useState('');
  const [error, setError ] = useState('');
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === '' || password.trim() === '') {
      setError('Username and password are required.');
      return;
    };

    if(password.length < 6 ) {
      setError('Password must be at least 6 characters long.');
      return;
    };


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      setError('Please enetr a valid email address');
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
        <br />
        <label 
          htmlFor="email">
          Email:
          <input 
          type="email" 
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </label>
        <label 
        htmlFor="birthday">
          Birthday:
          <input 
          type="date" 
          placeholder="Enter your birth date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
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