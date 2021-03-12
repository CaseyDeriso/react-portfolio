import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import "./index.css";
import Portfolio from "./components/Portfolio";

const MainElement = styled.main`
  background-color: #fdfcdc;
  height: 100vh;
`;
const App = () => {
  const [sections] = useState([
    {
      name: "About Me",
      description: `
      I am a Software Developer with an extensive background as an automotive technician. I recently earned a Certificate in Web Development from the University of Texas at Austin, where I was able to develop skills in HTML, CSS, and JavaScript.

      I graduated from ACC with an Associate of Applied Science and began my career as a technician at Volkswagen. As a technician, I am responsible for staying educated on all electrical, mechanical and software based diagnostics procedures, new technical information and maintaining/repairing complex automotive systems.

      My most rewarding contribution to the team at Volkswagen and Audi has been mentoring new technicians. I teach them key skills such as proper repair documentation and managing their time, which lead to their success as technicians.

      I am positioned to place a strong emphasis on working collaboratively with a like-minded team to ensure optimal results within any organization.`,
    },
    {
      name: "Portfolio",
      description: "I've done some cool things.",
      projects: [
        {
          name: "Wo-Ve-Mi",
          technologies: ["HTML5", "CSS3", "JavaScript", "Jquery"],
          description: `A business address search engine highlighting Women, Veteran and
          Minority owned estalishments. Data from the SAM api is displayed
          with dymanically created cards and Mapbox api.`,
          link: "https://jenniferfadare.github.io/Wo-Ve-Mi/",
        },
        {
          name: "D.O.G.S.",
          technologies: ["Node.js", "Express.js", "Sequelize", "Handlebars"],
          description: `A full-stack dog-themed social media website to connect dog owners 
          searching for play-mates for their furry friends. `,
          link: "https://murmuring-taiga-40351.herokuapp.com/",
        },
        {
          name: "Tech Blog",
          technologies: ["Node.js", "Express.js", "Sequelize", "Handlebars"],
          description: `A blog-style CMS. This project is my first complete full stack application. 
          Sign up and post a blog!`,
          link: "https://guarded-escarpment-07152.herokuapp.com/",
        },
        {
          name: "Weather Dashboard",
          technologies: ["HTML5", "CSS3", "JavaScript"],
          description: `A weather app using the Open Weather api. 
          This application allows users to search for cities to see the forecast. 
          Previous cities are saved in local storage and displayed on the dashboard for quick reference.`,
          link: "https://caseyderiso.github.io/Weather-Dashboard",
        },
        {
          name: "Pizza-Hunt",
          technologies: ["JavaScript", "MongoDB", "Mongoose ODM", "Express.js"],
          description: `A pizza themed social website where users can post their favorite pizza toppings.
          Users also can comment on pizzas and reply to comments. All data is stored in a MongoDB database hosted on MongoDB Atlas.`,
          link: "https://caseyderiso.github.io/Weather-Dashboard",
        },
      ],
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
      case sections[1].name:
        return <Portfolio section={sections[1]}></Portfolio>;
      case sections[2].name:
        return <div>{sections[2].description}</div>;
      case sections[3].name:
        return <Resume></Resume>;

      default:
        return <div>This is my website</div>;
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
