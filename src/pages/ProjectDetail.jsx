import React, {useEffect, useState} from "react";
import '../App.css';
import { useParams } from "react-router-dom";
// import { useParams } from 'react';
import ProjectDetailsData from "../ProjectDetailsData";





const ProDetails = ({ match }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  let {cat, id} = useParams()
  const images = ProjectDetailsData[cat][id - 1]['images'];
  
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
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, []);
  


  
  return (
    <div className="" style={{'color': 'black'}}>

        {imgsLoaded ? (
          images.map(image => (
            <div className="projdetimg" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
              <img key={image.id} src={image} alt="Human" />
            </div>
          ))
        ) : (
          <div className="loader-det">
              <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
              {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
              
          </div>
        )}
      
      {/* {images.map((image)=>(
        <div className="projdetimg">
          <LazyLoadImage src={image} height={500} alt="img" />
        </div>
      
      ))} */}
      
    </div>
  );
};

export default ProDetails;
