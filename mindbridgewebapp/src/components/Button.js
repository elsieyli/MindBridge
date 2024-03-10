import React from 'react'
import "../styles/Button.css"

function Button({ image, audio, text, className}) {
  const playAudio = () => {
    if (audio) {
      const audioClip = new Audio(audio);
      audioClip.play()
        .catch(error => console.error("Error playing audio:", error));
    }
  };

  return (
    <div 
    className="button" 
    onClick={playAudio}
    >
    <img src={image} alt={text} className={`img ${className}`}/>
    <p className="button-text">{text}</p>
    </div>
  );
}

export default Button;