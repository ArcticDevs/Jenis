import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai"
import { motion } from "framer-motion";
import '../styles/Card.css'

const slashMotion = {
    rest: { opacity: 0, x: 0, ease: "easeIn", duration: 0.4, type: "tween" },
    hover: {
        opacity: [0, 1],
        x: [-80, 0],
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
        }
    }
};

const Card = ({ cardData }) => {

    const [btnHover, setBtnHover] = useState(false)

    return (
        <div className='card-item-wrap' key={cardData.id}>
            <div className='item-image'>
                <Link to="/">
                    <motion.img src={cardData.image} initial={{ opacity: 1 }} whileHover={{ opacity: [0, 1], transition: { duration: 0.3 } }} onHoverStart={e => (e.currentTarget.src = cardData.hoverImage)} onHoverEnd={e => (e.currentTarget.src = cardData.image)} alt="Item_image" />
                </Link>
                <motion.button className='btn add-icon' whileHover={{ transition: { duration: 0.5 } }} onHoverStart={() => setBtnHover(true)} onHoverEnd={() => setBtnHover(false)}>
                    {btnHover ? "ADD" : <AiOutlinePlus />}
                </motion.button>
            </div>
            <div className="item-content">
                <h3>
                    <Link to="/">
                        {cardData.title}
                    </Link>
                </h3>
                <p>{cardData.body}</p>
                <h6>{"$" + cardData.price.toFixed(2)}</h6>
            </div>
        </div>
    )
}

export default Card