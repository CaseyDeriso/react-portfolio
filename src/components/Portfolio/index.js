import React from "react";
import styled from "styled-components";

const PortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Project = styled.div`
  font-family: arial;
  background-size: cover;
  padding: 8px;
`;

const ProjectHeader = styled.h4`
  align-items: center;
  background-color: #fed9b7;
  opacity: 80%;
  display: inline-block;
  padding: 0 5px;
`

const ProjectText = styled.p`
  background-color: #fed9b7;
  opacity: 80%;
  display: inline-block;
  padding: 0 5px;
`


function Portfolio(props) {
  const { projects } = props;
  return (
    <PortfolioDiv>
      {projects.map((project, i) => {
        const { name, description, screenshot, link } = project;
        const background = require(`../../assets/photos/${screenshot}`).default
        return (
          <Project
            href={link}
            key={i}
            style={{
              backgroundImage: `url(${background})`
            }}
          >
            <ProjectHeader>{name}</ProjectHeader>
            <ProjectText>{description}</ProjectText>
          </Project>
        );
      })}
    </PortfolioDiv>
  );
}

export default Portfolio;
