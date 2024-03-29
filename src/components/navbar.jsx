import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <h1>FunHub Hunter</h1>
        </Link>
        <Link to="/cart">
          <HiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
