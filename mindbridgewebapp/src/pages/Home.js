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
import tvIcon from '../assets/tv.png';
import toysIcon from '../assets/toys.png';

import sleepAudio from '../audio/Sleep.m4a';
import friendAudio from '../audio/friend.m4a';
import foodAudio from '../audio/Food.m4a';
import outsideAudio from '../audio/Outside.m4a';
import readAudio from '../audio/read.m4a';
import tvAudio from '../audio/Tv.m4a';
import toiletAudio from '../audio/Bathroom.m4a';
import showerAudio from '../audio/shower.m4a';
import waterAudio from '../audio/Water.m4a';
import toysAudio from '../audio/Toys.m4a';

// If more icons are added, import them similarly

function Home() {
  const buttonsData = [
    { icon: foodIcon, text: 'Food', audio: foodAudio },
    { icon: waterIcon, text: 'Water',audio: waterAudio },
    { icon: outsideIcon, text: 'Outside',audio: outsideAudio },
    { icon: friendIcon, text: 'Friend',audio: friendAudio},
    // { icon: readIcon, text: 'Read',audio: readAudio },
    // { icon: showerIcon, text: 'Shower',audio: showerAudio },
    // { icon: sleepIcon, text: 'Sleep', audio: sleepAudio }, // Assuming you only have audio for sleep
    // { icon: toiletIcon, text: 'Toilet',audio: toiletAudio },
    // { icon: tvIcon, text: 'TV',audio: tvAudio },
    // { icon: toysIcon, text: 'Toys',audio: toysAudio },
    // { icon: readIcon, text: 'Read',audio: readAudio },
    
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