import './Contact.css'
import React from 'react'

import { ContactForm } from './utility/ContactForm'
import github from '../images/github_logo.png'
import linkedIn from '../images/linkedin_logo.png'
import copyright from '../images/copyright_logo.png'

function Contact() {
    return (
        <div id="contact" className="Contact">
            <div className='container'>
                <h1>Contact.</h1>
                <p>Get in touch or send me an email directly at <b>jurentie@gmail.com</b></p>
                <ContactForm />
            </div>
            <div className="footer">
                <div className="icons">
                    <a href="https://github.com/jurentie" target="_"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/jurentie/" target="_"><img src={linkedIn}></img></a>
                </div>
                <div className="copyright">
                    <img src={copyright}></img>/2024
                </div>
            </div>
        </div>
    )
}

export default Contact