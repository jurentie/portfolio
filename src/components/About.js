import './About.css'
import React from 'react'
import headshot from '../images/headshot_2.png'

import useWindowDimensions from './utility/UseWindowDimensions'

function About () {
    const { width} = useWindowDimensions();

    return (
        // <AnimatedPage>
            <div id="about" className="About">
                <div className="container">
                    <div className="content">
                        <h1>About Me</h1>
                        {width < 993 && (
                            <div className="headshot">
                                <img src={headshot} alt="headshot"></img>
                            </div>
                        )}
                        <p>
                            Hi there! I'm Justin, a full-stack developer with a passion for front-end design, and a love for blending artistry and technology. 
                            Since I was young, I've always been drawn to the world of arts and creativity, finding joy in expressing myself 
                            through various mediums. As I embarked on my journey in software engineering, I discovered a powerful intersection 
                            where my artistic inclinations could seamlessly merge with the digital realm through front-end development.
                        </p>
                        <p>
                            Web development isn't just a career for me; it's a canvas where I can bring my ideas to life with code. 
                            From crafting elegant user interfaces to imagining the way I'd want a website to look, I thrive on the 
                            opportunity to create meaningful connections through captivating design and functionality.
                        </p>
                        <p>What excites me most about being a developer is the endless opportunity for growth and innovation. I'm 
                            constantly seeking out new challenges and pushing myself to expand my skill set, whether it's mastering the latest 
                            frameworks or honing my expertise in responsive design. I believe that continuous learning is the key to staying at 
                            the forefront of an ever-evolving industry, and I'm committed to being the best version of myself with each line of 
                            code I write.
                        </p>
                        <p>
                            When I'm not immersed in code, you can find me singing in the Denver Gay Men's Chorus, experimenting with new recipes 
                            in the kitchen, or crafting something new to wear at my sewing machine. I believe that creativity knows no bounds, and 
                            I'm passionate about bringing that energy into every project I undertake.
                        </p>
                        <br />
                        <div className="experience">
                            <h2>Experience</h2>
                            <p>- Bachelors degree in Computer Science</p>
                            <p>- 7 years experience in full-stack development</p>
                            <br/>
                            <p>Within those 7 years, I have:</p>
                            <br/>
                            <p>-2 years working with Python, Java, .Net, JavaScript, HTML, and CSS developing open source water data proessing tools and visualizations</p>
                            <p>-2 years working with Java and Springboot Framework developing API microservices</p>
                            <p>-3 years working with Java, Scala, JavaScript, React, and Coldfusion developing API microservices and various front-end UIs</p>
                            <br /><br />
                            <h2>Skills</h2>
                            <p>Java / Python / Scala / HTML / CSS / JavaScript / React / Coldfusion / Springboot / MySQL / Postgres </p>
                        </div>
                    </div>
                    {width > 992 && (
                        <div className="headshot">
                        <   img src={headshot} alt="headshot"></img>
                        </div>
                    )}         
                </div>
            </div>
        // {/* </AnimatedPage> */}
    )
}

export default About