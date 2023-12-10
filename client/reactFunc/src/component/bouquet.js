import { useState,useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Bouquet = (props) => {
  
    const [B, setB] = useState(props.bouquet);
   const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    const isBouquetInCart = existingCart.some(
      (item) => item.id === B.id
    );
    const [added,setAdded]=useState(isBouquetInCart);
    useEffect(() => {
   
    }, [B,added]);

    const handleLike = () => {
      console.log("handle like called");
    
      fetch(`/api/like/${props.bouquet.id}`, {
        method: "PUT",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Server response:", data); 
          setB(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        
        });
    };
  const handleAdd2Cart=()=>{
    const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    const isBouquetInCart = existingCart.some(
      (item) => item.id === B.id
    ); 
    
    if(!isBouquetInCart){
       const Cart = [...existingCart, B];
      localStorage.setItem("ShoppingCart", JSON.stringify(Cart));
      localStorage.setItem("nombre",JSON.parse(localStorage.getItem("ShoppingCart"))?.length)
      setAdded(!added)
    }
 
  }
 const handleRemove4mCart=()=>{
  const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
  const isBouquetInCart = existingCart.some(
    (item) => item.id === B.id
  );
  if(isBouquetInCart){
    const updatedCart = existingCart.filter(
      (item) => item.id !== B.id
    );
    localStorage.setItem("ShoppingCart", JSON.stringify(updatedCart));
    localStorage.setItem("nombre",JSON.parse(localStorage.getItem("ShoppingCart"))?.length)
     setAdded(!added)
  }
   
  }
  return (
    <>
     
        <div className="card">
          <img src={props.bouquet.image} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.bouquet.nom}</h5>
            <p className="card-text">{props.bouquet.descr}</p>
            <div className="d-flex justify-content-between align-items-end">
              <h5 className="col-md-6">prix: {props.bouquet.prix}</h5>
              
              <div className="ml-2">
              {!added ? (
                  <IconButton onClick={handleAdd2Cart} >
                    <AddShoppingCartIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleRemove4mCart}>
                    <ShoppingCartIcon className="itemAdded" />
                  </IconButton>
                )}
                

                <IconButton onClick={handleLike}>
                  {B.like ? (
                    <FavoriteIcon className="likedIcon" />
                  ) : (
                    <FavoriteBorderIcon className="likeIcon" />
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Bouquet;
