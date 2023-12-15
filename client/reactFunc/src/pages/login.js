import { useState } from 'react';

import React from 'react'
import getDBdata from '../request';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const fetchUserByLogin = async (login) => {
      try {
        const data = await getDBdata(`/api/Users/${login}`, "GET");
        console.log(data.nomComplet);
        localStorage.setItem("isAuthontificated",true)
        localStorage.setItem("userName",data.nomComplet)
      } catch (error) {
        console.error(
          `Erreur lors de la récupération de l'utilisateur avec login ${login}:`,
          error
        );
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchUserByLogin(username)
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


