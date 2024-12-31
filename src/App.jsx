import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './App.css'
import Projects from './components/Projects.jsx'
import Resume  from './components/resume.jsx'
import Contact from './components/Contact.jsx'
import Timeline from './components/Timeline.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Header/>
    <Hero/>
    <About/>
    <Timeline/>
    <Projects/>
     <Resume/>

    </>
  )
}

export default App
