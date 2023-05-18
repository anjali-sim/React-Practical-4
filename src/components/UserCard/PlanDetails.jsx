import React from "react";
import PropTypes from "prop-types";
import PlanDetailsStyle from "@src/styled/PlanDetails.style";

const PlanDetails = (props) => {
  return (
    <PlanDetailsStyle width={props.width}>
      <label className="planUse">Plan Uses</label>
      <div className="totalPlan">
        <div className="currentPlan"></div>
      </div>
    </PlanDetailsStyle>
  );
}

PlanDetails.propTypes = {
  width: PropTypes.number.isRequired,
};

export default PlanDetails;
