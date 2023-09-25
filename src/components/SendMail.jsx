import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
// import { config } from "dotenv";


// config();

const SendMail = (props)=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_KEY, process.env.REACT_APP_EMAIL_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_API_KEY)
          .then((result) => {
              console.log(result.text);
              form.current.reset()
              alert('Message sent');
            //   goback()
          }, (error) => {
              console.log(error.text);
          });
      };

      console.log('inner height ===> ', window.innerHeight)
    

    // const goback = ()=>{
    //     document.querySelector('.mail-con').style.display = 'none';
    //     document.querySelector('body').style.overflow ='visible'; 
    //     console.log(process.env.EMAIL_SERVICE_KEY)
    // }


    return(
        <div className="mail-con">
            <div className="container mailbox-f">
                <div className="mailbox">
                    <h1>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="name-mail">
                            <input name="sender_name" type="text" className="text-inp" placeholder="Enter Name"/>
                            <input name="sender_email" type="email" className="text-inp" placeholder="john@example.com"/>
                        </div>
                        <div className="sub-mail">
                            <input name="sender_subject" type="text" className="text-inp" placeholder="Enter Subject of email"/>
                        </div>
                        {/* <div className="option-con">
                            <select name="project_type" id="cars" className="options">
                                <option value="None">Select the Project Type</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Front-End Development">Front End Development</option>
                                <option value="BackEnd Development">BackEnd Development</option>
                                <option value="FullStack Development">FullStack</option>
                            </select>
                            

                            <select name="time_project" id="cars" className="options">
                                <option value="None">Select Time For Project</option>
                                <option value="15 days">15 days</option>
                                <option value="1 month">1 month</option>
                                <option value="3 months">3 months</option>
                                <option value="6 months or more">6 months or more</option>
                            </select>


                            <select name="budget_project" id="cars" className="options">
                                <option value="None">Select the budget</option>
                                <option value="$100-$500">$100-$500</option>
                                <option value="$500-1000">$500-$1000</option>
                                <option value="$1000-$5000">$1000-$5000</option>
                                <option value="$5000-$10k">$5000-$10k</option>
                            </select>
                        </div> */}
                        <textarea name="description" id="txt-area" cols="30" rows="06" placeholder="enter project details here"></textarea>
                        <input className="send-msg" type="submit" value={'Send Message'}/>
                    </form>
                {/* <button className="goback-btn" onClick={goback}>Go back</button> */}
                </div>
            </div>
        </div>
    )
}

export default SendMail