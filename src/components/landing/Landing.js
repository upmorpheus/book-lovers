import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/images/angular.jpg';
import Slide2 from '../../assets/images/react.jpg';
import Slide3 from '../../assets/images/vue.jpg';

const Landing = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src={Slide1} alt="slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Slide2} alt="slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Slide3} alt="slide 1" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Landing;