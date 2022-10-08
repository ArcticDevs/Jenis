import { useEffect, useState } from 'react'
import "../styles/Carousel.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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
                    <div className='carousel-item-wrap' key={val.id}>
                        <div className='item-image'>
                            <Link to="/">
                                <motion.img src={val.image} initial={{ opacity: 1 }} whileHover={{ opacity: [0, 1], transition: { duration: 0.3 } }} onHoverStart={e => (e.currentTarget.src = val.hoverImage)} onHoverEnd={e => (e.currentTarget.src = val.image)} alt="Item_image" />
                            </Link>
                            <div className='add-icon'>
                                <AiOutlinePlus />
                            </div>
                        </div>
                        <div className="item-content">
                            <h3>
                                <Link to="/">
                                    {val.title}
                                </Link>
                            </h3>
                            <p>{val.body}</p>
                            <h6>{"$" + val.price.toFixed(2)}</h6>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    );
}

export default Carousel