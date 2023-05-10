import React from "react";
import "./Hero.css";
import Home from "../../content/Home.png"

const Hero = () => {

  
    return (
    <div className="hero">
        <img src={Home} alt="" className="cover"/>
        <h1 className="cover-header">Made for comfort</h1>
        <h4 className="cover-text">Explore our breezy summer collection now</h4>
    </div>
  );

};

export default Hero;