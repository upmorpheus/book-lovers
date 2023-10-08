import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carouselfade from "../carousel/CarouselSlow";
import slide1 from "../../assets/1.jpeg";
import slide2 from "../../assets/2.jpeg";
import slide3 from "../../assets/4.jpeg";
import slide4 from "../../assets/4.png";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import './Landing.scss';

const Books = [
    { name: "Immunity", src: book1, price: 35, views: 30 },
    { name: "Parasite Cleansing", src: book2, price: 50, views: 30 },
    { name: "Kitchen Doctor", src: book3, price: 65, views: 70 }
];

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

            <div className="books">
                {Books.map((item) =>
                    <Card className="book-card">
                        <Card.Img className="book-logo" variant="top" src={item.src} />
                        <Card.Body>
                            <Card.Text className="card-text-book">
                                <a>{item.name}</a>                                
                                <a>{item.views}</a>
                                <a>${item.price}</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>

            <div className="parellax">
                <img src={bgimg} />
            </div>

            
        </div>
    );
}

export default Landing;