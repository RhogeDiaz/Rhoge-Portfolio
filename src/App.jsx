import { useState } from 'react'
import EndText from './components/_endText/EndText'
import Footer from './components/_footer/Footer'
import Hero from './components/_hero/Hero'
import NavBar from './components/_navbar/NavBar'
import Projects from './components/_projects/Projects'
import Skills from './components/_skills/Skills'
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import About from './components/_about/About'

function App() {
  const [dark, setDark] = useState(false)
  const toggleDarkmode = () => {
    setDark(!dark)
  }
  return (
    <div className={dark && 'dark'}>
      <div className='dark:bg-[var(--darkMode)]'>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EndText />
        <Footer />
      </div>
      <button className='fixed bottom-3 right-3 dark:bg-white rounded-full p-3 bg-[var(--darkMode)] md:bottom-16 md:right-16 md:p-4' onClick={toggleDarkmode}>{dark ? <FaLightbulb /> : <FaRegLightbulb className='text-white' />}</button>

    </div>
  )
}

export default App
