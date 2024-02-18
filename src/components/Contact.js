import './Contact.css'
import React, {useEffect, useRef} from 'react'
import { motion, useInView } from 'framer-motion'

import { ContactForm } from './utility/ContactForm'
import NavButtonSelector from './utility/NavButtonSelector'

import github from '../images/github_logo.png'
import linkedIn from '../images/linkedin_logo.png'
import copyright from '../images/copyright_logo.png'

function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView){
            NavButtonSelector("contact-button")
        }
    }, [isInView]) 

    return (
        <div id="contact" className="Contact">
            <div className='container'>
                <motion.h1 transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Contact.</motion.h1>
                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}>Get in touch or send me an email directly at <b>jurentie@gmail.com</b></motion.div>
                <br ref={ref}/>
                <motion.div transition={{delay: .5, duration: 1}} initial={{opacity:0}} whileInView={{opacity: 1}} viewport={{ once: true }}>
                    <ContactForm />
                </motion.div>
            </div>
            <motion.div transition={{delay: 1, duration:1, ease:"backInOut"}} initial={{y:-200, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }} className="footer">
                <div className="icons">
                    <a href="https://github.com/jurentie" target="_"><motion.img whileHover={{scale:1.2}} whileTap={{scale:0.9}} src={github} alt="github"></motion.img></a>
                    <a href="https://www.linkedin.com/in/jurentie/" target="_"><motion.img whileHover={{scale:1.2}} whileTap={{scale:0.9}} src={linkedIn} alt="linkedin"></motion.img></a>
                </div>
                <div className="copyright">
                    <img src={copyright} alt="copyright"></img>/2024
                </div>
            </motion.div>
        </div>
    )
}

export default Contact