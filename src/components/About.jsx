import React from "react";
import '../App.css';



const About = () => {
    return (
        <div className="about-sec container">
            <h1>About   </h1>
            <div className="whole-about-sec">
                <div className="my-pic">
                    <img src="images/mansab.jpg" alt="" />
                </div>
                <div className="about-details">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquam voluptatibus in explicabo earum obcaecati, perferendis, hic aperiam nisi a cum, nobis est similique minus eius at voluptatem quod inventore omnis! Quasi distinctio molestias maiores mollitia dignissimos magni ullam blanditiis! Omnis neque quo dignissimos corrupti natus at consectetur consequuntur accusamus!</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquam voluptatibus in explicabo earum obcaecati, perferendis, hic aperiam nisi a cum, nobis est similique minus eius at voluptatem quod inventore omnis! Quasi distinctio molestias maiores mollitia dignissimos magni ullam blanditiis! Omnis neque quo dignissimos corrupti natus at consectetur consequuntur accusamus!</p>
                    <h4>Skills</h4>
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About