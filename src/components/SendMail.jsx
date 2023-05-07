import React from "react";

const SendMail = (props)=>{
    

    const goback = ()=>{
        document.querySelector('.mail-con').style.display = 'none';
        document.querySelector('body').style.overflow ='visible';
        
    }
    return(
        <div className="mail-con" style={{top: props.top}}>
            <div className="mailbox-f">
                <div className="mailbox">
                    <h1>Contact Me</h1>
                    <form action="">
                        <input type="text" className="text-inp" placeholder="Enter Name"/>
                        <input type="email" className="text-inp" placeholder="john@example.com"/>
                        <textarea name="" id="txt-area" cols="30" rows="06" placeholder="enter project details here"></textarea>
                        <input className="send-msg" type="submit" value={'Send Message'}/>
                    </form>
                <button className="goback-btn" onClick={goback}>Go back</button>
                </div>
            </div>
        </div>
    )
}

export default SendMail