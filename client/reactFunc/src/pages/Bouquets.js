
import { useEffect, useState } from "react";
import Bouquet from "../component/bouquet";
import {getDbBouquet} from "../fetchFunc/fetchBouquet";

export default function Bouquets(props) {
const [bouquets,setBouquets]=useState([]);
useEffect(() => { 
 // getDbBouquet().then(bouquets => setBouquets(bouquets));
 getDbBouquet();
 setBouquets(JSON.parse(localStorage.getItem('Bouquets')) )
 }, []);

  return (
    <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>{props.titre}</h1>
        </div>
    <div className="container">
        <div className="row">
          {bouquets.map((bouquet) => (
            <div  className="col-lg-4 col-md-4 mb-4 container d-flex justify-content-center align-items-center" >
              
               <Bouquet bouquet={bouquet} />
            </div>
           
          ))}
        </div>
    </div>
      
     
    </>
  );
}
