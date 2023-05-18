import styled from "styled-components";

// Style for the status and access tabs present in navbar
const UserStyle = styled.div`
  height: auto;
  width: 55rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
  padding: 0 1rem;

  & .activeStyle {
    color: green;
    padding-right: 2.3rem;
    margin-left: 0.5rem;
  }

  & .ownerStyle {
    padding-right: 0rem;
    margin-right: 2rem;
  }

  // Media query
  @media (max-width: 960px) {
    width: 50rem;
  }

  @media (max-width: 900px) {
    width: 46rem;
  }
`;

export const UserDetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Style for the name and email present in card
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.5rem;

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    display: inline;
    margin: 0.1rem;
    padding: 0.1rem;
    opacity: 0.7;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    display: block;
    margin: 0.1rem;
    padding: 0.1rem;
    opacity: 0.7;
  }
`;

export default UserStyle;
