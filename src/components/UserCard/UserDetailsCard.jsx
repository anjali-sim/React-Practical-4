import React from "react";
import { ProfilePictureCardStyle } from "../../styled/ProfilePictureCard";
import UserDetailCardStyle from "../../styled/UserDetailCard";
import CountDetails from "./CountDetails";
import PlanDetails from "./PlanDetails";
import UserInformation from "./UserInformation";

function UserDetailsCard(props) {
  const { profile, firstName, lastName, email } = props;
  const totalPlanCount = 5000;
  const currentPlanCount = Math.floor(Math.random() * 4000);
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

export default UserDetailsCard;
