import React, { useState } from "react";
import PropTypes from "prop-types";
import { Lock, Trash2 } from "react-feather";
import DropDown from "@UserList";
import UserStyle, {
  NameWrapper,
  UserDetailsStyle,
} from "@src/styled/UserCard.style";
import { ProfilePictureStyle } from "@src/styled/ProfilePicture.style";
import UserDetailsCard from "@UserCard/UserDetailsCard";

const UserCardTable = (props) => {
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
      <DropDown />
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

UserCardTable.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default UserCardTable;
