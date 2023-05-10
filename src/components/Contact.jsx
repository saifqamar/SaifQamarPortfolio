import React, {useState} from "react";  
import '../App.css';
import SendMail from "./SendMail";


const Contact = ()=>{
    const [showComponent, setShowComponent] = useState({avail : true, top: top});
    
    var top; 
    top = window.scrollY + 'px'
    const handleButtonClick = () => {
        
        setShowComponent(prevVal => ({
            ...prevVal,
            top: window.scrollY + 'px'
        }));
        document.querySelector('.mail-con').style.display = 'block';
        document.querySelector('body').style.overflow ='hidden';

     };
     console.log(window.scrollY)
    return (
        <div className="container contact-box">
            <div className="contact-det">
                <h1>Let’s build you dream Project</h1>
                {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPCMbkGCAFUa43PRfRPiZljgVpPjD0w-f7Z3MUTcLv5M_HHw/viewform?usp=sf_link"> */}
                <button className="contact-btn" onClick={handleButtonClick}>Contact Me</button>
                {showComponent && <SendMail top={top} />}
                {/* </a> */}
            </div>
        </div>
    )
}


export default Contact