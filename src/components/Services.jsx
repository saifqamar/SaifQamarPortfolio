import React from "react";  
import '../App.css';
import Card from './Card';



const Services = ()=> {
    return(
        <div className="ser-back">
            <div className="container services">
                <h1>Work</h1>
                <ul className="ser-btn">
                    <li><a className="service-ui ser-active" href=".">UI/UX</a></li>
                    <li><a className="service-ui" href=".">Web Development</a></li>
                    <li><a className="service-ui" href=".">Photography</a></li>
                    <li><a className="service-ui" href=".">Illustration & art</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="cards">
                    <Card link="images/appdesign.jpg" />
                    <Card link="https://www.creative.onl/wp-content/uploads/2020/12/ui-design-scaled-1200x800.jpg"/>
                    <Card link="https://i.pinimg.com/736x/cf/d0/0f/cfd00ff613363792d38fb666df03331e.jpg"/>
                    <Card link="https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg?resize=400x0"/>
                    <Card link="https://miro.medium.com/max/1200/1*3uQwzB8W3XWdgW4Mjuc9yg.gif"/>
                    <Card link="https://mir-s3-cdn-cf.behance.net/projects/404/4c607e150664475.Y3JvcCwxMzk5LDEwOTUsMCww.jpg"/>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Services