import React from "react";
import CountDetailsStyle from "@src/styled/CountDetails.style";
import { ClicksReviewed } from "@UserCard";
import { MonthlyClicks } from "@UserCard";

const CountDetails = ({ currentPlanCount, totalPlanCount }) => {
  return (
    <CountDetailsStyle>
      <ClicksReviewed currentPlanCount={currentPlanCount} />
      <div className="verticalLineStyle"></div>
      <MonthlyClicks totalPlanCount={totalPlanCount} />
    </CountDetailsStyle>
  );
}

export default CountDetails;
