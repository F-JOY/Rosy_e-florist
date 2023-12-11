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
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">   
        <div class="modal-body">
            <button
            type="button"
            class="btn-close"
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
