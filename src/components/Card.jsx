import React from "react";  
import '../App.css';
import { Link } from "react-router-dom";


const Card = (props)=>{
    return (
        <Link to={`/SaifQamarPortfolio/${props.cat}/${props.item.id}`}>
            <div className="card">
                <div className="crd-image">
                    <img src={props.item.img} alt="design app" />
                </div>
                {/* <div className="crd-title">
                    <h4>{props.item.title}</h4>
                </div> */}
            </div>
        </Link>
    )
}


export default Card