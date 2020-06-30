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
                <p className="navigation-text">
                    <a className="navigation-text" href="#about">
                        1. about
                    </a>
                    <a className="navigation-text" href="https://github.com/IsaDash" target="_blank">
                        2. skills
                    </a>
                    <a className="navigation-text" href="https://github.com/IsaDash" target="_blank">
                        3. featured work
                    </a>
                    <a className="navigation-text" href="https://github.com/IsaDash" target="_blank">
                        4. other
                    </a>
                </p>

                {/* <p className="p-text">
                    <p>
                    I'm a Math and CS major at the University of Illinois at Urbana-Champaign class of 2022;
                </p>
                I'm a software engineering intern at JP Morgan Chase as of July 2020;


            </p> */}

            
            </div>
            </div>
        </header>
        </section>
    );
}

export default Isa;
