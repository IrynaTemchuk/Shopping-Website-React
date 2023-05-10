import React from "react";
import "./Header.css";
import Logo from "../../content/logo.png";
import Bars from "../../content/bars.png";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
  
    return (
    <div>
      <div className="logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="menu">
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="shop-menu">
            <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
            >
              Women
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
            >
              Men
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
            >
              Kids
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          </ul>
        )}
      </div>
      <div className="shop-cart"></div>
    </div>
  );

};

export default Header;
