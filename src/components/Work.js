import React from 'react';
import './Work.css';
import Image from './Image'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

configureAnchors({ offset: -60, scrollDuration: 800 })

function Work() {
    return (
        <ScrollableAnchor id="work">
            <header className="work">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="work-container work-header">
                        3. work experience

                    <div className="work-text">
                            <div>
                                <div className="left-align">
                                    <a className="highlight" href="https://www.jpmorgan.com/country/US/en/jpmorgan" target="_blank">JP Morgan Chase: </a> Software Engineer Intern
                        </div>

                                <span className="right-align">June 2020 - Current</span>
                            </div>

                        </div>

                        <div className="work-text">
                            <div>
                                <div className="left-align">
                                    <a className="highlight" href="https://weavr.ai/" target="_blank">Weavr: </a> Software Engineer Intern
                            </div>
                                <span className="right-align">June 2019 - Aug 2019</span>
                            </div>


                        </div>

                        <div className="work-text">
                            <div>
                                <div className="left-align">
                                    <a className="highlight" href="https://scryanalytics.ai/" target="_blank">Scry Analytics: </a> Research Intern
                            </div>
                                <span className="right-align">June 2018 - Aug 2018</span>
                            </div>

                        </div>
                    </h1>

                </div>
            </header>
        </ScrollableAnchor>
    );
}

export default Work;
