// import { useEffect, useState } from 'react'
import "../styles/Carousel.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Card from './Card';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsChevronRight className={`${className} carousel-icon`} style={{ ...style }} onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <BsChevronLeft className={`${className} carousel-icon`} style={{ ...style }} onClick={onClick} />
    );
}

const Carousel = ({ carouselData }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
        ]
    };
    return (
        <div className='container-fluid px-5'>
            <Slider {...settings}>
                {carouselData.map((val, index) =>
                    <Card cardData={val} key={index} />
                )}
            </Slider>
        </div>
    );
}

export default Carousel