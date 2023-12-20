import Fleur from "../component/fleur";
import { useEffect, useState } from "react";
import { getDbFleurs } from "../fetchFunc/fetchFlowrs";
export default function Fleurs(props){
  const [fleurs, setFleurs] = useState([]); 
   const role =props.role
  useEffect(() => {
      getDbFleurs();
      setFleurs(JSON.parse(localStorage.getItem("Fleurs")))
     
    
  }, []);
    return(
        <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>Decouvrir Nos fleurs </h1>
        </div>
      <div className="container">
        <div className="row">
          {fleurs.map((fleur) => (
          <Fleur fleur={fleur} role={role}/>
          ))}
        </div>
      </div>
    </>
    );

}