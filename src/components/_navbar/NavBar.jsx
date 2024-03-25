import React, { useEffect } from 'react'
import './NavBar.css'
import './../../App.css'
import './../../index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const NavBar = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <nav data-aos="fade-down" data-aos-duration="2000">
                <div id="backdrop"></div>
                <ul>
                    <li>
                        <a id="homeNav" href="#container">Home</a>
                    </li>
                    <li>
                        <a id="aboutNav" href="#about">About</a>
                    </li>
                    <li>
                        <a id="skillsNav" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a id="projectsNav" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a id="contactNav" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar