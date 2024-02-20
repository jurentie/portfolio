import './About.css'

import React, {useEffect, useRef } from 'react'
import { Spotify } from 'react-spotify-embed'
import { motion, useInView } from 'framer-motion'

import NavButtonSelector from './utility/NavButtonSelector'
import useWindowDimensions from './utility/UseWindowDimensions'

import headshot from '../images/headshot_2.png'
import resume from '../documents/JustinRentie-Resume.pdf'

function About () {
    const { width} = useWindowDimensions()
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {

        if(isInView){
            NavButtonSelector("about-button")
        }else{
            NavButtonSelector("reset")
        }
    }, [isInView])

    return (
        // <AnimatedPage>
            <div id="about" className="About">
                <div className="container">
                    <div className="content">
                        <motion.h1 transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>About Me.</motion.h1>
                        {width < 993 && (
                            <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }} className="headshot">
                                <img src={headshot} alt="headshot"></img>
                            </motion.div>
                        )}
                        <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}> 
                            <p>
                                Hi there! I'm Justin, a full-stack developer with a passion for front-end design, and a love for blending artistry and technology. 
                                Since I was young, I've always been drawn to the world of arts and creativity, finding joy in expressing myself 
                                through various mediums. As I embarked on my journey in software engineering, I discovered a powerful intersection 
                                where my artistic inclinations could seamlessly merge with the digital realm through front-end development.
                            </p>
                            <p>
                                Web development isn't just a career for me; it's a canvas where I can bring my ideas to life with code. 
                                From crafting elegant user interfaces to imagining the way I'd want a website to look, I thrive on the 
                                opportunity to create meaningful connections through captivating design and functionality.
                            </p>
                            <p>What excites me most about being a developer is the endless opportunity for growth and innovation. I'm 
                                constantly seeking out new challenges and pushing myself to expand my skill set, whether it's mastering the latest 
                                frameworks or honing my expertise in responsive design. I believe that continuous learning is the key to staying at 
                                the forefront of an ever-evolving industry, and I'm committed to being the best version of myself with each line of 
                                code I write.
                            </p>
                            <p>
                                When I'm not immersed in code, you can find me singing in the <span className="DGMC"><a href="https://denverchoruses.org/dgmc/" target="_">Denver Gay Men's Chorus</a></span>, experimenting with new recipes 
                                in the kitchen, or crafting something new to wear at my sewing machine. I believe that creativity knows no bounds, and 
                                I'm passionate about bringing that energy into every project I undertake.
                            </p>
                            </motion.div>
                            <br ref={ref} />
                            <div className="experience">
                                <motion.h2 transition={{delay: 1, duration:1}} initial={{y:50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Experience</motion.h2>
                                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}> 
                                    <p>- Bachelors degree in Computer Science</p>
                                    <p>- 7 years experience in full-stack development</p>
                                    <br/>
                                    <p>Within those 7 years, I have:</p>
                                    <br/>
                                    <p>-2 years working with Python, Java, .Net, JavaScript, HTML, and CSS developing open source water data proessing tools and visualizations</p>
                                    <p>-2 years working with Java and Springboot Framework developing API microservices</p>
                                    <p>-3 years working with Java, Scala, JavaScript, React, and Coldfusion developing API microservices and various front-end UIs</p>
                                    <br /><br />
                                </motion.div>
                                <motion.h2 transition={{delay: 1, duration:1}} initial={{y:50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Skills</motion.h2>
                                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}> 
                                    <p>Java / Python / Scala / HTML / CSS / JavaScript / React / Coldfusion / Springboot / MySQL / Postgres </p>
                                </motion.div>
                                <br/><br/>
                                <motion.a
                                    transition={{delay: .5, duration: 1}}
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{ once: true }}
                                    href={resume} 
                                    target="_"
                                >
                                <motion.button 
                                    transition={{duration: 1, repeat: Infinity, repeatType:"reverse"}}
                                    initial={{scale:0.95}}
                                    animate={{scale:1.1}}
                                >Resume</motion.button>
                                </motion.a>
                            </div>

                    </div>
                    {width > 992 && (
                        <motion.div 
                            transition={{delay: .5, duration: 3}}
                            initial={{opacity:0}} 
                            whileInView={{opacity: 1}} 
                            viewport={{ once: true }} 
                            className="headshot"
                            // whileHover={{scale: 1.02}}
                        >
                            <motion.img transition={{duration: .4}} whileHover={{scale:1.05}} whileTap={{rotateY: "360deg"}} src={headshot} alt="headshot" style={{cursor:"pointer"}}></motion.img>
                        </motion.div>
                    )}         
                </div>
                <div className="spotify-playlist">
                    <motion.h2 transition={{delay: 1, duration:1}} initial={{y:50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>My Favorite Playlists to Code to:</motion.h2>
                            <div className="spotify-cards">
                                <motion.div 
                                    transition={{delay: 1, duration:1}} 
                                    initial={{x:-150, y:-150, opacity: 0, scale: 0}} 
                                    whileInView={{rotate:'360deg', x: 0, y: 0, opacity: 1, scale: 1}} 
                                    viewport={{ once: true }}
                                >
                                    <Spotify className="spotify" link="https://open.spotify.com/playlist/1YIe34rcmLjCYpY9wJoM2p?si=d8fe98abc8804af3" />
                                </motion.div>
                                <motion.div 
                                    transition={{delay: 1.25, duration:1}} 
                                    initial={{x:-150, y:-150, opacity: 0, scale: 0}} 
                                    whileInView={{rotate:'360deg', x: 0, y: 0, opacity: 1, scale: 1}} 
                                    viewport={{ once: true }}
                                >
                                    <Spotify className="spotify" link="https://open.spotify.com/playlist/5M7xLCQTYJL0lbKIrUn3a4?si=0f0645a425f24c99" />
                                </motion.div>
                                <motion.div 
                                    transition={{delay: 1.5, duration:1}} 
                                    initial={{x:-150, y:-150, opacity: 0, scale: 0}} 
                                    whileInView={{rotate:'360deg', x: 0, y: 0, opacity: 1, scale: 1}} 
                                    viewport={{ once: true }}
                                >
                                    <Spotify className="spotify" link="https://open.spotify.com/playlist/6Fcw3mV2jegHsnuMD8mCSo?si=80f7507e378c4464" />
                                </motion.div>
                            </div>
                </div>
            </div>
        // {/* </AnimatedPage> */}
    )
}

export default About