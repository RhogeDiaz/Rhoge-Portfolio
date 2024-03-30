import React, { useEffect } from 'react'
import '../../index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <footer className='flex justify-between dark:text-white'>
                <div class="hidden gap-2 items-center p-4 md:flex">
                    <p>rvadiaz09@gmail.com</p>
                </div>
                <div class=" fixed bottom-12 left-0 right-0 flex justify-center">
                    <a href='/assets/pdf/Resume-Rhoge-Diaz.pdf' target='_blank'
                    ><button
                        className='text-white text-xs bg-black border-none p-3 rounded-full font-semibold md:text-base dark:text-black dark:bg-white'
                        onclick=""
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                            View Resume
                        </button>
                    </a>
                </div>

                <ul className='flex flex-wrap gap-4 items-center p-4'>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61557696951179"
                            target="_blank">
                            <p className='hidden md:block'>Facebook</p>
                            <FaFacebook className='md:hidden block' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.onlinejobs.ph/jobseekers/info/2442644"
                            target="_blank">
                            <p className='hidden md:block'>OnlineJobs</p>
                            <p className='md:hidden block font-bold'>OLJ</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rhoge-diaz/" target='_blank'>
                            <p className='hidden md:block'>LinkedIn</p>
                            <FaLinkedin className='md:hidden block' />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer