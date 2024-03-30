import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <header id='container'>
                <div className="flex justify-center py-4 px-12 md:pt-24" data-aos="fade-down" data-aos-duration="2000">
                    <p className='text-xl font-semibold mt-16 text-center md:text-3xl dark:text-white'>Hi! I'm Rhoge Vhir Diaz.</p>
                </div>
            </header>
            <div className='md:pb-24 md:mt-8'>
                <div className="flex flex-col items-center" data-aos="fade-down" data-aos-duration="2000">
                    <h1 className='text-center font-medium text-4xl mx-4 p-4 md:text-6xl md:mx-8 lg:mx-16 dark:text-white'>
                        A website developer helping clients establish their brands
                    </h1>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000">
                    <ul className='mt-[3%] flex justify-center gap-1 items-center md:gap-4 lg:gap-8'>
                        <li className='rounded-full py-2 px-3 bg-[var(--accent)] text-center'>Frontend</li>
                        <li className='rounded-full py-2 px-3 bg-[var(--accent)] text-center'>UI</li>
                        <li className='rounded-full py-2 px-3 bg-[var(--accent)] text-center'>UX</li>
                        <li className='rounded-full py-2 px-3 bg-[var(--accent)] text-center'>Backend</li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Hero