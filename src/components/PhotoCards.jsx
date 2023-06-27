import React from "react";
import '../App.css'
import PhotoCard from "./PhotoCard";


export default function PhotoCards(){
    return(
        <div className="cards">
            <PhotoCard img="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"/>
            <PhotoCard img="https://www.popsci.com/uploads/2019/01/07/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg?auto=webp"/>
            <PhotoCard img="https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"/>
            <PhotoCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrz7CqMtzYFGfZZebVcPWqcKV10ki7ZdJtw&usqp=CAU"/>
            <PhotoCard img="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"/>
            <PhotoCard img="https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws="/>
            
            
        </div>
    )
}