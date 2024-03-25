import './Skills.css'
import './../../App.css'
import skills from '../../assets/json/skillsList'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Skills = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <div className='skill-container' id='skills' data-aos="fade-down" data-aos-duration="2000">
                <p>Skills</p>
                <ul>
                    {skills.map((skill, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <img
                                        class="an-image"
                                        src={skill.image}
                                        alt={skill.title}
                                    />
                                    <p>{skill.title}</p>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Skills