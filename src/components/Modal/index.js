import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(125, 125, 125, 0.8);
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5em 15em;
  @media only screen and (max-width: 1000px) {
    padding: 5em 2em;
  }
  @media only screen and (max-width: 700px) {
    padding: 5em 2em;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Close = styled.button`
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(175, 175, 175, 0.4);
  position: absolute;
  top: 6.5em;
  right: 19em;
  @media only screen and (max-width: 1000px) {
    width: 1.8em;
    height: 1.8em;
    right: 3em;
    top: 6.5em;
  }
`;

export default function Modal({ onClose, currentPhoto }) {
  return (
    <ModalBackdrop>
      <ImageContainer>
        {/* <h3>{name}</h3> */}
        <Image
          src={require(`../../assets/photos/${currentPhoto}`).default}
          alt={currentPhoto}
        />
        <Close onClick={onClose}>X</Close>
      </ImageContainer>
    </ModalBackdrop>
  );
}
