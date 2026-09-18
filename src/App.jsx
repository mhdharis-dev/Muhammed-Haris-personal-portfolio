import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <>
      <Navbar onOpenResume={handleOpenResume} />

      <Home onOpenResume={handleOpenResume} />

      <About />

      <Services />

      <Portfolio />

      <Skills />

      <Contact />

      <Footer onOpenResume={handleOpenResume} />

      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />

      <WhatsAppButton />
    </>
  )
}

export default App