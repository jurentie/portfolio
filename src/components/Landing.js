import './Landing.css'
import React from 'react'
import headshot from '../images/headshot-transparent.png'

function Landing () {
    return (
        // <AnimatedPage>
            <div id="landing" className="Landing">
                <div className="content">
                    <div className="profile-picture">
                        <img src={headshot} alt="headshot"></img>
                    </div>
                    <div className="bio">
                        <div className="text">
                            <p className="hi"> Hi, </p>
                            <p className="name-sentence">My name is <span id="name">Justin Rentie</span>.</p>
                            <p className="description">I'm a full-stack developer with a passion for front-end design. </p>
                        </div>
                        <div className="stack">
                            <p>Tech Stack: </p>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html5"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="css3"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javaScript"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react"/>
                                <img src="https://www.adobe.com/content/dam/cc/us/en/products/coldfusion/coldfusion-builder/home/cf_logo_svg.svg" alt="Coldfusion" className="coldfusion"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="java"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" alt="scala"/>
                        </div>
                    </div>
                </div>
            </div>
        // </AnimatedPage>
    )
}

export default Landing