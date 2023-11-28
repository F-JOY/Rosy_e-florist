import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Footer from './Components/footer';
import NavBar from './Components/navBar';
import Bouquets from './Pages/bouquets';
import Fleurs from './Pages/fleurs'
import Compte from './Pages/compte'
import Home from './Pages/home'
export default class App extends Component {
  state = {
    bouquetsData: [], 
    fleursData:[],
  };
  componentDidMount() {
    fetch('/api/getBouquets')
    .then((response) => response.json())
      .then((data) => {
        this.setState({ bouquetsData: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
     
        fetch('/api/fleurs')
        .then((response) => response.json())
          .then((data) => {
            this.setState({ fleursData: data });
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      
  }

  render() {
    return (
    
     <div className="App">
      
      <Router>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bouquets" element={<Bouquets bouquets={this.state.bouquetsData}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={this.state.fleursData}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
        </Routes>
      <Footer />
      
      </Router>
     
     
    
    </div>
     
   
    )
  }
}

