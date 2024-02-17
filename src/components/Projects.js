import './Projects.css'
import React from 'react'
import Card from './utility/Card'

import projects from '../data/projects.json'

function Projects()  {
    return (
        <div id="projects" className="Projects">
            <div className="container">
                <h1>Projects.</h1>
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