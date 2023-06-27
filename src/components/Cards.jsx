import React from "react";
import '../App.css';
import Card from "./Card";


export default function Cards(props){
    
    return(
        <div className="cards">
            {props.activeData.map((item) => (
                <Card key={item.id} item={item} cat={props.cat}/>
            ))}
        </div>
    )
}