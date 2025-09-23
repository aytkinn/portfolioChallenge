import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import HeroSection from './components/HeroSection'
import { useLocalStorage } from './hooks/useLocalStorage'


function App() {
 const [lang,setLang] = useLocalStorage("lang", "en");

  return (
    <>
     <Header lang={lang} setLang={setLang} />
     <HeroSection lang={lang} />
     <Skills lang={lang}  />
      <Profile lang={lang} />
      <Projects />
    </>
  )
}

export default App
