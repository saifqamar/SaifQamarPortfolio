import React,{useState} from "react";  
import '../App.css';
// import PhotoCards from "./PhotoCards";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import data from "../data";



const Services = ()=> {
    const [activeCategory, setActiveCategory] = useState('uiux');
  
    const handleCategoryClick = (category) => {
    setActiveCategory(category);
    };
    
    
    return(
        <div className="ser-back">
            <div className="container services" id="work">
                <h1>Work</h1>
                <ul className="ser-btn">
                {Object.keys(data).map((category) => (
                    <li>
                        <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={activeCategory === category ? 'service-ui active' : 'service-ui'}>
                        {category === "uiux" ? 'UI/UX': "Web Development"}
                        </button>
                    </li>
                    )).reverse()}
                    
                </ul>
            </div>
            <div className="container">
                <Cards activeData={data[activeCategory]} cat={activeCategory}/>
                
            </div>
        </div>

    )
}

export default Services