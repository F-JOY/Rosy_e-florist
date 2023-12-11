import React from 'react'

export default function BqFlowres() {
    
      const flowers = [
        { name: 'Rose', image: "/image/dahlia.jpg", price: 2.5, quantity: 10 },
        { name: 'Tulip', image: "/image/freesia.jpg", price: 1.8, quantity: 5 },
     
      ];
  return (
    <div>
      <h3>Composition de fleurs:</h3>
      {flowers.map((flower, index) => (
        <div key={index} className='d-flex'>
          <img src={flower.image} alt={flower.name} className='BqflwrImg' />
          <div className='d-block mt-2'>
             <h6>{flower.name}</h6>
             <div className="d-flex ">
                <div> prix: {flower.price} DA </div>
                <span className="mx-4"></span> 
                <div > Quantity: {flower.quantity}</div>
             </div>
        
          </div>
         
        </div>
      ))}
    </div>
  )
}
