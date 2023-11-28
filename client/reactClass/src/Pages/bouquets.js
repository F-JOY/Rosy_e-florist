import React, { Component } from 'react'
import Bouquet from '../Components/bouquet'
export default class Bouquets extends Component {
  render() {
    const {bouquets} = this.props
    return (
      <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
         <h1>Découvrir nos Bouquets</h1>
         </div>
     <div className="container">
         <div className="row">
           {bouquets.map((bouquet) => (
             <div  className="col-lg-4 col-md-4 mb-4 container d-flex justify-content-center align-items-center" key={bouquet.id}>
                <Bouquet bouquet={bouquet} />
             </div>
            
           ))}
         </div>
     </div>
       
      
     </>
    )
  }
}
