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
      <div className="cartItems">
        {fulldata.map((value) => {
          if (cartItems[value.id] !== 0)
            return <CartItem data={value} key={value.id} />;
          else return <></>;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            <b>
              Total: ${Math.round((totalAmount + Number.EPSILON) * 100) / 100}
            </b>
          </p>
          <div>
            <button onClick={() => emptyCart()}>Empty Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
      <div>
        <button className="backtoshop" onClick={() => nav("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
