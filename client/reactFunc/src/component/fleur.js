const Fleur = (props) => {
    return ( 
        <>
        
        <div className="col-lg-3 col-md-6 mb-4 container d-flex justify-content-center align-items-center">
                <div className="card" >
                    <img src={props.fleur.image} className="card-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.fleur.nom}</h5>
                        <p className="card-text">{props.fleur.discr}</p>
                       

                    </div>
                </div>       
            </div>
        
        </>
     );
}
 
export default Fleur;
