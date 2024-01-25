import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const linked = "https://www.linkedin.com/in/pam-willis-66a96a25";
    const github = "https://github.com/PamWillis";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
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
            {/* <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </span>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>
            </div> */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
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