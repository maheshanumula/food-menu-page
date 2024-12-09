
 import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./color.css";

import React from "react";


const Secound = () => {
    const images = [
        "photos/food.jpg","photos/pic1.jpg","photos/pic2.jpg","photos/pic3.jpg","photos/pic4.jpg","photos/pic5.jpg",
        "photos/pizza.jpg"
    ]

const Info = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };



    return ( 
        <div className="container">
            <div className="text">
                    <h1>
                    Healthy Diet<br/>
                    Everyday
                    </h1>
                   <p>order today and receive your<br/>
                   package tomorrow</p>
            </div>

            <div className="btn">
            <button>view menu</button>
            <button className="btn2" style={{backgroundColor:"white",color:"red"}}>book a table</button>
            </div>
            <h4>Breakfast--</h4>
            <h3>9:00am-11:00am</h3>
                <div className="slider-container">
                    <Slider {...Info}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} />
                            </div>
                            
                        ))}
                    </Slider>
                    
                </div>
        </div>
        
     );
}
 
export default Secound;