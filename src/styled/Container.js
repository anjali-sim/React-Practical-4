import styled from "styled-components";

// Style for the main container
const ContainerStyle = styled.div`
  width: 72rem;
  height: 34rem;
  display: flex;
  position: relative;
  top: 5rem;
  background-color: white;
  border-radius: 2rem;
  margin: 1rem;
  padding: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ContainerStyle;
