import React from "react";
import '../App.css';
import { useParams } from "react-router-dom";
// import { useParams } from 'react';
import ProjectDetailsData from "../ProjectDetailsData";



const ProDetails = ({ match }) => {
  let {cat, id} = useParams()
  console.log(cat)
  console.log(id)
  const images = ProjectDetailsData[cat][id - 1]['images'];
  console.log(images)
  
  return (
    <div className="">
      {/* {cardData && <Card card={cardData} />} */}
      {images.map((image)=>(
        <div className="projdetimg">
          <img src={image} alt="img" />
        </div>
        // <h1>hello</h1>
      ))}
      
    </div>
  );
};

export default ProDetails;