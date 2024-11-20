import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import AuthContext  from "../AuthContext";
const Login = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const {login} = useContext(AuthContext);
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username.trim() === '' || password.trim() === '') {
      setError('username and password are required');
      return;
    }

    if(password.length < 6 ) {
      setError('Pasword must be at least 6 characters long.');
      return;
    }

    login();
    naviagte("/");
    
    alert('Youu logged in successfully.')

    console.log('Login username:', username);
    console.log('Login password:', password);

   
  };
  return (
  <div>
    <h2>Login page</h2>
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
      <label htmlFor="password">
        Password:
        <input 
        type="password" 
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </label>
      <button type="submit">Login</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  </div>
  )
};

export default Login;