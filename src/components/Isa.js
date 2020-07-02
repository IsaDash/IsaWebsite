import React from 'react';
import './Isa.css';
import Scramble from 'react-scramble';
import Image from './Image'
import ScrollableAnchor from 'react-scrollable-anchor'

function Isa() {
    return (
        <section id="isa">
        <header className="isa">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
            
            <div className="container-isa">
                <Image></Image>
                <div className="text-container">

               
                <h1 className="header-text">
                    <Scramble
                        autoStart
                        text="Hey, I'm Isa and I'm an engineer."
                        steps={[
                            {
                                roll: 30,
                                action: '+',
                                type: 'forward',
                                speed: 'fast'
                            },
                            {
                                roll: 30,
                                action: '-',
                                type: 'forward',
                                speed: 'fast'

                            },
                        ]}
                    />

                </h1>
                <h1 className="p-text">
                    Welcome to my website!
                </h1>
                <div className="navigation-text">
                    <a className="navigation-text" href="#about">
                        1. about
                    </a>
                    <a className="navigation-text" href="#skills">
                        2. skills
                    </a>
                    <a className="navigation-text" href="#work">
                        3. work experience
                    </a>
                    <a className="navigation-text" href="https://github.com/IsaDash" target="_blank">
                        4. projects
                    </a>
                </div>
            
            </div>
            </div>

            
        </header>
        </section>

        
    );
}

export default Isa;
