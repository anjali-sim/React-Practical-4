import React from "react";
import NavbarStyle from "@src/styled/Navbar.style";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="nameStyle">Name</div>
      <div className="statusStyle">Status</div>
      <div className="accessStyle">Access</div>
    </NavbarStyle>
  );
}

export default Navbar;
