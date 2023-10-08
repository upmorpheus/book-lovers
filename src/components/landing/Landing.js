import React from "react";
import Carouselfade from "../carousel/CarouselSlow";
import slide1 from "../../assets/banner-3.png";
import slide2 from "../../assets/banner-1.jpg";
import slide3 from "../../assets/banner-2.jpg";

const Landing = () => {
    return (
        <div className="landing">
            <Carouselfade slide1={slide1} slide2={slide2} slide3={slide3} />
        </div>
    );
}

export default Landing;