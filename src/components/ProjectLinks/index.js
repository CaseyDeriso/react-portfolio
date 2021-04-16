import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  background-color: rgba(197, 197, 197, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  padding: 0.5em 1em;
  margin-top: 0.5em;
  border-radius: 0.5em;
  box-shadow: 0 0 0.2em rgba(197, 197, 197, 0.4);
`;

const Menu = styled.div`
  display: flex;
`;

const Icon = styled.a`
  color: rgba(17, 0, 255, 0.78);
  font-size: 2em;
  text-decoration: none;
  padding: 0.1em 0.2em;
`;

export default function ProjectLinks({ links, toggleModal, screenshot }) {

  return (
    <>
      <MenuContainer>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        Links:
        <Menu>
          <Icon
            href={links[0]}
            target="_blank"
            className="devicon-github-original-wordmark"
          />

          {links[1] && (
            <Icon href={links[1]} target="_blank" className="ri-chrome-line" />
          )}

          <Icon
            onClick={(e) => toggleModal(e, screenshot)}
            className="ri-screenshot-2-line"
          />
        </Menu>
      </MenuContainer>
    </>
  );
}