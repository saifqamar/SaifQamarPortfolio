import React from "react";
// import '../../App.css';
import './uiuxCss/RedOilCS.css';
import { useState, useEffect } from "react";

import ProjectDetailsData from "../../ProjectDetailsData";

export default RedoilCaseStudy =>{
    const [imgsLoaded, setImgsLoaded] = useState(false)

    const images = ProjectDetailsData['uiux'][0]['images'];


    useEffect(()=>{
        if (imgsLoaded === false){
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
    return(
        <div className="whole-page">
            {imgsLoaded ? (
                <>
                    <div className="container">
                        <div className="cs-whole">
                            <div className="blob-1">
                                <img src={images[1]} alt="" />
                            </div>

                            <div className="blob-2">
                                <img src={images[2]} alt="" />
                            </div>

                            <div className="cs-hero">
                                <h1>Red Oil for Hair Regrowth </h1>
                                <button className="cs-heading">
                                    <p>UI/UX Case Study</p>
                                </button>

                                <div className="home-img">
                                    <img src={images[0]} alt="" />
                                </div>
                            </div>

                            <div className="whole-details-sec">
                                <div className="details-sec-1">
                                    <p>Saif Qamar</p>
                                    <h1 className="cs-name">Redoil For Hair Growth Website</h1>
                                    <p>Project overview: This project aims to create a user-friendly and aesthetically pleasing website for Redoil for hair regrowth, which will help the company increase conversion rates and generate more leads. The project will involve  designing the website, and prototyping the website.</p>
                                </div>
                                <div className="details-sec-2">
                                    <div className="role">
                                        <p className="role-heading">Role/Team</p>
                                        <p className="">My role was to create UI design for the website which is user friendly.</p>
                                    </div>

                                    <div className="tools">
                                        <p className="role-heading">Tools</p>
                                        <p className="">Figma, Gimp.</p>
                                    </div>

                                    <div className="client">
                                        <p className="role-heading">CLIENT/DATE/DURATION</p>
                                        <p className="">An Ausie Woman who was the owner of the business. I had to complete it in 30 days.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="problem-statement">
                            <h1>The Challenge or Problem Statement</h1>
                            <p><span>Problem: </span>Redoil for hair regrowth is a new company that does not have a website. This is a major obstacle to the company's growth, as potential customers cannot learn more about the company or its products without a website.</p>
                            <p><span>Solution: </span>The company needs to create a user-friendly and aesthetically pleasing website that will help potential customers learn more about the company and its products. The website should also be easy to use and navigate, and it should be optimized for mobile devices.</p>
                            <p><span>Benefits: </span>A well-designed website will help Redoil for hair regrowth increase brand awareness, generate leads, and increase sales. The website will also help the company build trust and credibility with potential customers.</p>
                        </div>

                        <div className="goals">
                            <h1>Goals</h1>
                            <ul>
                                <li><span>Increase brand awareness: </span> The website should help Redoil for hair regrowth increase brand awareness by making the company more visible to potential customers.</li>
                                <li><span>Generate leads: </span>The website should help Redoil for hair regrowth generate leads by providing potential customers with a way to contact the company.</li>
                                <li><span>Increase sales: </span>The website should help Redoil for hair regrowth increase sales by making it easy for potential customers to purchase the company's products.</li>
                                <li><span>Build trust and credibility: </span>The website should help Redoil for hair regrowth build trust and credibility with potential customers by providing them with accurate and up-to-date information about the company and its products.</li>
                            </ul>
                        </div>


                    </div>

                    <div className="product-users">
                        <img className="user user-1" src={images[3]} alt="user1" />
                        <img className="user user-2" src={images[4]} alt="user2" />
                        <img className="user user-3" src={images[5]} alt="user3" />
                        
                        <h1>Product Users</h1>
                        <p>People who face hair fall with age group <br /> 18-45</p>
                    </div>

                    <div className="container visual-design">
                        <h1 data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">Visual Design & Prototype</h1>
                        <p data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">The next plan of action was to create colour palettes and typography that would help communicate the brand’s identity and also give the product an exciting feel.</p>
                        <img className="style-guide" src={images[6]} alt="style guide" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" />
                    </div>

                    <div className="container high-fidelity">
                        <h1 data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">High Fidelity Designs</h1>
                        <div className="whole-sec">

                            <div className="left-sec">
                                <img src={images[7]} alt="Home Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[8]} alt="Product Details page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[9]} alt="Results Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[10]} alt="FAQs Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                            </div>
                            <div className="right-sec">
                                <img src={images[11]} alt="Products Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[12]} alt="About Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[13]} alt="Cart Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[14]} alt="Oil Details Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[15]} alt="Personal Details Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[16]} alt="Payment Details Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                <img src={images[17]} alt="Thankyou Page" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"/>
                                
                            </div>
                        </div>
                    </div>

                    <div className="container feedback">
                        <h1>Feedback</h1>
                        <p>Generally got positive feedback from the customer. She liked the design and asked for few revisions to change the design according to what she thought was best.</p>
                    </div>

                    <div className="container challanges">
                        <h1>Challenges & Conclusion</h1>
                        <p>Not everything went as planned. <br /> I’m sure not every project goes 100% as planned. It was my first project so I didn’t followed design thinking. The lack of communication and customer involvement was one of the major challenges. Because of that the project was went from 1 month to 5 months. Lack of experience was also an issue since I was first time working on a professional project.</p>
                        <p>This was my first project and I learned a lot from it. I can’t say It was the best work I done but I was happy about it.  Things were tricky because of corona and the clients unavailability. But they were small hurdles. So, yeah that’s all. Thanks for Reading</p>
                    </div>

                    <div className="thankyou">
                        <img src={images[18]} alt="thankyou for reading" />
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