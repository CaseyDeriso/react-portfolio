import React from 'react'
import styled from "styled-components";

const ModalBackdrop = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(125,125,125, 0.8)
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em 2em;
`

const Image = styled.img`
  width: 100%
`

const Close = styled.button`
  position: absolute;
  right: 1em;
  top: 1em;
`

export default function Modal({ onClose, currentPhoto}) {
  return (
    <ModalBackdrop>
      <ImageContainer>
        {/* <h3>{name}</h3> */}
        <Image src={require(`../../assets/photos/${currentPhoto}`).default} alt={currentPhoto}/>
        <Close onClick={onClose}>X</Close>
      </ImageContainer>
    </ModalBackdrop>
  )
}
