import React, { Component } from 'react';
import './App.css';
import './Nav.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

class Nav extends Component {
  render() {
    return (
      <div className="navbar abs" id="nav">
        <a href="" target="_blank" className="link"><p>HACKERDOC</p></a>
        <p>ABOUT</p>
        <p>FAQ</p>
        <p>SPONSORS</p>
        <p>CONTACT</p>
        <p>REGISTER NOW!</p>
      </div>
    )
  }
}

export default Nav;