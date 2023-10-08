import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const CarouselSide = ({ slide1, slide2, slide3 }) => {
    return (
        <Carousel interval={1000} className="carousel">
            <Carousel.Item>
                <img src={slide1} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide2} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide3} />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSide;