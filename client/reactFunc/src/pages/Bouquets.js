
import Bouquet from "../component/bouquet";

export default function Bouquets(props) {

  return (
    <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>{props.titre}</h1>
        </div>
    <div className="container">
        <div className="row">
          {props.bouquets.map((bouquet) => (
            <div  className="col-lg-4 col-md-4 mb-4 container d-flex justify-content-center align-items-center" key={bouquet.id}>
               <Bouquet bouquet={bouquet} />
            </div>
           
          ))}
        </div>
    </div>
      
     
    </>
  );
}
