import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'
import { useLocalStorage } from './hooks/useLocalStorage'


function App() {
  const [lang, setLang] = useLocalStorage("lang", "en");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header lang={lang} setLang={setLang} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection lang={lang} />
      <Skills lang={lang} />
      <Profile lang={lang} />
      <Projects lang={lang} />
    </div>
  )
}

export default App
