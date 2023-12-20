import React from "react";
import { useState, useEffect } from "react";


export default function BqFlowres(props) {
  const [Bflwr, setBflwr] = useState(props.Fleurs);
  useEffect(() => {
    console.log("bouquet :" + props.Bouquet.image);
  }, []);
  return (
    <>
      <div>
        <h5>Fleurs:</h5>
        {Bflwr.map((flower, index) => (
          <div key={index} className="d-flex">
            <img src={flower.image} alt={flower.nom} className="BqflwrImg" />
            <div className="d-block mt-2">
              <h6>{flower.nom}</h6>
              <div className="d-flex ">
                <div> prix: {flower.prix} DA </div>
                <span className="mx-4"></span>
                <div> Quantity: {flower.ContientFleur.quantite}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}
