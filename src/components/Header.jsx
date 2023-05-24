import React, {useState} from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);  

  const showlist =  () => {
    isSmallScreen = isSmallScreen ? setIsSmallScreen(false): setIsSmallScreen(true);
  }

  return (
    <div className="bak">
    <div className='header'>
      <div className="container nav-header">
        <img className='logo' src="images/logo.svg" alt="" />
        <button class="nav-toggle" onClick={showlist}>
            <i class="fas fa-bars"></i>
        </button>
      </div>
      <ul className={isSmallScreen ? "links show-links" : "links"}>
      <NavLink exact to={'/SaifQamarPortfolio'} className={'link'}><li>Home</li></NavLink>
      <NavLink exact to={'/SaifQamarPortfolio#work'} className={'link'}><li>Work</li></NavLink>
      <a href="#about" className={'link'}><li>About</li></a>
      <a href="#contact" className={'link'}><li>Contact</li></a>        
      </ul>
    </div>
    </div>
  )
}

export default Header