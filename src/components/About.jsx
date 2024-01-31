import React from "react";
import '../App.css';
import { Link } from "react-router-dom";



const About = () => {
    return (
        <div className="about-sec container"  id="about">

                <div className="back-blur-red ser-blk-red"></div>
            <h1 data-aos='fade-up'>About</h1>
            <div className="whole-about-sec" data-aos='fade-up'>
                <div className="my-pic">
                    <img src="https://i.imgur.com/it2M6mL.jpg" alt="" />
                </div>
                <div className="about-details">
                    <p>I am UI/UX designer based in Pakistan. Over the years I worked with multiple companies to craft interfaces which were visually appealing and simple to use. I have been working in freelancing industry for years and dealt with many challenges in fast paced environment. I am dedicated to crafting exceptional user experiences through intuitive and visually captivating designs. With a user-centric approach, I prioritize understanding the needs and motivations of users to create impactful digital experiences that resonate with them.</p>
                    <br />
                    <p> My design process follows a structured approach, employing design thinking principles to ideate, wireframe, prototype, and iterate on designs.</p>

                    {/* <div className="show-more-btn-con about-btn">
                        <Link to={`/SaifQamarPortfolio/about`} style={{ textDecoration: 'none' }}><button className="show-more-btn contact-btn" style={{ display:  'flex' }}><span>Show More</span> <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span></button></Link>
                    </div> */}

                    {/* <div className="show-more-btn-con about-btn">
                        <Link to={`/SaifQamarPortfolio/about`} style={{ textDecoration: 'none' }}>
                            <button className="show-more-btn contact-btn about-btn-black" style={{ display:  'flex', background:'black' }}>
                                <span>Show More</span> 
                                <span class="material-symbols-outlined">
                                    arrow_right_alt
                                </span>
                            </button>
                        </Link>
                    </div> */}
                    
                </div>
            </div>
        </div>

    )
}

export default About