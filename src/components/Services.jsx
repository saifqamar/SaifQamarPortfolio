import React,{useState} from "react";  
import '../App.css';
// import PhotoCards from "./PhotoCards";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import data from "../data";



const Services = ()=> {
    const [activeCategory, setActiveCategory] = useState('uiux');
  
    const handleCategoryClick = (category) => {
    setActiveCategory(category);
    };

    const btns = document.querySelectorAll(".service-ui");
    btns.forEach((btn) =>{
        if(btn.id !== activeCategory){
            btn.classList.remove('active');
        }else{
            btn.classList.add('active');
        }
        btn.addEventListener('click', function(){
            console.log(btn.id)
            if(btn.id !== activeCategory){
                btn.classList.remove('active');
            }
        })
    })
    
    return(
        <div className="ser-back">
            <div className="container services" id="work">
                <h1>Work</h1>
                <ul className="ser-btn">
                    <button onClick={() => handleCategoryClick("uiux")} className="service-ui active" id="uiux">UI/UX</button>
                    <button onClick={() => handleCategoryClick("web_dev")} className="service-ui" id="web_dev">Web Dev</button>
                    {/* <button onClick={() => handleCategoryClick("photography")} className="service-ui" id="photography">Photography</button> */}
                    
                </ul>
            </div>
            <div className="container">
                <Cards activeData={data[activeCategory].slice(0,3)} cat={activeCategory}/>
                {/* <div className="show-more-btn-con">
                    <Link to={`/SaifQamarPortfolio/${activeCategory}`} style={{textDecoration:'none'}}><button className="show-more-btn contact-btn" style={{display: data[activeCategory].length > 3 ? 'block': 'none'}}>Show More</button></Link>
                </div> */}
                
            </div>
        </div>

    )
}

export default Services