import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/main" activeStyle>
            Main
          </NavLink>
          <NavLink to="/women" activeStyle>
            Women
          </NavLink>
          <NavLink to="/men" activeStyle>
            Men
          </NavLink>
          <NavLink to="/kids" activeStyle>
            Kids
          </NavLink>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;