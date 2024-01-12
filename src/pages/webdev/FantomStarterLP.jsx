import React from "react";
import ProjectDetailsData from "../../ProjectDetailsData";
import { useState, useParams, useEffect } from "react";
import './css/FantomStarterLP.css';
import { Link } from "react-router-dom";





export default FantomStarterLP =>{
    const [imgsLoaded, setImgsLoaded] = useState(true)
//   let {cat, id} = useParams('uiux', 2)
//   console.log(cat);
    const images = ProjectDetailsData['web_dev'][0]['images'];
  
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
        <div className="container fantom-starter">
            {imgsLoaded ? (
                <>
                    <h1>FS Exchange Landing page</h1>
                    <img className="main-pic" src={images[0]} alt="fs exchange hero section" />
                    <p>Our team recently undertook the development of a Landing Page based on the UI design provided by our client. Collaborating with two talented friends, we utilized React to bring the vision to life. The project, acquired through Fiverr, played a pivotal role in advancing our skills in front-end development.</p>
                    <p>Throughout the one-month development journey, we focused on ensuring the Landing Page was not only visually appealing but also responsive. The integration of APIs with Contentful added a layer of complexity to the project, requiring seamless connectivity through GraphQL APIs. Despite the challenges, our dedication and collaborative efforts resulted in a final product that met both our client's expectations and the standards of modern web development.</p>                    
                    <p>Despite the challenges, our dedication and collaborative efforts resulted in a final product that not only met the client's expectations but also aligned with the modern standards of web development. This experience underscored the importance of addressing performance issues in web development projects and highlighted our ability to find innovative solutions to technical challenges, reinforcing our commitment to delivering high-quality outcomes.</p>
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
                                <p className="">My role was to Lead the team and take part in creating Responsive design.</p>
                            </div>

                            <div className="tools">
                                <p className="role-heading">Tools</p>
                                <div className="tool-icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="html5 image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" alt="css3 image" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React image" />
                                </div>
                                {/* <p className="">HTML 5, Css3, React.</p> */}
                            </div>

                            <div className="client">
                                <p className="role-heading">CLIENT/DATE/DURATION</p>
                                <p className="">A Crypto trading company with name FS Exchange.</p>
                            </div>
                        </div>


                        <div className="show-more-btn-con about-btn">
                            <a href="https://fantom-satarter-landingpage.vercel.app/" style={{ textDecoration: 'none' }}>
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