import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  var links = document.querySelector("ul");
  const showlist =  () => {
    console.log(links.classList)
      links.classList.toggle('show-links');
  }

  return (
    <div className="bak">
    <div className='container header'>
      <div className="nav-header">
        <img className='logo' src="images/logo.svg" alt="" />
        <button class="nav-toggle" onClick={showlist}>
            <i class="fas fa-bars"></i>
        </button>
      </div>
      <ul className="links" id='link'>
        <li><NavLink exact to={'/SaifQamarPortfolio'}>Home</NavLink></li>
        <li><NavLink to={"/SaifQamarPortfolio#work"}>Work</NavLink></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>        
      </ul>
    </div>
    </div>
  )
}

export default Header