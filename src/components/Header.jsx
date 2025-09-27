import DarkModeToggle from "./DarkModeToggle.jsx";

function Header({ lang, setLang, isDarkMode, setIsDarkMode }) {

  const handleLangChange = (e) => {
    e.preventDefault();
    const newLang = lang === "en" ? "tr" : "en";
    setLang(newLang);
  };

  return (
    
    <header className="relative flex flex-row-reverse items-center p-5 overflow-x-hidden">
      
      <div className="absolute left-[170px] top-1/2 -translate-y-[80px] w-20  h-20 border-45 border-gray-700 rounded-full"></div>
       
      <a
        href="#"
        onClick={handleLangChange}
        className={`ml-4 text-xs font-light rounded-md py-1 px-2 shadow-2xs`}
        style={{ color: '#777777' }}
      >
        {lang === 'en' ? (
          <>
            <span className="text-pink-500 ">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            Switch to <span className="text-pink-500">ENGLISH</span>
          </>
        )}
      </a>
      
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
    </header>
  );
}

export default Header;