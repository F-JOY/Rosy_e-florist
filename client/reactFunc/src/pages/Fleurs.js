import Fleur from "../component/fleur";

export default function Fleurs(props){
    return(
        <>
     <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>Decouvrir Nos fleurs </h1>
        </div>
      <div className="container ">
        <div className="row">
          {props.fleurs.map((fleur) => (
          <Fleur fleur={fleur}/>
          ))}
        </div>
      </div>
    </>
    );

}