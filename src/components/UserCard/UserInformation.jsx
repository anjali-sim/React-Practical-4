import React from "react";
import PropTypes from "prop-types";
import UserInformationStyle from "@src/styled/UserInformation.style";

const UserInformation = (props) => {
  const { firstName, lastName, email } = props;
  return (
    <UserInformationStyle>
      <p className="nameCardStyle">
        {firstName} {lastName}
        <span className="dotStyle">&#729;</span>
      </p>
      <p className="emailStyle">{email}</p>
      <p className="planStyle">Your Plan: Standard</p>
      <button>Active User</button>
    </UserInformationStyle>
  );
}

UserInformation.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserInformation;
