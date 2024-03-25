import React from 'react'
import './Projects.css'
import './../../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ProjectsList from '../../assets/json/ProjectsList'

const Projects = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div id='projects' data-aos="fade-down" data-aos-duration="2000">
            <h1 className='title' >Projects</h1>
            <div className="projects">

                {ProjectsList.map((project) => {
                    return (
                        <div className='card'>
                            <a href="" className="image-wrapper">
                                <img
                                    className="an-image"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </a>
                            <p className='project-name'>{project.title}</p>
                            <p className='description'>
                                {project.description}
                            </p>
                            <div className="links">
                                <a href={project.demo} target='_blank'>
                                    <u>View Live Demo</u>
                                </a>
                                <a href={project.code} target='_blank'>
                                    <u>View Source Code</u>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects