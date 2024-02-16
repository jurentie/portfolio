import './ContactForm.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ik1hkco', 'template_7rrznv5', form.current, {
        publicKey: 'JhcUv3IzLJDBFIfJH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='ContactForm'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name" />
            <br/>
            <label>Your Email</label>
            <input type="email" name="from_email" />
            <br/>
            <label>Message</label>
            <textarea name="message" />
            <br/>
            <input type="submit" value="Send" />
        </form>
    </div>
    
  );
};