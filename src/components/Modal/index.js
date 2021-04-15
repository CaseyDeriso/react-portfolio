import React from 'react'

export default function Modal({ onClose, currentPhoto}) {
  
  return (
    <div>
      <div>
        {/* <h3>{name}</h3> */}
        <img src={require(`../../assets/photos/${currentPhoto}`).default} alt={currentPhoto}/>
        <button onClick={onClose}>Close Screenshot</button>
      </div>
    </div>
  )
}
