import React from "react";
import UserInformationStyle from "../../styled/UserInformation";

function UserInformation(props) {
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

export default UserInformation;
