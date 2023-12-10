import { useState } from 'react';

import React from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Add your login logic here (authentication, validation, etc.)
      console.log('Username:', username);
      console.log('Password:', password);
  
      // Reset form fields after submission
      setUsername('');
      setPassword('');
    };
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="submit" className="log_btn btn-primary">
          Log In
        </button>  
        </div>
        
      </form>
    );
}


