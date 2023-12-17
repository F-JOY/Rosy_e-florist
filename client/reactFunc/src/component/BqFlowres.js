import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BqFlowres(props) {
    
  const [Bflwr, setBflwr] = useState(props.Fleurs);
     
  return (
    <>
    <div>
      <h3>Composition de fleurs:</h3>
      {Bflwr.map((flower, index) => (
        <div key={index} className='d-flex'>
          <img src={flower.image} alt={flower.nom} className='BqflwrImg' />
          <div className='d-block mt-2'>
             <h6>{flower.nom}</h6>
             <div className="d-flex ">
                <div> prix: {flower.prix} DA </div>
                <span className="mx-4"></span> 
                <div > Quantity: {flower.ContientFleur.quantite}</div>
             </div>
        
          </div>
         
        </div>
      ))}
     
     
    
    </div>
    <Link to="/BqInfo"  className="nav-link active">
      Personnalisée
      </Link>
    </>
  )
}
