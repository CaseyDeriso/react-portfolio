import React, { useState } from "react";
import styled from "styled-components";

import Resume from "./components/Resume";
import Nav from "./components/Nav";
import "./index.css";

const pdfFile = "https://pdfhost.io/v/A3QyqTdFW_CaseyDerisoPDF.pdf"

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
        return <div>{sections[0][0].description}</div>;
      case sections[0][1].name:
        return <div>{sections[0][1].description}</div>;
      case sections[0][2].name:
        return <div>{sections[0][2].description}</div>;
      case sections[0][3].name:
        return <Resume pdf={pdfFile}></Resume>;

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
