import React from "react";
import ClicksReviewedStyle from "@src/styled/ClicksReviewed.style";
import PropTypes from "prop-types";

const ClicksReviewed = (props) => {
  const { currentPlanCount } = props;
  return (
    <ClicksReviewedStyle>
      <div className="reviewed">
        <div className="currentPlanCountStyle">{currentPlanCount}</div>
        <div className="clicksReviewed">clicks reviewed</div>
      </div>
    </ClicksReviewedStyle>
  );
};

ClicksReviewed.propTypes = {
  currentPlanCount: PropTypes.number.isRequired,
};

export default ClicksReviewed;
