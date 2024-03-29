import React, {useState} from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);  

  const showlist =  () => {
    isSmallScreen = isSmallScreen ? setIsSmallScreen(false): setIsSmallScreen(true);
  }

  return (
    <div className="bak"  data-aos="fade-down" data-aos-duration='1000'>
      <div className='header' id='home'>
        <div className="container nav-header">
          <HashLink exact to={'/SaifQamarPortfolio#home'} className={'link'}>
            <div className="logo" style={{display:'flex', width:'50%', padding:'20px', alignItems:'baseline', columnGap:'5px'}}>
              {/* https://drive.google.com/file/d//view?usp=sharing */}
                <h3 style={{color:'white'}}><img style={{height:'30px',}} crossOrigin='anonymous' src={'https://i.imgur.com/5AMfS72.png' } /></h3><span style={{color:'#7979ea', fontWeight:'bold', fontSize:'10px'}}>Beta</span>
            </div>
          </HashLink>
          <button class="nav-toggle" onClick={showlist}>
              <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul className={isSmallScreen ? "links show-links" : "links"}>
        {/* <HashLink exact to={'/SaifQamarPortfolio#home'} className={'link'}><li>Home</li></HashLink> */}
        <HashLink exact to={'/SaifQamarPortfolio#work'}  className={'link'}><li>Projects</li></HashLink>
        {/* <HashLink exact to={'/SaifQamarPortfolio#work'}  className={'link'}><li>Blogs</li></HashLink> */}
        <HashLink exact to={'/SaifQamarPortfolio#about'} className={'link'}><li>About</li></HashLink>
        <HashLink exact to={'/SaifQamarPortfolio/contact'} className={'link'}><li>Contact</li></HashLink>        
        </ul>
      </div>
    </div>
  )
}

export default Header