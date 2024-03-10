import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Button from '../components/Button';
import "../styles/Home.css";
import "../styles/Emotion.css";

import SillyFace from '../assets/SillyFace.png';
import AngryFace from '../assets/AngryFace.png';
import SadFace from '../assets/SadFace.png';
import SickFace from '../assets/SickFace.png';
import HappyFace from '../assets/HappyFace.png';

import Sick from '../audio/Sick.m4a';
import Angry from '../audio/Angry.m4a';
import Happy from '../audio/Happy.m4a';
import Sad from '../audio/Sad.m4a';
import Silly from '../audio/Silly.m4a';


function Emotion() {
    const buttonsData = [
        { icon: SillyFace, text: 'Silly', audio: Silly, className: 'faces'},
        { icon: AngryFace, text: 'Angry', audio: Angry, className: 'faces'},
        { icon: SadFace, text: 'Sad', audio: Sad, className: 'faces'},
        { icon: SickFace, text: 'Sick', audio: Sick, className: 'faces'},
        { icon: HappyFace, text: 'Happy', audio: Happy, className: 'faces'},
    
    ];
  
    return (
      <div className="home">


        

        <NavBar />
        <div className="main-content">
          <div className="buttons-container">
          {buttonsData.map(buttonData => (
            <Button 
            key={buttonData.text}
            audio={buttonData.audio}
            image={buttonData.icon}
            text={buttonData.text}
            className={buttonData.className}
             />
          ))}
          </div>
          <SideBar />
        </div>
      </div>
    );
  }

  export default Emotion;