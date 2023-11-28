import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from'../images/logo.png'
export default class NavBar extends Component {
  render() {
    const state = [
    {id: 1, path: "/",  label: "Accueil" },
    {id: 2, path: "/bouquets",  label: "Bouquets"},
    { id: 3, path: "/fleurs",  label: "Fleurs" },
    {id: 4,  path: "/compte", label: "Mon Compte" },
  ];
    return (
      <>
      <div className="bg-color">
        <nav className="navbar navbar-expand-sm navbar-light ">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="..." className="logoform" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 pt-3 mt-lg-0">
                {state.map((nav)=>(

              <li key={nav.id} className="nav-item">
                <Link to={nav.path} className="nav-link active">
                 {nav.label}
                </Link>
              </li>

                ))}
                </ul>
              
            <form className="d-flex my-2 my-lg-0 p-2 ">
              <button className="btn btn-color my-2 my-sm-0 " type="submit">
                Connexion
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
    )
  }
}
