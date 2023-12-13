const Fleur = (props) => {
    return ( 
        <>
        
        <div className="col-lg-3 col-md-6 mb-4 container d-flex justify-content-center align-items-center">
                <div className="card Fcardform" >
                    <img src={props.fleur.image} className="card-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.fleur.nom}</h5>
                        <p className="card-text">{props.fleur.descr}</p>
                       
                        <h5>prix: {props.fleur.prix} DA</h5>
                    </div>
                </div>       
            </div>
        
        </>
     );
}
 
export default Fleur;
