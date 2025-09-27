import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'
import { useSelector } from 'react-redux'

function App() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (   
    <div className={isDarkMode ? "dark" : ""}>
      <Header  />
      <HeroSection />
      <Skills />
      <Profile  />
      <Projects  />
    </div>
  )
}

export default App