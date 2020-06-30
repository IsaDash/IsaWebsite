import React from 'react';
import './Projects.css';
import Image from './Image'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function Projects() {
    return (
        <header className="projects">
            <div data-aos="fade-left" >
                <h1 className="project-container header">
                    1. about
                    <p className="about-text">
                        Hello! My name is Isa Dash and I'm from San Jose, CA.
                        I am a Junior majoring in Math and Computer Science at the <span className="highlight"> University of Illinois at Urbana-Champaign.</span>
                        
                    </p>
                    <p className="about-text">
                    Currently, I am a summer Software Engineering Intern at 
                     <span className="highlight"> JP Morgan Chase</span>, building software that helps non-profits.
                      
                    </p>
                    <p className="about-text" color="red">
                    I am constantly exploring topics new to me like fullstack development, machine learning, data science, web development (which is how this website was brought to you!), and more.
                    I am gathering the tools to make a positive difference in the world with technology :)

                    </p>
                    
                </h1>

            </div>
        </header>
    );
}

export default Projects;
