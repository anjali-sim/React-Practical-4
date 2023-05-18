import React from "react";
import DropDownStyle from "@src/styled/DropDown.style";

const DropDown = () => {
  return (
    <>
      <DropDownStyle>
        <option defaultChecked>Active</option>
        <option>Inactive</option>
      </DropDownStyle>
      <DropDownStyle>
        <option defaultChecked>Manager</option>
        <option>Read</option>
        <option>Employee</option>
      </DropDownStyle>
    </>
  );
};

export default DropDown;
