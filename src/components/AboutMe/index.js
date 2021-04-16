import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 91vh;
  @media only screen and (max-width: 700px) {
    height: 89vh;
  }`;

const PhotoContainer = styled.div`
  display: flex;
  width: 13em;
  height: 13em;
  border-radius: 20px;
  overflow: hidden;
  background-color: #0081a7;
  padding: 1em;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: arial;
  margin: 0 10%;
  grid-column: 3/5;
  white-space: pre-line;
`
const Text = styled.p`
  width: clamp(45ch, 50%, 75ch);
  color: #000000;
  opacity: 87%;
  padding: .7em;
`

function AboutMe(props) {
  const { description } = props.section;
  return (
    <TitleDiv>
      <PhotoContainer>
        <img
          src={require("../../assets/photos/me.jpg").default}
          alt="Casey Deriso's headshot."
        />
      </PhotoContainer>
      <TextContainer><Text>{description}</Text></TextContainer>
    </TitleDiv>
  );
}
export default AboutMe;
