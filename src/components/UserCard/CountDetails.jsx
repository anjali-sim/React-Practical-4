import React from "react";
import PropTypes from "prop-types";
import CountDetailsStyle from "@UserCard/index";

function CountDetails(props) {
  const { currentPlanCount, totalPlanCount } = props;
  return (
    <CountDetailsStyle>
      <div className="reviewed">
        <div className="currentPlanCountStyle">{currentPlanCount}</div>
        <div className="clicksReviewed">clicks reviewed</div>
      </div>
      <div className="verticalLineStyle"></div>
      <div className="monthsClicks">
        <div className="totalPlanCountStyle">{totalPlanCount}</div>
        <div className="monthlyClicks">Monthly clicks</div>
      </div>
    </CountDetailsStyle>
  );
}

CountDetails.propTypes = {
  currentPlanCount: PropTypes.number.isRequired,
  totalPlanCount: PropTypes.number.isRequired,
};

export default CountDetails;
