import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

import projects from "./projects.json"

import "./index.css";


const MainElement = styled.main`
  background-color: #fdfcdc;
  margin: 0;
`;
const App = () => {
  const [sections] = useState([
    {
      name: "Portfolio",
      description: "I've done some cool things.",
    },
    {
      name: "About Me",
      description: `
      I am a Software Developer with an extensive background as an Automotive Technician. I recently earned a Certificate in Web Development from the University of Texas at Austin, where I was able to develop skills in the MERN stack (MongoDB, Express, React, Node.js) and I graduated from ACC with an Associate of Applied Science in 2015.

      In my current position at The University of Texas at Austin, I work with a small but agile team of developers maintaining a complex platform built with Angular.js, Python, Django and a plethora of internal tools available in UT's development environment. My most impactful contribution to the team has been working towards transitioning the local development environment to use docker containers. I quickly familiarized myself with the code base, product and development tools to ensure what I built would perform reliably and offer the same functionality.

      I am positioned to place a strong emphasis on working collaboratively with a like-minded team to ensure optimal results within any organization.`,
    },
    {
      name: "Contact",
      description: "Contact me!",
    },
    {
      name: "Resume",
    },
  ]);

  function renderSwitch() {
    switch (sectionSelected) {
      case sections[1].name:
        return <AboutMe section={sections[1]}></AboutMe>;
      case sections[2].name:
        return <Contact></Contact>;

      default:
        return <Portfolio section={sections[1]} projects={projects}></Portfolio>;
    }
  }

  const [sectionSelected, setSectionSelected] = useState("Portfolio");

  return (
    <MainElement>
      <Nav
        sections={sections}
        setSectionSelected={setSectionSelected}
        sectionSelected={sectionSelected}
      ></Nav>
      {renderSwitch()}
    </MainElement>
  );
};

export default App;
