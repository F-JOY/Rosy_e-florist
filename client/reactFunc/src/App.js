import NavBar from "./component/navBar";
import Bouquets from "./pages/Bouquets";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Fleurs from "./pages/Fleurs";
import Footer from "./component/footer";
import ShoppingCart from "./pages/ShoppingCart";
import { state } from "./data/state";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {  useEffect,useState } from "react";
function App() {
  const [mesBouquets, setMesBouquets] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/getBouquets')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMesBouquets(data);
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home bouquets={mesBouquets}/>} />
          <Route path="/bouquets" element={<Bouquets titre="Découvrir Nos Bouquets" bouquets={mesBouquets}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={state.Fleurs}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
          <Route path="/pannier" element={<ShoppingCart/>} />
        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;
