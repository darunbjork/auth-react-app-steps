import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import AuthContext  from "../AuthContext";
const Login = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const {login} = useContext(AuthContext);
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
    </form>
  </div>
  )
};

export default Login;