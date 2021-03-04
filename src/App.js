import React, { useState } from "react";
import Nav from "./components/Nav";
import "./index.css";
import styled from "styled-components";

const MainElement = styled.main`
  background-color: #fdfcdc;
  height: 100vh;
`;
const App = () => {
  const sections = useState([
    {
      name: "About Me",
      description: "I'm a dude, he's a dude, she's a dude, wer're all dudes!",
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
      case sections[0][0].name:
        return <div>{sections[0][0].description}</div>      
      case sections[0][1].name:
        return <div>{sections[0][1].description}</div>
      case sections[0][2].name:
        return <div>{sections[0][2].description}</div>
      case sections[0][3].name:
        return <div>{sections[0][1].description}</div>
      default:
        return <div>This is my website</div>;
    }
  }

  const [sectionSelected, setSectionSelected] = useState("Casey Deriso");

  console.log(sectionSelected === sections[0][3].name);
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
