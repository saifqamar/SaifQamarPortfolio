import React from "react";  


export default function PhotoCard(props){

    return(
        <a href="#">
            <div className="card p-card">
                <div className="crd-image">
                    <img src={props.img} alt="design app" />
                </div>
                <div className="crd-title">
                    <h4>Food app design</h4>
                </div>
            </div>
        </a>
    )
}