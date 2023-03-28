import React, { createContext, useState } from "react";
import PRODUCTS from "../products";

export const ShopContext = createContext(null);

let fulldata = [];

const getDefautCart = () => {
  const { data } = PRODUCTS();
  fulldata = data;

  const datalength = 20 + 1;

  let cart = {};

  for (let i = 1; i < datalength; i++) {
    cart[i] = 0;
  }
  //console.log(datalength);
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefautCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let info = fulldata.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * info.price;
      }
    }
    return totalAmount;
  };

  const emptyCart = () => {
    for (let i = 1; i < 21; i++) {
      setCartItems((prev) => ({ ...prev, [i]: 0 }));
    }
  };

  //select category
  const [selectCat, setSelectCat] = useState("all");
  const onCatFilter = (cat) => {
    setSelectCat((prev) => (prev = cat));
  };

  //selected popup
  const [popup, setPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const handleClickOpenPopup = (id) => {
    setPopup((prev) => (prev = true));
    setSelectedId((prev) => (prev = id));
  };
  const closePopup = () => {
    setPopup((prev) => (prev = false));
  };

  //end selected popup

  const contextValue = {
    cartItems,
    fulldata,
    selectCat,
    popup,
    selectedId,

    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    emptyCart,
    onCatFilter,
    handleClickOpenPopup,
    closePopup,
  };

  console.log("");

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
