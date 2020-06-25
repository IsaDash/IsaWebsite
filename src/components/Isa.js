import React from 'react';
import './Isa.css';
import Scramble from 'react-scramble';
import Image from './Image'

function Isa() {
    return (
        <header className="isa">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
            <div className="container">
                <Image></Image>
                <h1 className="header-text">
                    <Scramble
                        autoStart
                        text="Hey, I'm Isa."
                        steps={[
                            {
                                roll: 20,
                                action: '+',
                                type: 'random',
                                speed: 'slow'
                            },
                            {
                                roll: 50,
                                action: '-',
                                type: 'random',
                                speed: 'slowest'

                            },
                        ]}
                    />

                </h1>
                <h2 className="p-text">
                    <p>
                    I'm a Math and CS major at the University of Illinois at Urbana-Champaign class of 2022;
                </p>
                I'm a software engineering intern at JP Morgan Chase as of July 2020;


            </h2>
            </div>
        </header>
    );
}

export default Isa;
