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
`;

const HeaderText = styled.h1`
  color: #00AFB9;
  cursor: pointer;
`;

const NavElement = styled.a`
cursor: pointer;
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
        onClick={() => document.location = "/"}
      >Casey Deriso</HeaderText>
      <ButtonWrapper>
        {sections.map((selection) => {
          return (
            <NavElement
              active={false}
              key={selection.name}
              onClick={(e) => setSectionSelected(e.target.textContent)}
              className={ sectionSelected === selection.name ? "active" : ""}
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
