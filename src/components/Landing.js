import './Landing.css'
import React from 'react'
import headshot from '../images/headshot-transparent.png'

function Landing () {
    return (
        <div className="Landing">
            <div className="content">
                <div className="profile-picture">
                    <img src={headshot}></img>
                </div>
                <div className="bio">
                    <div className="text">
                        <p className="hi"> Hi, </p>
                        <p className="name-sentence">My name is <span id="name">Justin Rentie</span>.</p>
                        <p className="description">I'm a full-stack developer with a passion for front-end design. </p>
                    </div>
                    <div className="stack">
                        <p>Stack: </p>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing