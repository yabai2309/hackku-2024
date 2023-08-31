import React, { Component } from 'react';
import './App.css';
import './LandingBg.css'

import Sun from './assets/sun.svg';
import Clouds from './assets/clouds.svg';
import Buildings from './assets/buildings.svg';
import Hills from './assets/hills.svg'
import Ducks from './assets/ducks.svg'
import Flowers from './assets/flowers.svg';

class LandingBg extends Component {
  render() {
    return (
      <div>
        <img src={Sun} class="sun abs" alt="Sun"/>
        <img src={Clouds} class="clouds full-width abs" alt="Clouds"/>
        <div>
          <img src={Buildings} class="buildings abs" alt="Buildings"/>
          <img src={Hills} class="hills full-width abs" alt="Hill Left"/>
        </div>
        <img src={Ducks} class="ducks abs" alt="Ducks"/>
        <img src={Flowers} class="flowers full-width abs" alt="Flowers"/>
      </div>
    )
  }
}

export default LandingBg;