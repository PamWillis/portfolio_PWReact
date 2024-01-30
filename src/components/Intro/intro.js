import React from 'react';
import './intro.css';
import bg from '../../assets/splash.png';
import btnImg from '../../assets/hireme.png';
import Person from '../../assets/person.png'

const Intro = () => {
    const scrollToContact = () => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="intro">
            <div className="introContent">
                <div className="personContainer">
                    <img src={Person} alt="me" className="person" />
                </div>
                <div className="textContainer">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Pam Willis</span> <br />Software Engineer</span>
                    <p className="introPara">I am a junior software engineer with experience in creating<br />visually appealing and user-friendly websites.</p>
                    <button className="btn" onClick={scrollToContact}>
                        <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
                    </button>
                </div>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}


export default Intro;