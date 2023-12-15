import Fleur from "../component/fleur";
import { useEffect, useState } from "react";
import getDBdata from "../request";
export default function Fleurs(props){
  const [fleurs, setFleurs] = useState([]); 
  useEffect(() => {
    const fetchFleurs = async () => {
      try {
        const data = await getDBdata('/api/Fleurs/db', 'GET');
        setFleurs(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
    };
    fetchFleurs();
  }, []);
    return(
        <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>Decouvrir Nos fleurs </h1>
        </div>
      <div className="container">
        <div className="row">
          {fleurs.map((fleur) => (
          <Fleur fleur={fleur}/>
          ))}
        </div>
      </div>
    </>
    );

}