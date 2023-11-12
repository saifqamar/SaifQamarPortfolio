import React from "react";
import { useEffect, useState } from "react";
import '../App.css';
import './About.css'


export default About =>{
    const [imgsLoaded, setImgsLoaded] = useState(false)

    const image = ["https://drive.google.com/uc?export=view&id=1udbOTkMv2xkhAPgNFpKHy1cF7vUzDZij"];
  
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
    
        Promise.all(image.map(image => loadImage(image)))
            .then(() => {
                setImgsLoaded(true)
                console.log(image)
            })
            .catch(err => console.log("Failed to load image", err))
    }, []);

    return (
        <>
            {imgsLoaded ? (
                <div className="about-sec container about-page"  id="about">
                    <div className="back-blur"></div>
                    <div className="back-blur-red"></div>
                    <h1 data-aos='fade-up'>About</h1>
                    {/* https://drive.google.com/file/d/1udbOTkMv2xkhAPgNFpKHy1cF7vUzDZij/view?usp=drive_link */}
                    <div className="about-image">

                        <img src ={image} alt="" />
                    </div>
                </div>
            ) : (
                <div className="loader-det">
                    <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                    {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
              
                </div>
            )}
        </>
    )
}