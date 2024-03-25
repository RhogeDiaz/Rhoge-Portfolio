import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div id='about' className='about-page' data-aos="fade-down" data-aos-duration="2000">
            <div className='about-container'>
                <div className='about'>
                    <div className="about-name">I'm <strong><u id='rhoge'>Rhoge</u></strong>,</div>
                    <div className="about-description">A frontend developer with a passion for building beautiful and user-friendly web experiences.</div>
                </div>
                <img src="/assets/images/id pic.png" alt="" />
            </div>
        </div>

    )
}

export default About