import styled from "styled-components";

// Style for the user card 
const UserDetailCardStyle = styled.div`
  width: 15rem;
  height: 24rem;
  padding: 20px 20px;
  background-color: white;
  box-shadow: 4px 4px 12px 4px 	#999999;
  border-radius: 24px;
  display: flex;
  z-index: 1;
  top: 12rem;
  right: 18rem;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  // Media query
  @media (max-width: 1550px) {
    right: 6rem;
  }

  @media (max-width: 1440px) {
    right: 4rem;
  }

  @media (max-width: 1360px) {
    right: 2rem;
  }

  @media (max-width: 900px) {
    right: 2rem;
  }

`;

export default UserDetailCardStyle;
