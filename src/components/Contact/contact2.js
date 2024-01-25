import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const linked = "https://www.linkedin.com/in/pam-willis-66a96a25";
    const github = "https://github.com/PamWillis";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nv6sjfc', 'template_lrd9txm', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
  
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message"  rows={5} className='msg' >placeholder='Your Message'</textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href={linked} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin icon"></i></a>
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;