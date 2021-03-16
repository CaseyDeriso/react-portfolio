import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoContainer = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #0081a7;
  padding: 15px;
`;

const TextContainer = styled.div`
  font-family: arial;
  margin: 0 10%;
  grid-column: 3/5;
  white-space: pre-line;
`
const Text = styled.p`
  color: #000000;
  opacity: 87%;
  padding: 10px;
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
