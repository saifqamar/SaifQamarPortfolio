import React, {useState} from "react";  
import '../App.css';
import SendMail from "./SendMail";
import { HashLink } from "react-router-hash-link";


const Contact = ()=>{
    const [showComponent, setShowComponent] = useState({avail : false, top: window.scrollY + 'px'});
    
    
    const handleButtonClick = () => {
        
        setShowComponent(() => ({
            // ...prevVal,
            avail:true,
            top: window.scrollY + 'px'
        }));
        document.querySelector('.mail-con').style.display = 'block';
        document.querySelector('body').style.overflow ='hidden';

     };
     console.log(window.scrollY)
    return (
        <div className="Contact-Whole-sec">
            <div className="back-blur ser-blk-blue ser-blk-blue-cont"></div>
            <div className="container contact-box" id="contact" data-aos='fade-up'>
                <div className="contact-det">
                    <h1>Let’s build you dream Project</h1>
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPCMbkGCAFUa43PRfRPiZljgVpPjD0w-f7Z3MUTcLv5M_HHw/viewform?usp=sf_link"> */}
                    <HashLink exact to={'/SaifQamarPortfolio/contact'}><button className="contact-btn" onClick={handleButtonClick}>Contact Me</button></HashLink>
                    {showComponent['avail'] && <SendMail top={showComponent['top']} />}
                    {/* </a> */}
                </div>
            </div>
        </div>
    )
}


export default Contact