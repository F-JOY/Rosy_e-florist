import React from "react";
import { useState, useEffect } from "react";
import CartItem from "../component/cartItem";
export default function ShoppingCart() {
  const [ShoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("ShoppingCart")) || []
  );
  const handleRemoveItem = (itemId) => {
    const updatedCart = ShoppingCart.filter((item) => item.id !== itemId);
    localStorage.setItem("ShoppingCart", JSON.stringify(updatedCart));
    localStorage.setItem('nombre',JSON.parse(localStorage.getItem("ShoppingCart"))?.length)
    setShoppingCart(updatedCart);
  };

  return (
    <div className="container mt-4 cart-container">
      <h2>Votre Panier</h2>
      {ShoppingCart.length > 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {ShoppingCart.map((item, index) => (
              <div key={index} className="col ">
                <CartItem item={item} onRemove={handleRemoveItem}/>
              </div>
            ))}
          </div>
          <div className=" d-flex justify-content-center align-items-center" >
            <button className="btn btn-color mt-5" type="submit">
              Valider
            </button>
          </div>
        </>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  );
}
