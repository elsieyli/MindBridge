import React from 'react'
import "../style/Button.css"

function Button({ image, audio, text }) {
  const playAudio = () => {
    if (audio) {
      const audioClip = new Audio(audio);
      audioClip.play()
        .catch(error => console.error("Error playing audio:", error));
    }
  };

  return (
    <div className="button" onClick={playAudio}>
      <img src={image} alt={text} />
      <p className="button-text">{text}</p>
    </div>
  );
}

export default Button;