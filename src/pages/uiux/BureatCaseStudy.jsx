import React from "react";
import ProjectDetailsData from "../../ProjectDetailsData";
import '../../App.css';
import { useState, useParams, useEffect } from "react";
import './uiuxCss/BureatCaseStudy.css'




export default BureatCaseStudy =>{
    const [imgsLoaded, setImgsLoaded] = useState(false)
//   let {cat, id} = useParams('uiux', 2)
//   console.log(cat);
  const images = ProjectDetailsData['uiux'][1]['images'];
  
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
  
    return (
        <div className="container bureat-con">
            <div className="bureat">
                {imgsLoaded? (
                    <>  
                        <h1>Bureat</h1>
                        <p>Bureat is an innovative fast food company that has disrupted the traditional fast food landscape with its fresh and flavorful offerings. With a commitment to quality, convenience, and customer satisfaction, Bureat has quickly gained popularity among food enthusiasts seeking a new and exciting fast food experience. The company takes pride in sourcing high-quality ingredients, preparing delicious meals, and delivering them with exceptional service.</p>
                        <p>My role was to design Logo and UI/UX for the app. I developed wireframes and interactive prototypes using industry-standard tool like Figma. This allowed me to establish the app's layout, navigation, and flow of screens.</p>
                        <div className="sec" style={{'color': 'black'}}>
                        <div className="back-blur"></div>
                        <div className="back-blur-red"></div>
                            <div className="sec-1">
                                <div className="projdetimg upside" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                                    <img src={images[0]} alt="bureat pic 1" />
                                    <img src={images[1]} alt="bureat pic 2" />
                                </div>
                                <div className="downside">
                                    <img src={images[2]} alt="bureat pic 3" />
                                </div>
                            </div>

                            <div className="sec-1">
                                <div className="projdetimg upside" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                                    <img src={images[3]} alt="bureat pic 1" />
                                    <img src={images[4]} alt="bureat pic 2" />
                                </div>
                                <div className="downside" data-aos='fade-up'>
                                    <img src={images[5]} alt="bureat pic 3" />
                                </div>
                            </div>

                        {/* {imgsLoaded ? (
                        images.map(image => (
                            <div className="projdetimg" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                            <img key={image.id} src={image} alt="Human" />
                            </div>
                        ))
                        ) : (
                        <div className="loader-det">
                            <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                        
                            
                        </div>
                        )} */}

                        {/* {images.map((image)=>(
                        <div className="projdetimg">
                        <LazyLoadImage src={image} height={500} alt="img" />
                        </div>

                        ))} */}

                        </div>
                    </>
                ):(
                    <div className="loader-det">
                        <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                        {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
                
                    </div>
                )}
            </div>
        </div>
    )
}