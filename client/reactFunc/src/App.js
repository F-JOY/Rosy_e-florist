import { BrowserRouter,Routes,Route} from "react-router-dom";
import {  useEffect,useState } from "react";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import Bouquets from "./pages/Bouquets";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Fleurs from "./pages/Fleurs";
import ShoppingCart from "./pages/ShoppingCart";
import BqInfo from "./pages/BqInfo";
import { getBouquet } from "./fetchFunc/fetchBouquet";
import { getFleur } from "./fetchFunc/fetchFlowrs";
import { verifyLoginCookies, verifyLoginToken } from "./fetchFunc/fetchUser";
function App() {
  const [mesBouquets, setMesBouquets] = useState([]);
  const [mesFleur, setMesFleur] = useState([]);
  const [userData, setuserData] = useState({});
  const [role, setRole] = useState("visiteur");
  const [RR, setRR] = useState();
  const appRR=()=>{
    setRR(!RR)
  }
  useEffect(() => {
    if(localStorage.getItem("UserToken")){
       //verifyLoginToken().then(data=>setuserData(data)) 
    }

  getBouquet().then(bouquets=>setMesBouquets(bouquets))   
  getFleur().then(fleurs=>setMesFleur(fleurs))
 
  //console.log(document.cookie);
   if(document.cookie){
verifyLoginCookies().then(data=>setuserData(data))

    setRole("utilisateur")
   }else{
    setRole('visiteur')
   }
 
 
  }, [RR]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar  userData={userData} reRender={appRR}/>
        <Routes>
          <Route path="/" element={<Home bouquets={mesBouquets}/>} />
          <Route path="/bouquets" element={<Bouquets  titre="Découvrir Nos Bouquets" bouquets={mesBouquets} role={role}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={mesFleur} role={role}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
          <Route path="/pannier" element={<ShoppingCart/>} />
          <Route path="/bqInfo/:bouquetData" element={<BqInfo/>} />
          
        
        

          
        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;
