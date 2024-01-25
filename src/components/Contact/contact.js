import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const linked = "https://www.linkedin.com/in/pam-willis-66a96a25";
    const github = "https://github.com/PamWillis";

    const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const emailUserId = process.env.REACT_APP_EMAIL_USER_ID;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(emailServiceId, emailTemplateId, form.current, emailUserId)
            .then((result) => {
                console.log(result.text);
                form.current.reset(); // Reset the form fields
                alert('Email Sent !');
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Name' name="user_name" />
                    <input type="email" className="email" placeholder='Your Email' name="user_email" />
                    <textarea name="message" rows={5} placeholder='Your Message' className='msg' />
                    <input type="submit" value="Send" className='submitBtn' />
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