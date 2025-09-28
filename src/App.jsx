import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'
import ContactForm from './components/ContactForm'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function App() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (   
    <div className={isDarkMode ? "dark" : ""}>
      <Header  />
      <HeroSection onContactClick={() => setIsContactOpen(true)} />
      <Skills />
      <Profile  />
      <Projects  />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default App