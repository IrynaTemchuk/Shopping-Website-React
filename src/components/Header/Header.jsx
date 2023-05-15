import React from "react";
import "./Header.css";
import Logo1 from "../../content/general/logo(1).png";
import Cart from "../../content/general/cart.png";
// import Bars from "../../content/bars.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo1} alt="" className="logo" />

      <ul className="shop-menu">
        <li className="main">Main</li>
        <li className="women">Women</li>
        <li className="men">Men</li>
        <li className="kids">Kids</li>
        <li className="home">Home</li>
      </ul>

      <img src={Cart} alt="" className="shop-cart" />
    </div>
  );
};

export default Header;
