import React from "react";
import './skills.css';
import Javascript from '../../assets/javascript_logo.png';
import ReactLogo from '../../assets/react_logo.png';
import Tailwinds from '../../assets/tailwinds_logo.png';
import Bootstrap from '../../assets/bootstrap_logo.png';
import Illustrator from '../../assets/Illustrator_logo.png';
import Photoshop from '../../assets/Photoshop_logo.png';
import InDesign from '../../assets/Indesign_logo.png';
import Mongo from '../../assets/mongo_logo.png';
import SQL from '../../assets/SQL_logo.png';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">The Pursuit</span>
            <div className='flex'>
                <span className="skillDesc left-justify">I transitioned from a <strong>Graphic Artist</strong> in flexible packaging to Full-Stack web development, gaining expertise in <strong>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and GraphQL</strong> through intensive training at the University of North Carolina Bootcamp. This journey not only enriched my technical skills but also instilled a collaborative mindset. The program emphasized the significance of teamwork in tackling the intricacies of full-stack projects.</span>
                <span className="skillDesc left-justify">Prepared to contribute my skills and learn from others, I am well-equipped to thrive in collaborative work settings. My unique blend of technical proficiency and a problem-solving mindset, coupled with a commitment to continuous learning, positions me to take on diverse challenges in the ever-evolving field of web development.</span>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={Javascript} alt="Javascript" className="skillBarImg" />
                    <div className="skillBarText left-justify">
                        <h2>Javascript</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar flex">
                    <img src={ReactLogo} alt="React" className="skillBarImg" />
                    <div className="skillBarText left-justify">
                        <h2>React</h2>
                        <p>This portfolio is created with react to make a dynamic site.</p>
                    </div>
                </div>
                <div className="skillBar flex">
                    <div className="skillBarText left-justify">
                        <h2>HTML & CSS</h2>
                        <p>The basis of front-end developement. CSS is great for overall control of styling.</p>
                    </div>
                </div>
                <div className="skillBar flex">
                    <div className='vertical_images'>
                    <img src={Tailwinds} alt="Tailwinds" className="skillBarImg" />
                    <img src={Bootstrap} alt="Bootstrap" className="skillBarImg" />
                    </div>
                    <div className="skillBarText left-justify ml2">
                        <h2>Tailwinds & Bootstrap</h2>
                        <p>Used for components and single purpose styles, great for quick easy changes in front-end developement.</p>
                    </div>
                </div>
                <div className="skillBar flex">
                    <div className='vertical_images'>
                    <img src={SQL} alt="Tailwinds" className="skillBarImg" />
                    <img src={Mongo} alt="Bootstrap" className="skillBarImg" />
                    </div>
                    <div className="skillBarText left-justify ml2">
                        <h2>SQL & MongoDB</h2>
                        <p>Two Database programs used for backend developement.</p>
                    </div>
                </div>
                <div className="skillBar left-justify">
                    <div>
                        <img src={Illustrator} alt="Illustrator" className="skillBarImg mt5" />
                        <img src={Photoshop} alt="Illustrator" className="skillBarImg mt5" />
                        <img src={InDesign} alt="InDesign" className="skillBarImg mt5" />
                        <div className="skillBarText left-justify">
                        <h2 className='mt2'>Adobe Creative Suite</h2>
                        <p>Illustrator, Photoshop and InDesign.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;