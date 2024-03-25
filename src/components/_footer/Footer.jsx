import React, { useEffect } from 'react'
import './Footer.css'
import './../../App.css'
import '../../index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <footer>
                <div class="name">
                    <p>rvadiaz09@gmail.com</p>
                </div>
                <div class="btn-container">
                    <a href='/assets/pdf/Resume-Rhoge-Diaz.pdf' target='_blank'
                    ><button
                        onclick=""
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                            View Resume
                        </button>
                    </a>
                </div>

                <div class="links">
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=61557696951179"
                                target="_blank"
                            >Facebook</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.onlinejobs.ph/jobseekers/info/2442644"
                                target="_blank"
                            >OnlineJobs</a
                            >
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rhoge-diaz/" target='_blank'>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer