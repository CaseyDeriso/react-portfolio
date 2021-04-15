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
  height: 150vh;
  margin: 0;
`;
const App = () => {
  const [sections] = useState([
    {
      name: "About Me",
      description: `
      I am a Software Developer with an extensive background as an automotive technician. I recently earned a Certificate in Web Development from the University of Texas at Austin, where I was able to develop skills in the MERN stack (MongoDB, Express, React, Node.js).

      I graduated from ACC with an Associate of Applied Science and began my career as a technician at Volkswagen. As a technician, I am responsible for staying educated on all electrical, mechanical and software based diagnostics procedures, new technical information and maintaining/repairing complex automotive systems.

      My most rewarding contribution to the team at Volkswagen and Audi has been mentoring new technicians. I teach them key skills such as proper repair documentation and managing their time, which lead to their success as technicians.

      I am positioned to place a strong emphasis on working collaboratively with a like-minded team to ensure optimal results within any organization.`,
    },
    {
      name: "Portfolio",
      description: "I've done some cool things.",
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
      case sections[0].name:
        return <AboutMe section={sections[0]}></AboutMe>;
      case sections[2].name:
        return <Contact></Contact>;

      default:
        return <Portfolio section={sections[1]} projects={projects}></Portfolio>;
    }
  }

  const [sectionSelected, setSectionSelected] = useState("Casey Deriso");

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
