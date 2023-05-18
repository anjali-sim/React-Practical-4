import React from "react";
import PropTypes from "prop-types";
import { ProfilePictureCardStyle } from "@src/styled/ProfilePictureCard.style";
import UserDetailCardStyle from "@src/styled/UserDetailCard.style";
import CountDetails from "./CountDetails";
import PlanDetails from "./PlanDetails";
import UserInformation from "./UserInformation";

const UserDetailsCard = (props) => {
  const { profile, firstName, lastName, email } = props;
  const totalPlanCount = 5000;
  // to generate random plan count for the users
  const currentPlanCount = Math.floor(Math.random() * 4000);
  // to calculate the width of the plan based on the plan counts
  const width = (currentPlanCount * 100) / totalPlanCount;

  return (
    <UserDetailCardStyle>
      <ProfilePictureCardStyle src={profile} alt={firstName} />
      <UserInformation
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
      <PlanDetails width={`${width}%`} />
      <CountDetails
        totalPlanCount={totalPlanCount}
        currentPlanCount={currentPlanCount}
      />
    </UserDetailCardStyle>
  );
}

UserDetailsCard.propTypes = {
  profile: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserDetailsCard;
