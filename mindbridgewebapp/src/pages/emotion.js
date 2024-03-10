import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Button from '../components/Button';
import './home.css';

import SillyFace from '../assets/SillyFace.png';
import AngryFace from '../assets/AngryFace.png';
import SadFace from '../assets/SadFace.png';
import SickFace from '../assets/SickFace.png';
import HappyFace from '../assets/HappyFace.png';


function Emotion() {
    const buttonsData = [
        { icon: SillyFace, text: 'Silly' },
        { icon: AngryFace, text: 'Angry' },
        { icon: SadFace, text: 'Sad' },
        { icon: SickFace, text: 'Sick' },
        { icon: HappyFace, text: 'Happy' },
    
    ];
  
    return (
      <div className="emotion">
        <NavBar />
        <div className="main-content">
          <div className="buttons-container">
            {buttonsData.map((button, index) => (
              <Button key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
          <SideBar />
        </div>
      </div>
    );
  }

  export default Emotion;