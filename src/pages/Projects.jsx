import React from "react";
import { useState } from "react";
import data from "../data";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import '../App.css';
import './Projects.css'



const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('uiux');

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
        <div className="ser-back project">
            <div className="container services" id="work">
                <h1 data-aos='fade-up'>Projects</h1>
                <ul className="ser-btn">
                    <button onClick={() => handleCategoryClick("uiux")} className="service-ui active-ser" id="uiux">UI/UX</button>
                    <button onClick={() => handleCategoryClick("web_dev")} className="service-ui" id="web_dev">Web Dev</button>
                    <button onClick={() => handleCategoryClick("photography")} className="service-ui" id="photography">Photography</button>
                    
                </ul>
            </div>
            <div className="container">
                <Cards activeData={data[activeCategory]} cat={activeCategory} />
            </div>
        </div>
    )
}

export default Projects;