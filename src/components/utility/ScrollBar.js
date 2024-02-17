import './ScrollBar.css'
import React from 'react'
import { useScroll, motion } from 'framer-motion'

function ScrollBar () {

    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div 
                className='ScrollBar'
                style={{
                    scaleX: scrollYProgress
                }}
            />
        </>
    )
}

export default ScrollBar