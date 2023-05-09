import React from "react";
import '../App.css';


const Hero = () =>{
    return (
        <div className="hero">
            <div className="container main-head-flex">
                <div className="main-head" id="">
                    <div className="back-blur"></div>
                    <div className="back-blur-red"></div>
                    <div className="line-social">
                        <div className="line"></div>
                        <div class="social-media">
                            <a href=""><i class="fa-brands fa-instagram"></i></a> 
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="heading">
                        <h1>Hello, <br /> I'm Saif</h1>
                        <p>a UIUX Designer and Front-end Developer who is passionate about creating Digital epxeriences Through problem solving.</p>
                    </div>

                    {/* <img className="main-img" src="images/main.jpg" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero