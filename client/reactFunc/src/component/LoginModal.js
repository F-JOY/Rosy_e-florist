import React from 'react'
import Login from '../pages/login'
import { useState } from "react";
export default function LoginModal() {
    
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
      // Toggle the visibility of the login form
      setShowLoginForm(!showLoginForm);
    };
  return (

    <div
    className="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">   
        <div className="modal-body">
            <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
            <Login/>
        </div>
       
      </div>
    </div>
  </div>
  )
}
