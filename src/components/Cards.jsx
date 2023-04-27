import React from "react";
import '../App.css';
import Card from "./Card";


export default function Cards(props){
    return(
        <div className="cards">
            {props.activeData.map((item) => (
                <Card key={item.id} item={item} />
            ))}
            {/* <Card link="images/appdesign.jpg" name="This is Finance App"/>
            <Card link="https://www.creative.onl/wp-content/uploads/2020/12/ui-design-scaled-1200x800.jpg"/>
            <Card link="https://i.pinimg.com/736x/cf/d0/0f/cfd00ff613363792d38fb666df03331e.jpg"/>
            <Card link="https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg?resize=400x0"/>
            <Card link="https://miro.medium.com/max/1200/1*3uQwzB8W3XWdgW4Mjuc9yg.gif"/> */}
            {/* <Card link="https://mir-s3-cdn-cf.behance.net/projects/404/4c607e150664475.Y3JvcCwxMzk5LDEwOTUsMCww.jpg"/> */}
        </div>
    )
}