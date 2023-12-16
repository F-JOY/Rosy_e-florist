import { BrowserRouter,Routes,Route } from "react-router-dom";
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
function App() {
  const [mesBouquets, setMesBouquets] = useState([]);
  const [mesFleur, setMesFleur] = useState([]);
  useEffect(() => {
  getBouquet().then(bouquets=>setMesBouquets(bouquets))   
  getFleur().then(fleurs=>setMesFleur(fleurs))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home bouquets={mesBouquets}/>} />
          <Route path="/bouquets" element={<Bouquets  titre="Découvrir Nos Bouquets" bouquets={mesBouquets}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={mesFleur}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
          <Route path="/pannier" element={<ShoppingCart/>} />
          <Route path="/BqInfo" element={<BqInfo/>} />
        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;
