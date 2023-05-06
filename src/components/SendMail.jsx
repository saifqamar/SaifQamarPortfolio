import React from "react";

const SendMail = ()=>{
    return(
        <div className="mail-con">
            <div className="mailbox">
                <form action="">
                    <input type="text" placeholder="Enter Name"/>
                    <input type="email" placeholder="john@example.com"/>
                    <input type="submit" value={'send'}/>
                </form>
            </div>
        </div>
    )
}

export default SendMail