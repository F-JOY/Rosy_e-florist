import React from 'react'
import { useParams } from 'react-router-dom';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {  IconButton } from "@mui/material";

export default function BqInfo() {
  const { bouquetData } = useParams();
  const bouquet = JSON.parse(decodeURIComponent(bouquetData));


  return (
    <>
   <div className="container mt-4 cart-container">
   
      <div className="row">
        <div  className="container-fluid d-flex justify-content-center align-items-center ">
         <div className="col-md-4">
          <img src={bouquet.image} alt={bouquet.nom} className="img-fluid" style={{height:'300px',width:'300px',borderRadius:'20px'}} />
        </div>
        <div className="col-md-4 m-5">
          <div >
            <div >
              <h2 >{bouquet.nom}</h2>
              <p >{bouquet.descr}</p>
              <p className="card-text">{bouquet.LikesCount} likes</p>
          <div className="d-flex justify-content-between align-items-end">
            <h5 className="col-md-6">Prix: {bouquet.prix} DA</h5>

            <div className="ml-2">
              {false ? (
                <IconButton >
                  <AddShoppingCartIcon />
                </IconButton>
              ) : (
                <IconButton >
                  <ShoppingCartIcon className="itemAdded" />
                </IconButton>
              )}

              <IconButton >
                {false ? (   
                      <FavoriteIcon className="likedIcon" />
                  
                ) : (
                  <FavoriteBorderIcon className="likeIcon" />
                )}
              </IconButton>
            </div>
          </div>
            </div>
          </div>
        </div> 
        </div>
        
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Composition de fleurs:</h2>
          <div className='d-flex justify-content-between align-items-end'>
             {bouquet.Fleurs.map((fleur) => (
              <div key={fleur.idFleur}>
                <img src= {fleur.image} style={{height:'70px' , width:'70px', borderRadius:'50%'}}/>
                {fleur.nom} - Quantité: {fleur.ContientFleur.quantite}
              </div>
            ))}
          </div>
           
          
        </div>
      </div>
    </div>

    </>
  )
}
