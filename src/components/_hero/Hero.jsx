import React, { useEffect } from 'react'
import './Hero.css'
import './../../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <header id='container'>
                <div className="name-container" data-aos="fade-down" data-aos-duration="2000">
                    <p>Hi! I'm Rhoge Vhir Diaz.</p>
                </div>
            </header>

            <div className="hero-text" data-aos="fade-down" data-aos-duration="2000">
                <h1 id="aText">
                    A website developer helping clients establish their brands
                </h1>
            </div>
            <div className="details" data-aos="fade-down" data-aos-duration="2000">
                <ul>
                    <li>Frontend</li>
                    <li>UI</li>
                    <li>UX</li>
                    <li>Backend</li>
                </ul>
            </div>
        </>
    )
}

export default Hero