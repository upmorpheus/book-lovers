import React from "react";
import Slide1 from '../../assets/images/banner-1.png';
import Slide2 from '../../assets/images/banner-2.png';
import Slide3 from '../../assets/images/banner-3.png';

const Landing = () => {
    return (
        <>
            <div class="kode-banner">
                <ul class="bxslider">
                    <li>
                        <img src={Slide1} alt="" />
                        <div class="kode-caption-2">
                            <h5>Are you searching a book...?</h5>
                            <h2>Biggest Library</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                            <div class="caption-btns">
                                <a href="#">See More</a>
                                <a href="#">Buy Now</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={Slide2} alt="" />
                        <div class="kode-caption-2">
                            <h5>Are you searching a book...?</h5>
                            <h2>Biggest Library</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                            <div class="caption-btns">
                                <a href="#">See More</a>
                                <a href="#">Buy Now</a>
                            </div>					
                        </div>
                    </li>
                    <li>
                        <img src={Slide3} alt="" />
                        <div class="kode-caption-2">
                            <h5>Are you searching a book...?</h5>
                            <h2>Biggest Library</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam.ipsam voluptatem.</p>
                            <div class="caption-btns">
                                <a href="#">See More</a>
                                <a href="#">Buy Now</a>
                            </div>					
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Landing;