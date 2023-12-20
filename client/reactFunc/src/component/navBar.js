import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { state } from "../data/state";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";

import LoginModal from "./LoginModal";

import ProfilMenu from "./profilMenu";
export default function NavBar(props) {
  const [cartItemCount, setCartItemCount] = useState(0);
 const [userData, setuserData] = useState({});
 const [connect, setconnect] = useState(localStorage.getItem("isAuth"));

 const keysToRemove = ['userName', 'isAuth','isAuthontificated','UserToken'];
 
 
 function removeItemsFromLocalStorage(keys) {
  keys.forEach(key => {
    localStorage.removeItem(key);
  });
}
 function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
}

  const handleLoginSuccess = () => {
    console.log('handleloginsuccess')
    setconnect(true)
    props.reRender();
    setuserData(props.userData)
   
  };
  const handledeConnect = () => {
    props.reRender();
   removeItemsFromLocalStorage(keysToRemove);
     deleteAllCookies();
    setconnect(false)
    setuserData({})
  };
  useEffect(() => {
    console.log('logseccus changed')
   // console.log(props.userData)
    const handleStorageChange = () => {
      const updatedItemCount = JSON.parse(localStorage.getItem("nombre")) || 0;
      setCartItemCount(updatedItemCount);
      
    };

    window.addEventListener("storage", handleStorageChange);

    // Charger le nombre d'articles au montage du composant
    const storedItemCount = JSON.parse(localStorage.getItem("nombre")) || 0;
    setCartItemCount(storedItemCount);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
  }, [connect,userData]);

  return (
    <>
      <div className="bg-color">
        <nav className="navbar navbar-expand-sm navbar-light ">
          <a className="navbar-brand" href="/">
            <img
              src="http://localhost:5000/img/logo3.png"
              alt="..."
              className="logoform"
            />
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
              {state.navigation.map((nav) => (
                <li key={nav.id} className="nav-item">
                  <Link to={nav.path} className="nav-link active">
                    {nav.isCmpt && connect ? props.userData.nomComplet : nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={"/pannier"}>
              <IconButton>
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
            {!connect ? (
              <button
                className="btn btn-color my-2 my-sm-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
               
              >
                Connexion
              </button>
            ) : (
              <ProfilMenu handledeConnect={handledeConnect}/>
            )}
          </div>
         {!connect &&  <LoginModal onLogin={handleLoginSuccess} />}
        </nav>
      </div>
    </>
  );
}
