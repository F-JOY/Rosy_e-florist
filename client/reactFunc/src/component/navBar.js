import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { state } from "../data/state";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { IconButton } from "@mui/material";
import getDBdata from "../request";

export default function NavBar() {
const [cartItemCount, setCartItemCount] = useState(0);
const [userName, setuserName] = useState();
const [isAuthontificated, setisAuthontificated] = useState(false);
const login='user1'
useEffect(() => {
  
  const handleStorageChange = () => {
    const updatedItemCount = JSON.parse(localStorage.getItem("nombre")) || 0;
    setCartItemCount(updatedItemCount);
  };

  window.addEventListener('storage', handleStorageChange);

  // Charger le nombre d'articles au montage du composant
  const storedItemCount = JSON.parse(localStorage.getItem("nombre")) || 0;
  setCartItemCount(storedItemCount);

  // Nettoyer l'écouteur d'événements lors du démontage du composant
 
}, []);
const fetchUserByLogin = async () => {
  try {
    const data = await getDBdata(`/api/GetUserByLogin/${login}`, 'GET');
    console.log(data.nomComplet)
    setuserName(data.nomComplet)
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur avec login ${login}:`, error);
  }
};
 const handleConnect =()=>{
   setisAuthontificated(true)
 }
 const handledeConnect =()=>{
  setisAuthontificated(false)
  
 }
  return (
    <>
      <div className="bg-color">
        <nav className="navbar navbar-expand-sm navbar-light ">
          <a className="navbar-brand" href="/">
            <img src="http://localhost:5000/img/logo3.png" alt="..." className="logoform" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                {state.navigation.map((nav)=>(

              <li key={nav.id} className="nav-item">
                <Link to={nav.path} className="nav-link active">
                    {nav.isCmpt && isAuthontificated ? (userName):(nav.label)}
                 
                </Link>
              </li>

                ))}
            </ul>
            <form className="d-flex my-2 my-lg-0 p-2 ">
              <Link to={"/pannier"}>
                <IconButton>
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartOutlinedIcon/>
                </Badge>
                </IconButton>
              </Link>
              <button className="btn btn-color my-2 my-sm-0 "  onClick={()=>{fetchUserByLogin();setisAuthontificated(true)}}>
                   Connexion
              </button>

               {/*!isAuthontificated ? (
                <button className="btn btn-color my-2 my-sm-0 "  onClick={handleConnect}>
                   Connexion
              </button>
               ):(
                <button className="btn btn-color my-2 my-sm-0 " onClick={handledeConnect}>
                   deConnexion
              </button>
               )*/}
              
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
