import React from "react";
import {NavbarStyle} from "@src/components/Navbar/index";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="nameStyle">Name</div>
      <div className="statusStyle">Status</div>
      <div className="accessStyle">Access</div>
    </NavbarStyle>
  );
}

export default Navbar;
