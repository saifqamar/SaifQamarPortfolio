import React from "react";
import '../App.css';
import './About.css'


export default About =>{
    return (
        <div className="about-sec container about-page"  id="about">
            <div className="back-blur"></div>
            <div className="back-blur-red"></div>
            <h1 data-aos='fade-up'>About</h1>
            {/* https://drive.google.com/file/d/1udbOTkMv2xkhAPgNFpKHy1cF7vUzDZij/view?usp=drive_link */}
            <div className="about-image">

                <img src ="https://drive.google.com/uc?export=view&id=1udbOTkMv2xkhAPgNFpKHy1cF7vUzDZij" alt="" />
            </div>
        </div>

    )
}