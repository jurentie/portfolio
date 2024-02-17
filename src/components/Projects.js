import './Projects.css'
import React, {useEffect, useRef} from 'react'
import Card from './utility/Card'
import {motion, useInView} from 'framer-motion'

import NavButtonSelector from './utility/NavButtonSelector'

import projects from '../data/projects.json'

function Projects()  {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if(isInView){
            NavButtonSelector("projects-button")
        }
    }, [isInView])

    return (
        <div id="projects" className="Projects">
            <div className="container">
                <motion.h1 transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Projects.</motion.h1>
                <br ref={ref} /><br/>
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