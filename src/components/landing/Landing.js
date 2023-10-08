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
                <Image className="image-left" src={slide4} rounded/>
                <div className="pattern-text">
                    <h1>THE WORLD’S BEST EDUCATION</h1>
                    <p>Many experts throughout history have regarded cancer salves and pastes as the
                         most thorough, safe, and efficacious way to treat cancer, especially skin and 
                         breast cancers but also cancers of other organs. In this book, Ingrid Naiman 
                         meticulously traces the use of such products in ancient India and by Hildegard of 
                         Bingen, Native Americans, and modern physicians. She provides detailed instructions 
                         for making and using the salves, a fair comparison of the pros and cons, and eight 
                         pages of full color pictures showing responses to the products. Visit Cancer Salves 
                         site for more information, answers to frequently asked questions, and a Checklist 
                         for people facing cancer.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Landing;