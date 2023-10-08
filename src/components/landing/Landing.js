import React from "react";
import Image from 'react-bootstrap/Image';
import Carouselfade from "../carousel/CarouselSlow";
import slide1 from "../../assets/banner-3.png";
import slide2 from "../../assets/banner-1.png";
import slide3 from "../../assets/banner-2.png";
import slide4 from "../../assets/4.png";
import './Landing.scss';

const Landing = () => {
    return (
        <div className="landing">
            <Carouselfade slide1={slide1} slide2={slide2} slide3={slide3} />
            <div className="pattern">
                <Image src={slide4} rounded/>
            </div>
        </div>
    );
}

export default Landing;