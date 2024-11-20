import React, { useState } from "react";

const Login = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Youu logged in successfully.')

    console.log('Login username:', username);
    console.log('Login password:', password);
  };
  return (
  <div>
    <h1>Login page</h1>
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