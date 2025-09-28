import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { toggleLang } from "../store/Actions/langAction.js";

function Header() {
  const dispatch=useDispatch();
  const currentLang=useSelector(state=>state.language.currentLang)||"en";
  const isDarkMode = useSelector(state => state.theme.isDarkMode);


  const handleLangChange = (e) => {
    e.preventDefault();
    dispatch(toggleLang());
  };

  return (
    
    <header className="relative flex flex-row-reverse items-center p-5 overflow-hidden" style={{backgroundColor: isDarkMode ? '#2A262B' : '#F4F4F4', color: isDarkMode ? '#ffffff' : '#000000'}}>
      
      <div className="absolute left-[240px] translate-y-[-30px] w-24 h-24 border bg-gray-700 border-gray-700 rounded-full z-30"></div>
       
      <a
        href="#"
        onClick={handleLangChange}
        className={`ml-4 text-xs font-light rounded-md py-1 px-2 shadow-2xs`}
        style={{ color: isDarkMode ? '#ffffff' : '#777777' }}
      >
        {currentLang === 'en' ? (
          <>
            <span className="text-pink-500 ">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            Switch to <span className="text-pink-500">ENGLISH</span>
          </>
        )}
      </a>
      
      <DarkModeToggle  />
      
    </header>
  );
}

export default Header;