import React from 'react'
import "../style/Button.css"

function Button({ image, audio}) {
    const playAudio = () => {
        if (audio) {
          const audioClip = new Audio(audio);
          audioClip.play()
            .catch(error => console.error("Error playing audio:", error));
        }
      };//added
  return (
    <div
      className="Button"
      onClick={playAudio}
    >
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    </div>
  );
}

export default Button;