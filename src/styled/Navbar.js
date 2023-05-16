import styled from "styled-components";

// Style for the Header
const NavbarStyle = styled.div`
  display: flex;
  height: auto;
  width: 55rem;
  margin: 0.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  opacity: 0.7;

  & .nameStyle {
    padding-left: 0.5rem;
    padding-right: 20.6rem;
    font-weight: 600;
  }

  & .statusStyle {
    padding-right: 2.3rem;
    margin-left: 0.5rem;
    font-weight: 600;
  }

  & .accessStyle {
    padding-right: 0rem;
    margin-left: 9.5rem;
    font-weight: 600;
  }

  // Media query
  @media (max-width: 960px) {
    width: 40rem;
    & .nameStyle {
      padding-right: 19.3rem;
    }
    & .statusStyle {
      padding-right: 0.4rem;
    }
  }

  @media (max-width: 900px) {
    & .nameStyle {
      padding-right: 18rem;
    }
    & .statusStyle {
      padding-right: 0rem;
    }
    & .accessStyle {
      margin-left: 8.5rem;
    }
  }
`;

export default NavbarStyle;
