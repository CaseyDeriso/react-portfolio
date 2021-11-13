import React, { useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.header`
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`;

const HeaderText = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

const NavElement = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000000;
`;
const ButtonWrapper = styled.div`
  display: flex;
  min-width: 75%;
  max-width: 50vw;
  justify-content: space-around;

`;

function Nav(props) {
  const { sections = [], sectionSelected, setSectionSelected } = props;

  useEffect(() => {
    document.title = sectionSelected === "Casey Deriso" ? sectionSelected : `Casey Deriso/${sectionSelected}`;
  }, [sectionSelected]);

  return (
    <NavBar>
      <HeaderText
        onClick={() => setSectionSelected("Portfolio")}
      >Casey Deriso</HeaderText>
      <ButtonWrapper>
        {sections.map((selection) => {
          return (
            <NavElement
              active={false}
              key={selection.name}
              onClick={(e) => setSectionSelected(e.target.textContent)}
              className={ sectionSelected === selection.name ? "active" : ""}
              href={ selection.name === "Resume" ? "https://docs.google.com/document/d/1efTyaB0IHJUTn9Pf5kbaV_EkIObX7bt0trklCyHYE7w/edit?usp=sharing" : "#"}
              target={ selection.name === "Resume" ? 
            "_blank" : "_self"}
            >
              {selection.name}
            </NavElement>
          );
        })}
      </ButtonWrapper>
    </NavBar>
  );
}

export default Nav;
