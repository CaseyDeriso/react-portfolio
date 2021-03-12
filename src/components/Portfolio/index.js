import React from "react";
import styled from "styled-components";

const PortfolioDiv = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 0 10px;
`

const Project = styled.div`
  background-color: #0081a7;
  padding: 8px;
`

function Portfolio(props) {
  const { projects } = props.section
  console.log(projects)
  return (
    <PortfolioDiv>
      {projects.map((project, i) => {
        const  {name, description} = project;
        return (
        <Project key={i} >
          <h4>{name}</h4>
          <p>{description}</p>
        </Project>
        )
      })}
    </PortfolioDiv>
  )
}

export default Portfolio