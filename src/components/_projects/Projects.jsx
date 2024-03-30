import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ProjectsList from '../../assets/json/ProjectsList'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div id='projects' className='flex flex-col items-center p-8 py-16 md:py-24 dark:text-white' data-aos="fade-down" data-aos-duration="2000">
            <h1 className='mb-8 font-semibold text-2xl decoration-solid underline md:text-4xl '>Projects</h1>
            <div className="flex justify-center items-center flex-wrap gap-12">

                {ProjectsList.map((project) => {
                    return (
                        <div className='border-2 flex flex-col items-center justify-center max-w-lg overflow-hidden rounded-3xl gap-4 '>
                            <a href={project.demo} target='_blank' className="overflow-hidden flex justify-center items-center flex-wrap border-b-2">
                                <img
                                    className=" aspect-video object-cover w-full object-center transition-all hover:scale-110 hover:blur-sm"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </a>
                            <p className='text-center font-bold'>{project.title}</p>
                            <p className='text-justify text-base px-8 mb-4'>
                                {project.description}
                            </p>
                            <div className="flex gap-12 mb-12">
                                <a href={project.demo} target='_blank'>
                                    <u className='hidden md:block'>View Live Demo</u>
                                    <FaExternalLinkAlt className='block scale-125 md:hidden ' />
                                </a>
                                <a href={project.code} target='_blank'>
                                    <u className='hidden md:block'>View Source Code</u>
                                    <FaGithub className='block scale-125 md:hidden' />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Projects