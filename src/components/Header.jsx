import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bak">
    <div className='container header'>
      <img className='logo' src="images/logo.svg" alt="" />
      <ul>
        <li><Link to={'/SaifQamarPortfolio'}>Home</Link></li>
      <li><Link to={"/SaifQamarPortfolio#work"}>Work</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>        
      </ul>
    </div>
    </div>
  )
}

export default Header