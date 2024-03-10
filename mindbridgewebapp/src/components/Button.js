import React from 'react'
import "../styles/Button.css"

function Button({ image, audio }) {
  return (
    <div
      className="Button"
      onClick={() => {
        
      }}
    >
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    </div>
  );
}

export default Button;