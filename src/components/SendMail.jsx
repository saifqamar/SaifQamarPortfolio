import React from "react";

const SendMail = (props)=>{
    

    const goback = ()=>{
        document.querySelector('.mail-con').style.display = 'none';
        document.querySelector('body').style.overflow ='visible';
        
    }
    return(
        <div className="mail-con" style={{top: props.top}}>
            <div className="container mailbox-f">
                <div className="mailbox">
                    <h1>Contact Me</h1>
                    <form action="">
                        <div className="name-mail">
                            <input type="text" className="text-inp" placeholder="Enter Name"/>
                            <input type="email" className="text-inp" placeholder="john@example.com"/>
                        </div>
                        <div className="option-con">
                            {/* <input type="text" className="text-inp" placeholder="Enter Name"/> */}
                            <select name="cars" id="cars" className="options">
                                <option value="volvo">Select the Project Type</option>
                                <option value="volvo">UI/UX</option>
                                <option value="saab">Front End Development</option>
                                <option value="mercedes">BackEnd Development</option>
                                <option value="audi">FullStack</option>
                            </select>
                            {/* <input type="email" className="text-inp" placeholder="john@example.com"/> */}

                            <select name="cars" id="cars" className="options">
                                <option value="volvo">Select Time For Project</option>
                                <option value="volvo">15 days</option>
                                <option value="saab">1 month</option>
                                <option value="mercedes">3 months</option>
                                <option value="audi">6 months or more</option>
                            </select>


                            <select name="cars" id="cars" className="options">
                                <option value="volvo">Select the budget</option>
                                <option value="volvo">$100-$500</option>
                                <option value="saab">$500-$1000</option>
                                <option value="mercedes">$1000-$5000</option>
                                <option value="audi">$5000-$10k</option>
                            </select>
                        </div>
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