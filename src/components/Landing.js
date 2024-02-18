import './Landing.css'

import React from 'react'
import { MotionConfig, motion } from 'framer-motion'

import headshot from '../images/headshot-transparent.png'

function Landing () {
    return (
        // <AnimatedPage>
            <div id="landing" className="Landing">
                <div className="content">
                    <motion.div  transition={{delay: 2, duration: .5, ease: "backInOut"}} initial={{ scale: 0 }} animate={{scale:1}}  className="profile-picture">
                        <motion.img  transition={{duration: .4}} whileHover={{scale:1.05}} whileTap={{rotateY: "360deg"}} src={headshot} alt="headshot" style={{cursor:"pointer"}}></motion.img>
                    </motion.div>
                    <div className="bio">
                        <div className="text">
                            <MotionConfig transition={{delay: 3, duration:1}} >
                                <motion.p initial={{y:-400, opacity: 0}} animate={{y: 0, opacity: 1}} className="hi-hidden">&nbsp;</motion.p>
                                <motion.p initial={{y:-400, opacity: 0}} animate={{y: 0, opacity: 1}} className="hi">Hi, </motion.p>
                                <motion.p initial={{y:-400, opacity: 0}} animate={{y: 0, opacity: 1}} className="name-sentence">My name is</motion.p>
                            </MotionConfig>
                            <motion.p transition={{duration:2}} initial={{opacity: 0}} animate={{opacity: 1}} id="name">Justin Rentie</motion.p>
                            <motion.p transition={{delay: 3, duration:1}} initial={{y:-400, opacity: 0}} animate={{y: 0, opacity: 1}} className="description">I'm a full-stack developer with a passion for front-end design. </motion.p>
                        </div>
                        <motion.div transition={{delay: 3, duration:1}} initial={{y:-400, opacity: 0}} animate={{y: 0, opacity: 1}} className="stack">
                            <p>Tech Stack: </p>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javaScript"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react"/>
                                <img src="https://www.adobe.com/content/dam/cc/us/en/products/coldfusion/coldfusion-builder/home/cf_logo_svg.svg" alt="Coldfusion" className="coldfusion"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="java"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" alt="scala"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        // </AnimatedPage>
    )
}

export default Landing