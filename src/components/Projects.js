import './Projects.css'

import React, {useEffect, useRef} from 'react'
import {motion, useInView} from 'framer-motion'

import Card from './utility/Card'
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
        <div className="Projects">
            <div className="container">
                <motion.h1 ref={ref} id="projects" transition={{delay: 1, duration:1}} initial={{y:150, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{ once: true }}>Projects.</motion.h1>
                <br/><br/>
                {projects.map((project, i) => {
                    return <Card 
                                key={i}
                                imgSource={project.img} 
                                title={project.title} 
                                description={project.description} 
                                link={project.link}
                                index={i}
                            />
                })}
            </div>
        </div>
    )
}

export default Projects