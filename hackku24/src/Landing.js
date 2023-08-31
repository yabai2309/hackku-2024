import React, { Component, useState, useEffect } from 'react';
import './App.css';
import './Landing.css'

import Nav from './Nav.js';
import NavMobile from './NavMobile.js';
import LandingBg from './LandingBg.js';
import LandingBgMobile from './LandingBgMobile.js';

function Landing() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension(){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className="landing" id="landing">
      { screenSize.width < 720 ? ( 
        <div>
          <NavMobile /> 
          <LandingBgMobile />
        </div>
      ) : ( 
        <div>
          <Nav /> 
          <LandingBg />
        </div>
      )}
      <div class="landing-text-container abs" id="landing-text">
        <h3>APRIL 12 - 14, 2024</h3>
        { screenSize.width < 720 ? ( 
          <div className="divided-title">
            <h1>Hack</h1>
            <h1>KU24</h1> 
          </div>  
        ) : ( 
          <h1>HackKU24</h1> 
        )}
        <h3>The University of Kansas</h3>
      </div>
    </div>
  );
}

export default Landing;