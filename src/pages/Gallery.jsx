import React from 'react'
import join_head from "../assets/join/join_head.jpg"
import join_grid_1 from "../assets/join/join_grid_1.png"
import join_grid_2 from "../assets/join/join_grid_2.png"
import join_grid_3 from "../assets/join/join_grid_3.png"
import join_grid_4 from "../assets/join/join_grid_4.png"
import join_grid_5 from "../assets/join/join_grid_5.png"
import join_grid_6 from "../assets/join/join_grid_6.png"
import Carousel from '../components/Carousel'
import carousel_sec3_1 from '../assets/home/carousel_section_3/carousel_sec3_1.jpg'
import carousel_sec3_2 from '../assets/home/carousel_section_3/carousel_sec3_2.jpg'
import carousel_sec3_3 from '../assets/home/carousel_section_3/carousel_sec3_3.jpg'
import hover_sec3_1 from '../assets/home/carousel_section_3/hover_sec3_1.jpg'
import hover_sec3_2 from '../assets/home/carousel_section_3/hover_sec3_2.jpg'
import hover_sec3_3 from '../assets/home/carousel_section_3/hover_sec3_3.jpg'
import hover_sec3_4 from '../assets/home/carousel_section_3/hover_sec3_4.jpg'
import hover_sec3_5 from '../assets/home/carousel_section_3/hover_sec3_5.jpg'
import hover_sec3_6 from '../assets/home/carousel_section_3/hover_sec3_6.jpg'
import carousel_sec7_1 from '../assets/home/carousel_section_7/carousel_sec7_1.jpg'
import carousel_sec7_2 from '../assets/home/carousel_section_7/carousel_sec7_2.jpg'
import carousel_sec7_3 from '../assets/home/carousel_section_7/carousel_sec7_3.jpg'
import hover_sec7_1 from '../assets/home/carousel_section_7/hover_sec7_1.jpg'
import hover_sec7_2 from '../assets/home/carousel_section_7/hover_sec7_2.jpg'
import hover_sec7_3 from '../assets/home/carousel_section_7/hover_sec7_3.jpg'
import hover_sec7_4 from '../assets/home/carousel_section_7/hover_sec7_4.jpg'
import hover_sec7_5 from '../assets/home/carousel_section_7/hover_sec7_5.jpg'
import hover_sec7_6 from '../assets/home/carousel_section_7/hover_sec7_6.jpg'
import home_sec4 from "../assets/home/home_sec4.jpg"
import home_sec5_1 from "../assets/home/home_sec5_1.png"
import home_sec5_2 from "../assets/home/home_sec5_2.png"
import home_sec5_3 from "../assets/home/home_sec5_3.png"

const Gallery = () => {
    const carouselSection7 = [
        {
            id: 1,
            image: carousel_sec7_1,
            hoverImage: hover_sec7_1            
        },
        {
            id: 2,
            image: carousel_sec7_2,
            hoverImage: hover_sec7_2
            
        },
        {
            id: 3,
            image: carousel_sec7_3,
            hoverImage: hover_sec7_3
            
        },
        {
            id: 4,
            image: carousel_sec7_1,
            hoverImage: hover_sec7_4
            
        },
        {
            id: 5,
            image: carousel_sec7_2,
            hoverImage: hover_sec7_5
            
        },
        {
            id: 6,
            image: carousel_sec7_3,
            hoverImage: hover_sec7_6
            
        },
    ]
  return (
    <div>
        <div className='join-grid d-flex flex-wrap gap-4 py-md-5 p-2 justify-content-center'>
                <img src={join_grid_1} alt="" />
                <img src={join_grid_2} alt="" />
                <img src={join_grid_3} alt="" />
                <img src={join_grid_4} alt="" />
                <img src={join_grid_5} alt="" />
                <img src={join_grid_6} alt="" />
            </div>
            <Carousel carouselData={carouselSection7} />

    </div>
  )
}

export default Gallery