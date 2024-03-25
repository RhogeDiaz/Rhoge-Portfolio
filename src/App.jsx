import { useState } from 'react'
import './App.css'
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
  const [isDark, setIsDark] = useState(false)
  const [mode, setMode] = useState('')
  const handleDarkMode = () => {
    setIsDark(!isDark)
  }
  return (
    <div data-theme={isDark ? "dark" : "light"} className='page'>
      <button className={isDark ? "light" : "dark"} onClick={() => handleDarkMode()}>{isDark ? <FaRegLightbulb className='bulb' /> : <FaLightbulb className='bulb' />}</button>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EndText />
      <Footer />
    </div>
  )
}

export default App
