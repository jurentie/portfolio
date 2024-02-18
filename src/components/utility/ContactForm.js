import './ContactForm.css'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion, useAnimationControls} from 'framer-motion'

import thumbsUp from '../../images/thumbs-up.png'

export const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [dialog, setDialog] = useState("")

    const warnControl = useAnimationControls();
    const successControl = useAnimationControls();
    const successMessage = useAnimationControls();

    const form = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleTransitionEnd = () => {     
        console.log('hello world')
        warnControl.start({transition:{delay:1}, opacity:0})
    }

    const sendEmail = (e) => {
        e.preventDefault();

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if(name === ""){
            setDialog("Please Enter a Name")
            warnControl.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
        }
        else if(email === ""){
            setDialog("Please enter an Email")
            warnControl.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
        }
        else if(!re.test(email)){
            setDialog("Email is not valid")
            warnControl.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
        }
        else if(message === ""){
            setDialog("Please enter a Message")
            warnControl.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
        }
        else{
            // successControl.start({rotate: ["0deg", "360deg", "0deg"], x: [200, 200, 200], y: [-130, -130, -130], scale: [0, 1, 0]})
            // setDialog("Thank you for your message. I will try to get back to you soon :) ")
            // successMessage.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
            emailjs
            .sendForm('service_ik1hkco', 'template_7rrznv5', form.current, {
                publicKey: 'JhcUv3IzLJDBFIfJH',
            })
            .then(
                () => {
                    setName("")
                    setEmail("")
                    setMessage("")
                    successControl.start({rotate: ["0deg", "360deg", "0deg"], x: [200, 200, 200], y: [-130, -130, -130], scale: [0, 1, 0]})
                    setDialog("Thank you for your message. I will try to get back to you soon :) ")
                    successMessage.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setDialog("Something went wrong, please try again later.")
                    warnControl.start({opacity: [1, 1, 0], y: [-50, -50, -50]})
                },
            );
        }
    };

    return (
        <div className='ContactForm'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <motion.input whileHover={{scale:1.05}} type="text" name="from_name" onChange={handleNameChange} value={name}/>
                <br/>
                <label>Your Email</label>
                <motion.input whileHover={{scale:1.05}} type="text" name="from_email" onChange={handleEmailChange} value={email}/>
                <br/>
                <label>Message</label>
                <motion.textarea whileHover={{scale:1.05}} name="message" onChange={handleMessageChange} value={message} />
                <br/>
                <motion.input whileHover={{scale:1.05}} whileTap={{scale:0.9}} type="submit" value="Send" />
            </form>
            <motion.img 
                transition={{duration: 5 , ease: "backIn", times:[0, .5, 1]}}
                initial={{rotate:"0deg", scale: 0}}
                animate={successControl}
                src={thumbsUp} 
                alt="thumb-up" 
                className="thumbs-up"
            />
            <div className="textdiv">
            <motion.p 
                transition={{duration: 2, times:[0, .95, 1]}}
                initial={{opacity: 0}}
                animate={warnControl}
                onTransitionEnd={handleTransitionEnd}
                className="warning-message"
            >
                {dialog}
            </motion.p>
            <motion.p 
                transition={{duration: 5, times:[0, .95, 1]}}
                initial={{opacity: 0}}
                animate={successMessage}
                onTransitionEnd={handleTransitionEnd}
                className="success-message"
            >
                {dialog}
            </motion.p>
            </div>
        </div>
        
    );
};