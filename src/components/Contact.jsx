import React, {useState} from "react";  
import '../App.css';
import SendMail from "./SendMail";


const Contact = ()=>{
    const [showComponent, setShowComponent] = useState(false);

    const handleButtonClick = () => {
        setShowComponent(true);
     };
    return (
        <div className="container contact-box">
            <div className="contact-det">
                <h1>Let’s build you dream Project</h1>
                {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPCMbkGCAFUa43PRfRPiZljgVpPjD0w-f7Z3MUTcLv5M_HHw/viewform?usp=sf_link"> */}
                <button className="contact-btn" onClick={handleButtonClick}>Contact Me</button>
                {showComponent && <SendMail />}
                {/* </a> */}
            </div>
        </div>
    )
}


export default Contact