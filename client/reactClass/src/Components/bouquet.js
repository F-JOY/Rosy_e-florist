import React, { Component } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default class Bouquet extends Component {
  
  state = {
    bouquet: this.props,
    like: this.props.bouquet.like,
    added: false,
  };

  handleLike = () => {
    const { bouquet } = this.props;

    fetch(`/api/like/${bouquet.id}`, {
      method: "PUT",
    });
    this.setState((prevState) => ({
      like: !prevState.like,
    }));

    console.log(this.state.like);
  };
  handleCartAdd = () => {
    const b=this.state.bouquet
    const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
       const isBouquetInCart = existingCart.some(
      (item) => item.id === b.id
    );
    console.log(isBouquetInCart)
    this.setState({
      added: isBouquetInCart,
    });
    if(!isBouquetInCart){
       const Cart = [...existingCart, b];
      localStorage.setItem("ShoppingCart", JSON.stringify(Cart));
      
    }
     
    
  };
  handleCartRemove = () => {
    const existingCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
    const isBouquetInCart = existingCart.some(
      (item) => item.id === this.state.bouquet.id
    );
  console.log(isBouquetInCart)
    if (isBouquetInCart) {
      const updatedCart = existingCart.filter(
        (item) => item.id !== this.state.bouquet.id
      );
      localStorage.setItem("ShoppingCart", JSON.stringify(updatedCart));
      this.setState((prevState) => ({
        added: !prevState.added,
      }));
    }
  };
  render() {
    const { bouquet } = this.state.bouquet;
    return (
      <>
        <div className="card">
          <img src={bouquet.image} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{bouquet.nom}</h5>
            <p className="card-text">{bouquet.descr}</p>
            <div className="d-flex justify-content-between align-items-end">
              <h5 className="col-md-6">prix: {bouquet.prix}</h5>
              <div className="ml-2">
                {!this.state.added ? (
                  <IconButton onClick={this.handleCartAdd}>
                    <AddShoppingCartIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={this.handleCartRemove}>
                    <ShoppingCartIcon className="itemAdded" />
                  </IconButton>
                )}

                <IconButton onClick={this.handleLike}>
                  {this.state.like ? (
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
  }
}
