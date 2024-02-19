import './Card.css'

import React from 'react'
import { motion } from 'framer-motion'

function Card ({imgSource, title, description, link, index}) {
    return (
        <motion.div transition={{delay: .5, duration:1, ease:"backInOut"}} initial={{x:-300, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{ once: true }} className="card-container">
            <div className="desktop">
                <div className="Card">
                    {index % 2 === 0 && (
                        <div className="content">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <motion.a 
                                transition={{duration: 1, repeat:Infinity, repeatType:"reverse"}}
                                initial={{scale:0.95}}
                                animate={{scale:1.1}}
                                // whileHover={{textDecoration:"bold"}}
                                // whileTap={{scale:0.9}}
                                href={link} 
                                target="_"
                            >
                                <button>view &rarr;</button>
                            </motion.a>
                        </div>
                    )}
                    <div className="image">
                        <motion.a 
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                            href={link} 
                            target="_"
                        >
                            <img src={process.env.PUBLIC_URL + imgSource} alt={title}></img>
                        </motion.a>
                    </div>
                    {index % 2 !== 0 && (
                        <div className="content">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <motion.a 
                                transition={{duration: 1, repeat:Infinity, repeatType:"reverse"}}
                                initial={{scale:0.95}}
                                animate={{scale:1.1}}
                                // whileHover={{scale:1.1}}
                                // whileTap={{scale:0.9}}
                                href={link} 
                                target="_"
                            >
                                <button>view &rarr;</button>
                            </motion.a>
                        </div>
                    )}
                </div>
            </div>
            <div className="mobile">
                <div className="Card">
                    <div className="image">
                        <a href={link} target="_">
                            <img src={process.env.PUBLIC_URL + imgSource} alt={title}></img>
                        </a>
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <motion.a 
                            transition={{duration: 1, repeat:Infinity, repeatType:"reverse"}}
                            initial={{scale:0.95}}
                            animate={{scale:1.1}}
                            // whileHover={{scale:1.1}}
                            // whileTap={{scale:0.9}}
                            href={link} 
                            target="_"
                        >
                            <button>view &rarr;</button>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card