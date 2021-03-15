import React from "react";
import styled from "styled-components";

const PortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3vw);
  grid-template-rows: repeat(3, 25vh);
  @media only screen and (max-width: 750px) {
      grid-template-columns: repeat(2, 50vw);
      grid-template-rows: repeat(5, 25vh);
  };
  @media only screen and (max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(9, 30vh)
  }
`;

const Project = styled.a`
  color: #000000;
  font-family: arial;
  background-size: cover;
  padding: 8px;
  text-decoration: none;
`;

const ProjectHeader = styled.h4`
  background-color: #fed9b7;
  opacity: 80%;
  display: flex;
  text-decoration: none;
  padding: 0 5px;

`
  // ${Project}:hover & {
  //   display: inline-block
  // };

const ProjectText = styled.p`
  background-color: #fed9b7;
  opacity: 80%;
  display: flex;
  padding: 0 5px;
`
  // ${Project}:hover & {
  //   display: inline-block
  // };

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
