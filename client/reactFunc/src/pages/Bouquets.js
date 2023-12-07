
import { useEffect, useState } from "react";
import Bouquet from "../component/bouquet";
import getDBdata from "../request";
export default function Bouquets(props) {
const [bouquets,setBouquets]=useState([]);
useEffect(() => {
  const fetchBouquets = async () => {
    try {
      const data = await getDBdata('/api/GetBouquetsFromDB', 'GET');
      setBouquets(data);
    } catch (error) {
      console.error('Error fetching bouquets:', error.message);
    }
    
  };
  fetchBouquets();
}, []);
  return (
    <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>{props.titre}</h1>
        </div>
    <div className="container">
        <div className="row">
          {props.bouquets.map((bouquet) => (
            <div  className="col-lg-4 col-md-4 mb-4 container d-flex justify-content-center align-items-center" >
               <Bouquet bouquet={bouquet} />
            </div>
           
          ))}
        </div>
    </div>
      
     
    </>
  );
}
