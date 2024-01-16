import React, { useState, useEffect } from 'react';
import Login from '../pages/login';

export default function LoginModal(props) {
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    // If the login is successful, hide the login form
    if (!showLoginForm) {
      // Additional actions you want to perform after login
      // ...
    }
  }, [showLoginForm]);

  const handleClose = () => {
    setShowLoginForm(false);
  };

  return (
    <div className={`modal ${showLoginForm ? 'fade' : ''}`} id="staticBackdrop"  data-bs-backdrop="false" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Connexion</h5>
          
          </div>
          <div className="modal-body">
            {showLoginForm && <Login onClose={handleClose} onLogin={props.onLogin} />}
          </div>
        </div>
      </div>
    </div>
  );
}
