import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Join.css"
import join_head from "../assets/join/join_head.jpg"
import join_grid_1 from "../assets/join/join_grid_1.png"
import join_grid_2 from "../assets/join/join_grid_2.png"
import join_grid_3 from "../assets/join/join_grid_3.png"
import join_grid_4 from "../assets/join/join_grid_4.png"
import join_grid_5 from "../assets/join/join_grid_5.png"
import join_grid_6 from "../assets/join/join_grid_6.png"

const JoinOurTeam = () => {
    return (
        <div>
            <div className='bg-danger bg-opacity-10 text-center py-5 mobile-section2'>
                <h1 className='text-uppercase fw-bold fs-2' style={{ letterSpacing: '1.5px' }}>team</h1>
            </div>
            <div className='join-head--grid flex-column-reverse flex-md-row text-md-start text-center pb-4 m-0 d-flex justify-content-center align-items-center'>
                <div className='join-content-wrap p-md-5 p-3'>
                    <div className='d-flex flex-column m-auto p-3'>
                        <h2 className='fw-bold text-uppercase mobile-title-text'>Lorem's Team</h2>
                        <p className='my-3 mobile-para-text'>It takes a community to make and share ice creams the way we do. We truly believe our differences are our strengths. It’s about each of us bringing our awesomeness in — our whole selves. And together we make something greater than the sum of our parts.</p>
                        <button className='btn text-uppercase me-lg-auto mt-3' type='button'>See Openings</button>
                    </div>
                </div>
                <div className='join-image'>
                    <img src={join_head} alt="Join_image" />
                </div>
            </div>
            <div className='join-grid d-flex flex-wrap gap-4 py-md-5 p-2 justify-content-center'>
                <img src={join_grid_1} alt="" />
                <img src={join_grid_2} alt="" />
                <img src={join_grid_3} alt="" />
                <img src={join_grid_4} alt="" />
                <img src={join_grid_5} alt="" />
                <img src={join_grid_6} alt="" />
            </div>
        </div>
    )
}

export default JoinOurTeam