import React from 'react';
import './NavigationBar.css';


function NavigationBar() {
    return (
        <header className="bar">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
            <div className="container_bar">
                <h1 className="text">
                    isa dash
                    <a className="github-link" href="https://github.com/IsaDash" target="_blank">
                        github
                    </a>
                    <a className="linkedin-link" href="https://www.linkedin.com/in/isadash/" target="_blank">
                        linkedin
                    </a>
                    <a className="email-link" href="mailto:isadash21@gmail.com">
                        email
                    </a>
                </h1>
            </div>
        </header>
    );
}

export default NavigationBar;
