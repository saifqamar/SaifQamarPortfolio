import React, { useState, useEffect } from "react";
import '../App.css';
// import PhotoCards from "./PhotoCards";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import data from "../data";



const Services = () => {
    const [activeCategory, setActiveCategory] = useState('uiux');

    useEffect(() => {
    }, [])
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const btns = document.querySelectorAll(".service-ui");
    btns.forEach((btn) => {
        if (btn.id !== activeCategory) {
            btn.classList.remove('active-ser');
        } else {
            btn.classList.add('active-ser');
        }
        btn.addEventListener('click', function () {
            console.log(btn.id)
            if (btn.id !== activeCategory) {
                btn.classList.remove('active-ser');
            }
        })
    })

    return (
        <div className="ser-back">
            <div className="container services" id="work">
                <h1 data-aos='fade-up'>Work</h1>
                <ul className="ser-btn">
                    <button onClick={() => handleCategoryClick("uiux")} className="service-ui active-ser" id="uiux">UI/UX</button>
                    <button onClick={() => handleCategoryClick("web_dev")} className="service-ui" id="web_dev">Web Dev</button>
                    {/* <button onClick={() => handleCategoryClick("photography")} className="service-ui" id="photography">Photography</button> */}
                    
                </ul>
            </div>
            <div className="container">
                <Cards activeData={data[activeCategory].slice(0, 3)} cat={activeCategory} />
                <div className="show-more-btn-con">
                    <Link to={`/SaifQamarPortfolio/projects`} style={{ textDecoration: 'none' }}><button className="show-more-btn contact-btn" style={{ display: data[activeCategory].length > 3 ? 'flex' : 'none' }}><span>Show All Projects</span> <span class="material-symbols-outlined">
                        arrow_right_alt
                    </span></button></Link>
                </div>

            </div>
        </div>

    )
}

export default Services