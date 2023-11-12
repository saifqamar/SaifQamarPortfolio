import React from "react";
import '../App.css';


const Hero = () =>{
    return (
        <div className="hero">
            <div className="container main-head-flex">
                <div className="main-head" id="">
                    <div className="back-blur"></div>
                    <div className="back-blur-red"></div>
                    <div className="line-social" data-aos='fade-down'>
                        <div className="line"></div>
                        <div class="social-media">
                            <a href="https://www.instagram.com/saiff.ui/"><i class="fa-brands fa-instagram"></i></a> 
                            <a href="https://www.linkedin.com/in/saif-qamar-6036561a6/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.figma.com/@saiffqamar"><i class="fa-brands fa-figma"></i></a>
                        </div>
                    </div>
                    <div className="heading">
                        <h1 data-aos='fade-up' data-aos-duration='1000'>Hi, <br /> I'm Saif</h1>
                        <p data-aos='fade-up'>a UIUX Designer who is passionate about creating Digital epxeriences Through problem solving.</p>
                    </div>

                    {/* <img className="main-img" src="images/main.jpg" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero