import React, { Component } from 'react'
import Fleur from '../Components/fleur'
export default class Fleurs extends Component {
  render() {
    const {fleurs}=this.props
    return (
      <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
         <h1>Decouvrir Nos Fleurs </h1>
         </div>
       <div className="container ">
         <div className="row">
           {fleurs.map((fleur) => (
            <div className="col-lg-3 col-md-6 mb-4 container d-flex justify-content-center align-items-center" key={fleur.id}>
               <Fleur fleur={fleur}/>
            </div>
          
           ))}
         </div>
       </div>
     </>
    )
  }
}
