import React from "react";
import ProjectDetailsData from "../../ProjectDetailsData";
import '../../App.css';
import { useState, useParams, useEffect } from "react";
import './css/FantomStarterLP.css';
import { Link } from "react-router-dom";





export default Swms =>{
    const [imgsLoaded, setImgsLoaded] = useState(true)
//   let {cat, id} = useParams('uiux', 2)
//   console.log(cat);
    const images = ProjectDetailsData['web_dev'][1]['images'];
  
    useEffect(()=>{
        if (imgsLoaded === true){
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
        }
    });

    useEffect(() => {
        const loadImage = image => {
        return new Promise((resolve, reject) => {
            console.log(image)
            const loadImg = new Image()
            loadImg.src = image
    
            // wait 2 seconds to simulate loading time
            loadImg.onload = () =>
            setTimeout(() => {
                resolve(image)
            }, 2000)
    
            loadImg.onerror = err => reject(err)
        })
    }
    
        Promise.all(images.map(image => loadImage(image)))
            .then(() => {
                setImgsLoaded(true)
                console.log(images)
            })
            .catch(err => console.log("Failed to load images", err))
    }, []);
  
    return (
        <div className="container bookbuds fantom-starter">
            {imgsLoaded ? (
                <>
                    <h1>FYP:Smart Waste Mangement System</h1>
                    <img className="main-pic" src={images[0]} alt="fs exchange hero section" />
                    <p>SWMS aim to optimize waste collection processes and minimize the impact on the environment.
                        By reducing the amount of time and resources spent on waste collection and decision-making, a
                        SWMS can help save costs associated with waste management. By monitoring waste levels in bins
                        and containers, a smart waste management system can optimize resource utilization and reduce
                        the number of trucks needed for waste collection.
                    </p>
                    <p>The SWMS project will use a combination of hardware and software components, including sensor
                        technology, IoT, data analytics, mobile applications, cloud computing, and Agile software develop-
                        ment. SWMS employ various methods and technologies to enhance the efficiency and stainability
                        of waste collection and disposal. One key method involves the use of fill-level sensors installed
                        within waste bins. These sensors employ technologies like ultrasonic. By continuously monitoring
                        fill levels, the system can send real-time alerts to waste collection crews when bins are nearing ca-
                        pacity, optimizing the scheduling of collection routes and minimizing unnecessary trips.
                    </p>

                    <p>
                        The project include an IoT device, a website for admin and an android 
                        app for Collectors. The tools used were Html, Css, React, React Native, Firebase etc.   
                    </p>

                    <p><b>Website Credentials</b> <br /> Email: <strong> Saif@gmail.com</strong> <br /> Password: <strong>123456</strong></p>
                    
                    <div className="sec" style={{'color': 'black'}}>
                        <div className="back-blur"></div>
                        <div className="back-blur-red"></div>
                        {/* <div className="tools-used">
                            <h3>Tools Used</h3>
                            <div className="tool-icons">
                                <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="html5 image" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" alt="css3 image" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React image" />
                            </div>
                        </div> */}

                        <div className="details-sec-2">
                            <div className="role">
                                <p className="role-heading">Role/Team</p>
                                <p className="">My role was to create UI design and development of website, app and Iot Device.</p>
                            </div>

                            <div className="tools">
                                <p className="role-heading">Tools</p>
                                <div className="tool-icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="html5 image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" alt="css3 image" />
                                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1632979765809/HTEigfQR-.png?auto=compress,format&format=webp" alt="tailwind image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React image" />
                                    {/* <img src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png" alt="React native image" /> */}
                                    <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="firebase image" />
                                </div>
                                {/* <p className="">HTML 5, Css3, React.</p> */}
                            </div>

                            <div className="client">
                                <p className="role-heading">CLIENT/DATE/DURATION</p>
                                <p className="">Final Year Project in MUST university in collaboration with Muslim Hands,
                                <br /> 1 year Duration
                                </p>
                            </div>
                        </div>


                        <div className="show-more-btn-con about-btn">
                            <a href="https://ubiquitous-system-nt6azjs4d-saifqamar.vercel.app/" style={{ textDecoration: 'none' }}>
                                <button className="show-more-btn contact-btn visit-website-btn" style={{ display:  'flex', background:'black' }}>
                                    <span>Visit Website</span> 
                                    <span class="material-symbols-outlined">
                                        arrow_right_alt
                                    </span>
                                </button>
                            </a>
                        </div>

                        {/* <div className="tools-used uidesign">
                            <h3>UI Design</h3>
                            <div>
                                
                            </div>

                        </div> */}
                    </div>

                </>
            ): (
                <div className="loader-det">
                    <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                    {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
              
                </div>
            )}
        </div>
    )
}