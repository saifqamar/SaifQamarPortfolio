import React from "react";  
import '../App.css';
import PhotoCards from "./PhotoCards";
import Cards from "./Cards";



const Services = ()=> {
    return(
        <div className="ser-back">
            <div className="container services" id="work">
                <h1>Work</h1>
                <ul className="ser-btn">
                    <li><a className="service-ui ser-active" href=".">UI/UX</a></li>
                    <li><a className="service-ui" href=".">Web Development</a></li>
                    {/* <li><a className="service-ui" href=".">Photography</a></li> */}
                    {/* <li><a className="service-ui" href=".">Illustration & art</a></li> */}
                </ul>
            </div>
            <div className="container">
                <Cards />
                {/* <PhotoCards /> */}
            </div>
        </div>
        
    )
}

export default Services