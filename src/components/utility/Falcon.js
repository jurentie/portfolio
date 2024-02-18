import './Falcon.css'

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

import falcon from '../../images/falcon.png'
import han from '../../images/han_solo.png'

import useWindowDimensions from './UseWindowDimensions'

function Falcon() {
    const { width} = useWindowDimensions()
    const popUp = useAnimationControls()
    const hyperdrive = useAnimationControls()

    const handleClick = () => {
        hyperdrive.start({x: width - 150, y:0, opacity: 0})
        popUp.start({x:-20, y:-70, rotate:"360deg", scale:0})
    }

    const handleHover = () => {
        popUp.start({x:0, y:0, scale:1, rotate:"0deg"})
    }

    const handleOut = () => {
        popUp.start({x:-20, y:-70, rotate:"360deg", scale:0})
    }

    // times:[0, .10, .90, 1]

    return (
        <motion.div className="Falcon"
            transition={{delay: 3}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.div
                transition={{delay: 3, duration:2, repeat: Infinity, repeatType: "reverse"}}
                initial={{y:-10}}
                animate={{y:0}}
            >
                <motion.img
                    transition={{duration:2}}
                    initial={{x:0, y:0}}
                    animate={hyperdrive}
                    src={falcon}
                    alt="falcon" 
                    className="falcon"
                    onClick={handleClick}
                    onMouseOver={handleHover}
                    onMouseOut={handleOut}
                />
            </motion.div>
            <motion.img 
                animate={popUp}
                initial={{x:-20, y:-70, rotate:"360deg", scale:0}}
                src={han}
                className="han"
            />
            <motion.div 
                animate={popUp}
                initial={{x:-20, y:-70, rotate:"360deg", scale:0}}
                className="text-container"
            >
                <p className="click"><span style={{color:"springgreen"}}>click</span> to start hyperdrive!</p>
            </motion.div>
            
        </motion.div>
    )
}

export default Falcon