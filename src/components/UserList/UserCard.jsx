import React, { useState } from "react";
import { Lock, Trash2 } from "react-feather";
import DropDownStyle from "../../styled/DropDown";
import UserStyle, {
  NameWrapper,
  UserDetailsStyle,
} from "../../styled/UserCard";
import { ProfilePictureStyle } from "../../styled/ProfilePicture";
import UserDetailsCard from "../UserDetailCard/UserDetailsCard";

function UserCard(props) {
  const { email, id, profile, firstName, lastName } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const firstRow = (
    <>
      <div className="activeStyle">Active</div>
      <div className="ownerStyle">Owner</div>
      <Lock color="#999999" />
    </>
  );

  const restRows = (
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
      <Trash2 color="#999999" />
    </>
  );

  return (
    <UserStyle>
      <UserDetailsStyle>
        <ProfilePictureStyle
          src={profile}
          alt=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          height="3rem"
          border="1.5rem"
        />
        <NameWrapper>
          <h4>
            {firstName} {lastName}
          </h4>
          <p>{email}</p>
        </NameWrapper>
      </UserDetailsStyle>
      {id === 1 ? firstRow : restRows}
      {isHovered && (
        <UserDetailsCard
          email={email}
          id={id}
          firstName={firstName}
          lastName={lastName}
          profile={profile}
        />
      )}
    </UserStyle>
  );
}

export default UserCard;
