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
      
      console.log("Bouquet data changed:", B.like);
      console.log("refrech")
    }, [B,added]);

    const handleLike = async () => {
      console.log("handleLike called");
      try {
        const response = await fetch(`http://localhost:5000/api/bouquets/like/${props.bouquet.id}`, {
          method: 'PUT',
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          setB(data.bouquet)

        } else {
          console.error('Échec de la mise à jour du statut "like"');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
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
