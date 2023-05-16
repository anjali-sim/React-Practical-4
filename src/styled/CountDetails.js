import styled from "styled-components";

// Style for the count detail present in card
const CountDetailsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  & .currentPlanCountStyle {
    font-size: 25px;
    font-weight: 800;
  }

  & .totalPlanCountStyle {
    font-size: 25px;
    font-weight: 800;
  }

  & .clicksReviewed {
    font-size: 15px;
    opacity: 0.6;
  }

  & .monthlyClicks {
    font-size: 15px;
    opacity: 0.6;
  }

  & .verticalLineStyle {
    border: 0.2px solid rgba(0, 0, 0, 0.2);
  }
`;

export default CountDetailsStyle;
