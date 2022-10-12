import React from "react";  
import '../App.css'


const Card = (props)=>{
    return (
        <a href="">
            <div className="card">
                <div className="crd-image">
                    <img src={props.link} alt="design app" />
                </div>
                <div className="crd-title">
                    <h4>Food app design</h4>
                </div>
            </div>
        </a>
    )
}


export default Card