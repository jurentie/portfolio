import './Falcon.css'

import React from 'react'
import { motion } from 'framer-motion'

import falcon from '../../images/falcon.png'

import useWindowDimensions from './UseWindowDimensions'

function Falcon() {
    const { width} = useWindowDimensions()

    return (
        <>
            <motion.img
                transition={{delay:5, duration:4, times:[0, .10, .90, 1]}}
                initial={{x:0, y:0, opacity: 0}}
                animate={{x: width - 150, y:0, opacity:[0, 1, 1,0]}}
                src={falcon}
                alt="falcon" 
                className="falcon"
            />
        </>
    )
}

export default Falcon