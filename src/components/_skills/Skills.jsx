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
            <div className='flex p-4 items-center flex-col my-8 py-16 md:py-24 dark:text-white' id='skills' data-aos="fade-down" data-aos-duration="2000">
                <p className='mb-8 font-semibold text-2xl decoration-solid underline md:text-4xl'>Skills</p>
                <ul className='flex flex-wrap gap-8 justify-center'>
                    {skills.map((skill, index) => {
                        return (
                            <>
                                <li className='md:flex border-2 rounded-3xl items-center gap-1 p-2 hidden' key={index}>
                                    <img
                                        className="aspect-square w-8"
                                        src={skill.image}
                                        alt={skill.title}
                                    />
                                    <p>{skill.title}</p>
                                </li>
                                <li className='flex border-2 rounded-3xl items-center gap-1 p-2 md:hidden dark:bg-[var(--lightMode)] dark:border-none' key={index}>
                                    <img
                                        className="aspect-square w-8"
                                        src={skill.image}
                                        alt={skill.title}
                                    />
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