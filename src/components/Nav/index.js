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
  color: tomato;
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
    document.title = "test";
  }, [sectionSelected]);

  return (
    <NavBar>
      <HeaderText>Casey Deriso</HeaderText>
      <ButtonWrapper>
        {sections[0].map((selection) => {
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
        {/* 
        <NavElement
          onClick={(e) => setSectionSelected(e.target.textContent)}
        >
          Contact
        </NavElement>
        <NavElement
          className={sectionSelected === sections[0][1] && 'active'}
          onClick={(e) => setSectionSelected(e.target.textContent)}
        >
          Resume
        </NavElement>
        <NavElement
          className={sectionSelected === sections[0][2] && 'active'}
          onClick={(e) => setSectionSelected(e.target.textContent)}
        >
          Portfolio
        </NavElement>
        <NavElement
          className={sectionSelected === sections[0][3] && 'active'}
          onClick={(e) => setSectionSelected(e.target.textContent)}
        >
          About Me
        </NavElement> */}
      </ButtonWrapper>
    </NavBar>
  );
}

export default Nav;
