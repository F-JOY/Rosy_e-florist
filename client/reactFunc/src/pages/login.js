import { useState, useEffect } from "react";

import React from "react";
import { handleLogin } from "../fetchFunc/fetchUser";
export default function Login({ onClose, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(".");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const userData = await handleLogin(username, password);
      // Si la requête réussit, vous pouvez traiter la réponse ici
      // console.log('User data:', userData);
      setError("");
      onClose();
      onLogin();
      setUsername("");
      setPassword("");
    } catch {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="error-message">{error}</div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
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
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button type="submit" className="log_btn btn-primary"  data-bs-dismiss={error ? '' : 'modal'}>
          Log In
        </button>
      </div>
    </form>
  );
}
