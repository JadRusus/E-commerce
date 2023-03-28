import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const { cartItems, fulldata, getTotalCartAmount, emptyCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const nav = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {fulldata.map((value) => {
          if (cartItems[value.id] !== 0)
            return <CartItem data={value} key={value.id} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: ${totalAmount}</p>

          <button onClick={() => emptyCart()}>Empty Cart</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
      <div className="checkout">
        <button onClick={() => nav("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};
