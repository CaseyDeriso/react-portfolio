import styled from "styled-components";

export const MainHeader = styled.h1`
padding-top: 1em;
font-family: Raleway;
font-style: normal;
font-weight: 800;
font-size: 2em;
line-height: 2.375em;
// identical to box height
color: #000000;
&:before {
  display: block;
  clear: left;
  content: "";
  height: 0.0625em;
  width: 2.8em;
  background-color: black; 
}
`

export const BodyText = styled.p`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 1.25em;
color: #000000;
width: clamp(45ch, 100%, 75ch);
`

export const Subheader = styled.p`
font-family: Raleway;
font-style: normal;
font-weight: normal;
font-size: 1.5em;
line-height: 1.75em;
color: #000000;
`

export const InputText = styled.p`
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 1.75em;
// identical to box height, or 175%
letter-spacing: 0.75px;
color: #000000;`