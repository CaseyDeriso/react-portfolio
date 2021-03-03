import React from "react";
import styled from "styled-components";

const NavBar = styled.header`
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px
`;

const HeaderText = styled.h1`
  color: tomato
`

const NavElement = styled.a`
  color: grey;
  cursor: pointer;
`
const ButtonWrapper = styled.div`
  display: flex;
  min-width: 75%;
  max-width: 50vw;
  justify-content: space-around;
`

function Nav(props) {
  return (
    <NavBar>
    <HeaderText>Casey Deriso</HeaderText>
    <ButtonWrapper>
      <NavElement onClick={()=> console.log("hi")}>Contact</NavElement>
      <NavElement>Resume</NavElement>
      <NavElement>Portfolio</NavElement>
      <NavElement>About Me</NavElement>
    </ButtonWrapper>
    </NavBar>
  );
}

export default Nav;
