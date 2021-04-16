import React, { useState } from "react";
import styled from "styled-components";
import DeviconList from "../DeviconList";
import ProjectLinks from "../ProjectLinks";
import Modal from "../Modal";

const PortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-family: arial;
  background-size: cover;
  padding: 8px;
`;

const ProjectHeader = styled.h4`
  background-color: rgba(197, 197, 197, 0.4);
  border-radius: 0.5em;
  display: flex;
  text-decoration: none;
  padding: 0.4em 1em;
  margin: 0.5em 0 0 0;
`;
// ${Project}:hover & {
//   display: inline-block
// };

const ProjectText = styled.p`
  background-color: rgba(197, 197, 197, 0.4);
  border-radius: 0.5em;
  display: flex;
  padding: 0.4em 1em;
  margin: 0.5em 0 0 0;
  font-size: 0.9em;
  width: clamp(34ch, 80%, 75ch);
`;
// ${Project}:hover & {
//   display: inline-block
// };

function Portfolio(props) {
  const { projects } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPhoto, setCurrentPhoto] = useState();

  function toggleModal(e, screenshot) {
    e.preventDefault();
    setCurrentPhoto(screenshot);
    setIsModalOpen(!isModalOpen);
  }
  return (
    <PortfolioDiv>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      {projects.map((project, i) => {
        const { name, description, links, technologies, screenshot } = project;
        return (
          <Project
            key={i}
            style={{
              backgroundColor: `hsl(${Math.floor(
                Math.random() * 360
              )}, 40%, 75%)`,
            }}
          >
            <ProjectHeader>{name}</ProjectHeader>
            <ProjectText>{description}</ProjectText>
            <DeviconList technologies={technologies}></DeviconList>
            <ProjectLinks links={links} screenshot={screenshot} toggleModal={toggleModal}/>
          </Project>
        );
      })}
    </PortfolioDiv>
  );
}

export default Portfolio;
