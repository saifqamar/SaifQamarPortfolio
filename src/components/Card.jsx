import React from "react";  
import '../App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const Card = (props)=>{
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const images = props.item.img;
    console.log('images path ==>', images)


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
              }, 1000)
      
            loadImg.onerror = err => reject(err)
          });
        }
      
        loadImage(images)
        .then(() => {
            setImgsLoaded(true)
            console.log('loaded card image ===>', images)
        })
        .catch(err => console.log("Failed to load image", err))
    });


    return (
        <Link to={`/SaifQamarPortfolio/${props.cat}/${props.item.path}`}>
            <div className="card">
                {imgsLoaded ? (
                    <>
                        <div className="crd-image">
                            <img src={props.item.img} alt="design app" />
                        </div>            
                    </>
                ) : (
                    <div className="card-loader">
                        <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                        {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
                    </div>
                )}
                {/* <div className="crd-title">
                    <h4>{props.item.title}</h4>
                </div> */}
            </div>
        </Link>
    )
}


export default Card