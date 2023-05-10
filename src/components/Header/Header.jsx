import React from "react";
import "./Header.css";
import Logo from "../../content/logo.png";
import Cart from "../../content/cart.png";
// import Bars from "../../content/bars.png";


const Header = () => {

  
    return (
    <div className="header">

        <img src={Logo} alt="" className="logo" />

          <ul className="shop-menu">
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
