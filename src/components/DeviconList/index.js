import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  `

const Devicon = styled.p`
  font-size: 3em;
  padding: .2em;

  @media only screen and (max-width: 1000px) {
    font-size: 2.5em;
  };
  @media only screen and (max-width: 700px) {
    font-size: 2em;
  }
`

export default function DeviconList({ name, technologies }) {
  const switchIcon = (name) => {
    switch (name.toLowerCase()) {
      case "react.js":
        return "devicon-react-original-wordmark colored";
      case "sass":
        return "devicon-sass-original colored";
      case "javascript":
        return "devicon-javascript-plain colored";
      case "css3":
        return "devicon-css3-plain-wordmark colored";
      case "html5":
        return "devicon-html5-plain-wordmark colored";
      case "handlebars":
        return "devicon-handlebars-plain-wordmark";
      case "express.js":
        return "devicon-express-original";
      case "node.js":
        return "devicon-nodejs-plain colored";
      case "mongodb":
        return "devicon-mongodb-plain-wordmark colored";
      case "foundation.css":
        return "devicon-foundation-plain-wordmark";
      case "mysql":
        return "devicon-mysql-plain-wordmark colored";
      case "sequelize":
        return "devicon-mysql-plain";
      case "jquery":
        return "devicon-jquery-plain";
      case "aws":
        return "devicon-amazonwebservices-plain-wordmark colored";
      case "git":
        return "devicon-git-plain-wordmark colored"
      default:
        return null;
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
      />
      <IconContainer>
        {technologies.map((technology) => {
          return (
            <>
            {!switchIcon(technology) ? <p>{technology}</p> : 
              <Devicon aria-label={name} key={`${name}${technology}`} className={switchIcon(technology)} />
            }
            </>
          );
        })}
      </IconContainer>
    </>
  );
}
