
import Tooltip from "@mui/material/Tooltip";
import flwrTag from "../images/flwrTag.png";
import { IconButton } from "@mui/material";
import FlwrPrice from "./flwrPrice";
const Fleur = (props) => {
    
  return (   
    <>
      <div className="col-lg-4 col-md-6  d-flex justify-content-center align-items-center "> 
        <div className="card Fcardform m-4 ">
          {props.role==='utilisateur' && 
          <Tooltip title={<FlwrPrice prix={props.fleur.prix}/>} placement="top" arrow  >
            <IconButton  style={{ position: "absolute", top: "-10px", left: "96%" }}>
              <img src={flwrTag} alt="..." style={{ height: "50px", width: "50px"  }} />
            </IconButton>
          </Tooltip>
          }
          
          <img src={props.fleur.image} className="card-image" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{props.fleur.nom}</h5>
            <p className="card-text">{props.fleur.descr}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fleur;
