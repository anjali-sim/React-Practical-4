import styled from "styled-components";

// Style for the count detail present in card
const ClicksReviewedStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  & .currentPlanCountStyle {
    font-size: 25px;
    font-weight: 800;
  }

  & .clicksReviewed {
    font-size: 15px;
    opacity: 0.6;
  }
`;

export default ClicksReviewedStyle;
