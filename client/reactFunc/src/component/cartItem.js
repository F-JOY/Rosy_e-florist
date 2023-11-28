import React from 'react'

export default function CartItem(props) {
    const bouquet=props.item
  return (
    <div className='d-block'>
    <div className="cart-items container d-flex justify-content-center align-items-center">
      <div>
        <img src={bouquet.image} alt={bouquet.nom} className="item-image" />
        <div className='text-center'>
          <h5>{bouquet.nom}</h5>
          <h6>Prix: ${bouquet.prix}</h6>
        </div>
      </div>
     
    </div> 
    <div className="container d-flex justify-content-center align-items-center">
         <button  className="remove-button" onClick={() => props.onRemove(bouquet.id)}>Remove</button>
    </div>
   
    </div>
  )
}
