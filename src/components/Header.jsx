import React from 'react';
import '../App.css';


const Header = () => {
  return (
    <div className="bak">
    <div className='container header'>
      <img className='logo' src="images/logo.svg" alt="" />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>        
      </ul>
    </div>
    </div>
  )
}

export default Header