import React, { useEffect, useState } from 'react'
import './../../index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiStoneCrafting } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const NavBar = () => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <nav className='fixed flex justify-between left-0 right-0 z-10 bg-transparent backdrop-blur-md flex-wrap md:justify-center' data-aos="fade-down" data-aos-duration="2000">
                <ul className='flex flex-wrap gap-4 items-center p-4 md:hidden'>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61557696951179"
                            target="_blank">
                            <FaFacebook className='md:hidden block dark:text-white' />
                        </a>
                    </li>
                </ul>
                <ul className='flex-wrap gap-12 items-center p-4 hidden md:flex dark:text-white '>
                    <li className=' hover:underline'>
                        <a id="homeNav" href="#container">Home</a>
                    </li>
                    <li className=' hover:underline'>
                        <a id="aboutNav" href="#about">About</a>
                    </li>
                    <li className=' hover:underline'>
                        <a id="skillsNav" href="#skills">Skills</a>
                    </li>
                    <li className=' hover:underline'>
                        <a id="projectsNav" href="#projects">Projects</a>
                    </li>
                    <li className=' hover:underline'>
                        <a id="contactNav" href="#contact">Contact</a>
                    </li>
                </ul>
                <div className='md:hidden'>
                    {menu ? (
                        <ul className=' flex justify-center gap-4 p-4 rounded-full items-center dark:text-white animate-slide-in'>
                            <li>
                                <a id="homeNav" href="#container"><FaHome /></a>
                            </li>
                            <li>
                                <a id="aboutNav" href="#about"><IoNewspaperSharp /></a>
                            </li>
                            <li>
                                <a id="skillsNav" href="#skills">< GiStoneCrafting /></a>
                            </li>
                            <li>
                                <a id="projectsNav" href="#projects"><VscProject /></a>
                            </li>
                            <li>
                                <a id="contactNav" href="#contact"><BsFillTelephoneFill /></a>
                            </li>
                        </ul>
                    ) :
                        <ul className=' flex justify-center gap-4 p-4 rounded-full  items-center dark:text-white animate-slide-out'>
                            <li>
                                <a id="homeNav" href="#container"><FaHome /></a>
                            </li>
                            <li>
                                <a id="aboutNav" href="#about"><IoNewspaperSharp /></a>
                            </li>
                            <li>
                                <a id="skillsNav" href="#skills">< GiStoneCrafting /></a>
                            </li>
                            <li>
                                <a id="projectsNav" href="#projects"><VscProject /></a>
                            </li>
                            <li>
                                <a id="contactNav" href="#contact"><BsFillTelephoneFill /></a>
                            </li>
                        </ul>
                    }
                </div>
                <button onClick={toggleMenu} className='dark:text-white text-[var(--darkMode)] rounded-full p-4 md:hidden'><GiHamburgerMenu /></button>

            </nav>
        </>
    )
}

export default NavBar
