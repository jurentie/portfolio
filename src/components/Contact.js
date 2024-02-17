import './Contact.css'
import React from 'react'
import { motion } from 'framer-motion'

import { ContactForm } from './utility/ContactForm'

import github from '../images/github_logo.png'
import linkedIn from '../images/linkedin_logo.png'
import copyright from '../images/copyright_logo.png'

function Contact() {
    return (
        <div id="contact" className="Contact">
            <div className='container'>
                <motion.h1 transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Contact.</motion.h1>
                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}>Get in touch or send me an email directly at <b>jurentie@gmail.com</b></motion.div>
                <br/>
                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}>
                    <ContactForm />
                </motion.div>
            </div>
            <motion.div transition={{delay: 2, duration:1, ease:"backInOut"}} initial={{y:-500, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }} className="footer">
                <div className="icons">
                    <a href="https://github.com/jurentie" target="_"><img src={github} alt="github"></img></a>
                    <a href="https://www.linkedin.com/in/jurentie/" target="_"><img src={linkedIn} alt="linkedin"></img></a>
                </div>
                <div className="copyright">
                    <img src={copyright} alt="copyright"></img>/2024
                </div>
            </motion.div>
        </div>
    )
}

export default Contact