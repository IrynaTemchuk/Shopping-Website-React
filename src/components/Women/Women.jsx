import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Women.css";
import Blouse4 from "../../content/women/blouse4.jpg";
import Blouse2 from "../../content/women/blouse2.jpg";
import Dress6 from "../../content/women/dress6.jpg";
import Dress7 from "../../content/women/dress7.jpg";
import Short1 from "../../content/women/short1.jpg";
import Short3 from "../../content/women/short3.jpg";

const Women = () => {
  return (
    <div className="women-chapter">
          <Carousel fade
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
          >
      <Carousel.Item>
        {/* first position */}
        <div className="card">
          <div className="photos">
            <img src={Blouse4} alt="" className="photo" />
            <img src={Blouse2} alt="" className="photo-hover" />
          </div>
          <div className="description">
            <h4 className="name">Linen blouse</h4>
            <p className="desc">
              Cropped slot collar blouse with long sleeves. <br />
              Matching covered knot fastening at the front.
            </p>
            <hr />
            <p className="size-head">Size:</p>
            <ul>
              <li className="size">XS</li>
              <li className="size">S</li>
              <li className="size">M</li>
              <li className="size">L</li>
              <li className="size">XL</li>
            </ul>
            <hr />
            <h4 className="price">$100</h4>
            <hr />
            <button className="buy">Buy Now</button>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
 {/* second position */}
        <div className="card">
          <div className="photos">
            <img src={Dress6} alt="" className="photo" />
            <img src={Dress7} alt="" className="photo-hover" />
          </div>
          <div className="description">
            <h4 className="name">STUDDED MINI DRESS</h4>
            <p className="desc">
            Dress with a surplice neckline and long sleeves.<br />
            Elasticated waist with side ties. <br />
            Ruffled hem with stud appliqués.
            </p>
            <hr />
            <p className="size-head">Size:</p>
            <ul>
              <li className="size">XS</li>
              <li className="size">S</li>
              <li className="size">M</li>
              <li className="size">L</li>
              <li className="size">XL</li>
            </ul>
            <hr />
            <h4 className="price">$100</h4>
            <hr />
            <button className="buy">Buy Now</button>
          </div>
        </div>
        </Carousel.Item>
       
        {/* third position */}
        <Carousel.Item>
         <div className="card">
          <div className="photos">
            <img src={Short1} alt="" className="photo" />
            <img src={Short3} alt="" className="photo-hover" />
          </div>
          <div className="description">
            <h4 className="name">BERMUDA SHORTS WITH BELT</h4>
            <p className="desc">
            High-waist Bermuda shorts <br />
            with an elasticated waistband <br />
            and gathered details. <br />
            Faux leather belt. <br />
            Front patch pockets and a false rear welt pocket. <br />
            Front zip and button fastening.
            </p>
            <hr />
            <p className="size-head">Size:</p>
            <ul>
              <li className="size">XS</li>
              <li className="size">S</li>
              <li className="size">M</li>
              <li className="size">L</li>
              <li className="size">XL</li>
            </ul>
            <hr />
            <h4 className="price">$100</h4>
            <hr />
            <button className="buy">Buy Now</button>
          </div>
        </div>
      
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Women;
