import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bak">
    <div className='container header'>
      <img className='logo' src="images/logo.svg" alt="" />
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><a to="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>        
      </ul>
    </div>
    </div>
  )
}

export default Header