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
    
    <header className="relative flex flex-row-reverse items-center p-5 overflow-x-hidden" style={{backgroundColor: isDarkMode ? '#2A262B' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000'}}>
      
      <div className="absolute left-[220px] top-1/2 -translate-y-[70px] w-10 h-10 border-45 border-gray-700 rounded-full"></div>
       
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