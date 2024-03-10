import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Button from '../components/Button';

import foodIcon from '../assets/FoodIcon.png';
import waterIcon from '../assets/water.png';
import outsideIcon from '../assets/outside.png';
import friendIcon from '../assets/friend.png';
import readIcon from '../assets/read.png';
import showerIcon from '../assets/shower.png';
import sleepIcon from '../assets/sleep.png';
import toiletIcon from '../assets/toilet.png';

import sleepAudio from '../audio/Sleep.m4a';
// If more icons are added, import them similarly

function Home() {
  const buttonsData = [
    { icon: foodIcon, text: 'Food' },
    { icon: waterIcon, text: 'Water' },
    { icon: outsideIcon, text: 'Outside' },
    { icon: friendIcon, text: 'Friend' },
    { icon: readIcon, text: 'Read' },
    { icon: showerIcon, text: 'Shower' },
    { icon: sleepIcon, text: 'Sleep', audio: sleepAudio }, // Assuming you only have audio for sleep
    { icon: toiletIcon, text: 'Toilet' },
    
  ];

  return (
    <div className="home">
      <NavBar />
      <div className="main-content">
        <div className="buttons-container">
          {buttonsData.map(buttonData => (
            <Button key={buttonData.text} audio={buttonData.audio} image={buttonData.icon} text={buttonData.text} />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default Home;