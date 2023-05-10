import React from "react";
import "./Women.css";
import Blouse4 from "../../content/blouse4.jpg";
import Blouse2 from "../../content/blouse2.jpg";

const Women = () => {
  return (
    <div className="women-chapter">
      <div className="carousel">
        {/* first position */}
        <div className="women-content">
          <div className="card">
            <img src={Blouse4} className="blouse" />
            <img src={Blouse2} className="blouse-hover" />
          </div>
          <div className="description">
            <h4 className="name">Linen blouse</h4>
            <p className="blouse-desc">
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
        {/* second position */}
        <div className="women-content">
          <div className="card">
            <img src={Blouse4} className="blouse" />
            <img src={Blouse2} className="blouse-hover" />
          </div>
          <div className="description">
            <h4 className="name">Linen blouse</h4>
            <p className="blouse-desc">
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
        {/* third position */}
        <div className="women-content">
          <div className="card">
            <img src={Blouse4} className="blouse" />
            <img src={Blouse2} className="blouse-hover" />
          </div>
          <div className="description">
            <h4 className="name">Linen blouse</h4>
            <p className="blouse-desc">
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
      </div>
    </div>
  );
};

export default Women;
