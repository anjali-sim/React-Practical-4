import React from "react";
import PropTypes from "prop-types";
import MonthlyClicksStyle from "@src/styled/MonthlyClicks.style";

const MonthlyClicks = (props) => {
  const { totalPlanCount } = props;
  return (
    <MonthlyClicksStyle>
      <div className="monthsClicks">
        <div className="totalPlanCountStyle">{totalPlanCount}</div>
        <div className="monthlyClicks">Monthly clicks</div>
      </div>
    </MonthlyClicksStyle>
  );
};

MonthlyClicks.propTypes = {
  totalPlanCount: PropTypes.number.isRequired,
};

export default MonthlyClicks;
