import React from "react";
import PlanDetailsStyle from "@styled/PlanDetails";

function PlanDetails(props) {
  return (
    <PlanDetailsStyle width={props.width}>
      <label className="planUse">Plan Uses</label>
      <div className="totalPlan">
        <div className="currentPlan"></div>
      </div>
    </PlanDetailsStyle>
  );
}

export default PlanDetails;
