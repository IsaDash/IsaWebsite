import React from 'react';
import './Skills.css';
import Image from './Image'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

configureAnchors({ offset: -60, scrollDuration: 800 })

function Skills() {
    return (
        <ScrollableAnchor id="skills">
            <header className="skills">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                    <h1 className="skills-container header">
                        2. skills
                    <div> 
                            <div className="technologies">
                                Technologies:
                        <ul>
                                    <li>
                                        java
                        </li>
                                    <li>
                                        python
                        </li>
                                    <li>
                                        C++
                        </li>
                                    <li>
                                        javascript
                        </li>
                                    <li>
                                        html/css
                        </li>
                        
                                </ul>

                                <ul >
                                    <li>
                                        git
                        </li>
                                    <li>
                                        react
                        </li>
                                    <li>
                                        TensorFlow
                        </li>
                                    <li>
                                        pyTorch
                        </li>
                                    <li>
                                        AWS
                        </li>
                                    <li>
                                        Spark
                        </li>
                                </ul>

                            </div>
                            <div className="courses">
                                Relevant Coursework:
                                <ul>
                          
                                    <li>
                                        Algorithms and Models of Computation (CS 374)
                        </li>
                                    <li>
                                        Data Structures (CS 225)
                        </li>
                                    <li>
                                        Computer Architecture (CS 233)
                        </li>
                                    <li>
                                    Discrete Structures (CS 173)
                                        
                        </li>
                                    <li>
                                    Software Design Studio (CS 126)
                        </li>
                                    <li>
                                        Intro to CS (CS 125)
                        </li>
                                </ul>

                                <ul>
                                    <li>
                                        Graph Theory (MATH 412)
                        </li>
                                    <li>
                                        Probability and Statistics (STAT 400)
                        </li>
                        <li>
                                        Statistical Analysis (STAT 200)
                        </li>
                                    <li>
                                        Differential Equations (MATH 441)
                        </li>
                                    <li>
                                        Linear Algebra (MATH 415)
                        </li>
                                    <li>
                                        Fundamentals of Mathematics (MATH 347)
                        </li>
                                    <li>
                                        Multivariable Calculus (MATH 241)
                        </li>
                                </ul>
                            </div>
                        </div>


                    </h1>

                </div>
            </header>
        </ScrollableAnchor>
    );
}

export default Skills;
