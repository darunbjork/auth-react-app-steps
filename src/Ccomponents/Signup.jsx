import React, { useState } from "react";

const Signup = () => {

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Signup Username', username);
    console.log('Signup password', password);

    setUsername('');
    setPassword('');
    
    alert('you created accoutn successfully with the usernam ' + username);
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
        <button type="submit">Signup</button>
      </form>
    </div>
  )
};

export default Signup;