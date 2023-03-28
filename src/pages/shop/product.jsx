import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const SingleProduct = (props) => {
  const { id, title, price, image } = props.data;
  const { addToCart, cartItems, handleClickOpenPopup } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div>
      <div className="product">
        <div onClick={() => handleClickOpenPopup(id)}>
          <img src={image} alt={title} />
          <div className="description">
            <p className="product-title">
              <b>{title}</b>
            </p>
            <p>${price}</p>
          </div>
        </div>

        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
