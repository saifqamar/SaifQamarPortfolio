import React from "react";
import ProjectDetailsData from "../../ProjectDetailsData";
import { useState, useParams, useEffect } from "react";
import './uiuxCss/BookBudsCaseStudy.css'




export default BookBudsCaseStudy =>{
    const [imgsLoaded, setImgsLoaded] = useState(false)
//   let {cat, id} = useParams('uiux', 2)
//   console.log(cat);
  const images = ProjectDetailsData['uiux'][2]['images'];
  
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
        <div className="container bookbuds">
            {imgsLoaded ? (
                <>
                    <h1>Bookbuds</h1>
                    <p>Book Buds is a unique app that caters to book lovers by offering a diverse selection of books for purchase, both in physical and digital formats. With a strong focus on community building, Book Buds also provides a platform for passionate readers to connect, share recommendations, and engage in meaningful discussions.</p>
                    <p>Our mission was to design an intuitive and visually captivating interface that would allow users to easily explore the extensive book catalog, make purchases, and seamlessly transition between reading formats. Additionally, we aimed to provide a platform where users could connect with fellow readers, share their literary interests, and participate in engaging book discussions.</p>
                    <p>Note: This is not professional project but I made it for Practice.</p>
                    <div className="sec" style={{'color': 'black'}}>
                    <div className="back-blur"></div>
                    <div className="back-blur-red"></div>
                        <div className="sec-1">
                            <div className="projdetimg upside" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                                <img src={images[1]} alt="bureat pic 1" />
                                <img src={images[2]} alt="bureat pic 2" />
                            </div>
                            <div className="downside">
                                <img src={images[0]} alt="bureat pic 3" />
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

                        <div className="sec-1">
                            <div className="projdetimg upside" data-aos='fade-up' data-aos-duration="500" data-aos-mirror="true" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom">
                                {/* <img src={images[3]} alt="bureat pic 1" />
                                <img src={images[4]} alt="bureat pic 2" /> */}
                            </div>
                            <div className="downside" data-aos='fade-up'>
                                <img src={images[6]} alt="bureat pic 3" />
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
            ): (
                <div className="loader-det">
                    <img src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif" alt="" />
                    {/* <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="" /> */}
              
                </div>
            )}
        </div>
    )
}