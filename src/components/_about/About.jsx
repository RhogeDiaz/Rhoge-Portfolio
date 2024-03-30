import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div id='about' className='flex justify-center p-10 py-16 md:py-24' data-aos="fade-down" data-aos-duration="2000">
            <div className='flex flex-col-reverse justify-center items-center max-w-4xl gap-6 md:flex-row'>
                <div className='about'>
                    <div className="text-2xl font-medium mb-8 md:text-4xl dark:text-white">I'm <strong className='rhoge'><u>Rhoge</u></strong>,</div>
                    <div className="text-xl md:text-3xl dark:text-white">A frontend developer with a passion for building beautiful and user-friendly web experiences.</div>
                </div>
                <img className='aspect-square w-60 border-2 rounded-full' src="/assets/images/id pic.png" alt="" />
            </div>
        </div>

    )
}

export default About