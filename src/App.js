import React, { useState } from "react";
import Nav from "./components/Nav";
import "./index.css";

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

  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  return (
    <>
      <Nav
        sections={sections}
        setSectionSelected={setSectionSelected}
        sectionSelected={sectionSelected}
      ></Nav>
    </>
  );
};

export default App;
