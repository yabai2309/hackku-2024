import React, { Component } from 'react';
import './App.css';
import './About.css'

import Heart from './assets/heart-red.svg';
import HackKU20 from './assets/20.svg';
import HackKU21 from './assets/21.svg';
import HackKU22 from './assets/22.svg';
import HackKU23 from './assets/23.svg';

class About extends Component {
  render() {
    return (
      <div className="about section" id="about">
        <div className="about-container">
          <h2>What is HackKU?</h2>
          <div className="description-container">
            <p className="description-text">
              HackKU is the annual 36-hour hackathon hosted at the University of Kansas, 
              where students have the opportunity to innovate new ideas, discover different paths, 
              and push the boundaries of technology. Work with teams of up to four people to 
              create unique solutions to real-world problems. No experience necessary!
            </p>
          </div>
          <div className="about-container">
            <h3>Check out previous HackKU events</h3>
            <div className="button-heart-container">
              <img src={Heart} class="heart" alt="Heart"/>
              <div className="button-container">
                <div className="button-container">
                  <img src={HackKU20} class="previous-button" alt="HackKU20"/>
                  <img src={HackKU21} class="previous-button" alt="HackKU21"/>
                </div>
                <div className="button-container">
                  <img src={HackKU22} class="previous-button" alt="HackKU22"/>
                  <img src={HackKU23} class="previous-button" alt="HackKU23"/>
                </div>
              </div>
              <img src={Heart} class="heart" alt="Heart"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;