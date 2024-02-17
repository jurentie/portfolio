import './Projects.css'
import React from 'react'
import Card from './utility/Card'
import {motion} from 'framer-motion'

import projects from '../data/projects.json'

function Projects()  {
    return (
        <div id="projects" className="Projects">
            <div className="container">
                <motion.h1 transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Projects.</motion.h1>
                <br/><br/>
                {projects.map((project, id) => {
                    return <Card 
                                key={id}
                                imgSource={project.img} 
                                title={project.title} 
                                description={project.description} 
                                link={project.link}
                            />
                })}
            </div>
        </div>
    )
}

export default Projects