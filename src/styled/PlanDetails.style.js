import styled from "styled-components";

// Style for the plan details present in card
const PlanDetailsStyle = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & .planUse {
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 0.2rem;
    padding-top: 0.3rem;
  }

  & .totalPlan {
    height: 0.3rem;
    width: 100%;
    background-color: rgba(245, 202, 122, 0.3);
    margin-top: 8px;
  }

  & .currentPlan {
    height: 0.3rem;
    width: ${(props) => props.width};
    background-color: orange;
  }
`;

export default PlanDetailsStyle;
