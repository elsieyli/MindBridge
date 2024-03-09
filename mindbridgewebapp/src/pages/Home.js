<<<<<<< HEAD
import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Button from '../components/Button';

function Home() {
    const buttonsData = [
      { icon: 'icon-path', text: 'Food' }, // replace with actual image paths and text
      { icon: 'icon-path', text: 'Water' },
      // ... additional buttons
    ];
  
    return (
      <div className="home">
        <NavBar />
        <div className="content">
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
  
export default Home;
=======
export default function Home() {
	return (
		<div>
		</div>
	)
}
>>>>>>> 6a13b3328b69ce82154e3feb7134c245f01afc09
