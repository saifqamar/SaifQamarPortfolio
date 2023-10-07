import React from "react";
import '../App.css';


export default About =>{
    return (
        <div className="about-sec container"  id="about">
            <h1 data-aos='fade-up'>About</h1>
            <div className="whole-about-sec" data-aos='fade-up'>
                <div className="my-pic">
                    <img src="https://drive.google.com/uc?export=view&id=1kHkcffTejIeEkhqH14J61Edm9JHhrKNU" alt="" />
                </div>
                <div className="about-details">
                    <p>I am UI/UX designer based in Pakistan. Over the years I worked with multiple companies to craft interfaces which were visually appealing and simple to use. I have been working in freelancing industry for years and dealt with many challenges in fast paced environment. I am dedicated to crafting exceptional user experiences through intuitive and visually captivating designs. With a user-centric approach, I prioritize understanding the needs and motivations of users to create impactful digital experiences that resonate with them.</p>
                    <br />
                    <p> My design process follows a structured approach, employing design thinking principles to ideate, wireframe, prototype, and iterate on designs. Throughout my career, I have had the opportunity to work with renowned companies, applying my expertise to projects spanning diverse industries. I am excited to share my work with you and demonstrate how my skills and expertise in UI/UX design can contribute to creating innovative and user-centered digital experiences.</p>
                    {/* <h4>Skills</h4>
                    <div className="skill-container">
                        <div className="skill-box">
                            <div className="skill-icon">
                                <img src="images/logo.svg" alt="" />
                            </div>
                            <h5>UI/UX</h5>
                        </div>

                        <div className="skill-box">
                            <div className="skill-icon">
                                <img src="images/logo.svg" alt="" />
                            </div>
                            <h5>Web Dev</h5>
                        </div>

                        <div className="skill-box">
                            <div className="skill-icon">
                                <img src="images/logo.svg" alt="" />
                            </div>
                            <h5>Photography</h5>
                        </div>

                        <div className="skill-box">
                            <div className="skill-icon">
                                <img src="images/logo.svg" alt="" />
                            </div>
                            <h5>Digital art</h5>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}