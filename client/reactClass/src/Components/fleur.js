import React, { Component } from 'react'

export default class Fleur extends Component {
  render() {
    const {fleur}=this.props
    return (
      <>
     
      <div className="card card-form" >
          <img src={fleur.image} className="card-image" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{fleur.nom}</h5>
              <p className="card-text">{fleur.discr}</p>
             

          </div>
      </div>       
      
      </>


    )
  }
}
