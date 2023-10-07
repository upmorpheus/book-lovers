import React from "react";
import './Landing.scss';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/images/angular.jpg';
import Slide2 from '../../assets/images/react.jpg';
import Slide3 from '../../assets/images/vue.jpg';

const Landing = () => {
    return (
        <Carousel fade className="landing">
            <Carousel.Item>
                <img className="d-block w-100" src={Slide1} alt="slide 1" />
                <div class="kode-caption-2">
                	<h5>Are you searching a book...?</h5>
                	<h2>Biggest Library</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                    <div class="caption-btns">
                    	<a href="#">See More</a>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Slide2} alt="slide 1" />
                <div class="kode-caption-2">
                	<h5>Are you searching a book...?</h5>
                	<h2>Biggest Library</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                    <div class="caption-btns">
                    	<a href="#">See More</a>
                        <a href="#">Buy Now</a>
                    </div>					
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Slide3} alt="slide 1" />
                <div class="kode-caption-2">
                	<h5>Are you searching a book...?</h5>
                	<h2>Biggest Library</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                    <div class="caption-btns">
                    	<a href="#">See More</a>
                        <a href="#">Buy Now</a>
                    </div>					
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Landing;