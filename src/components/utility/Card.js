import './Card.css'
import React from 'react'
import { motion } from 'framer-motion'

function Card ({imgSource, title, description, link}) {
    return (
        <motion.div transition={{delay: .5, duration:1, ease:"backInOut"}} initial={{x:-300, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{ once: true }} className="Card">
            <div className="image">
                <img src={process.env.PUBLIC_URL + imgSource} alt={title}></img>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_">
                    <button>view &rarr;</button>
                </a>
            </div>
        </motion.div>
    )
}

export default Card