import React from "react";
import { MainHeader, BodyText } from "../../styles/textStyles";
import { AboutMain, AboutSection, AboutPhoto } from "../../styles/containers";
import DeviconList from "../DeviconList";

function AboutMe(props) {
  const { description, technologies } = props.section;
  return (
    <AboutMain>
      <AboutPhoto>
      <img src="https://picsum.photos/id/237/200/300" alt="Casey Deriso's headshot." />
      </AboutPhoto>
      <AboutSection>
        <MainHeader>Cool. Calm. Colleted. Casey</MainHeader>
        <BodyText>{description}</BodyText>
        <MainHeader>Technologies</MainHeader>
        <DeviconList technologies={technologies}></DeviconList>
      </AboutSection>
    </AboutMain>
  );
}
export default AboutMe;
