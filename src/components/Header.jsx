import DarkModeToggle from "./DarkModeToggle.jsx";



function Header({ lang, setLang }) {

  const handleLangChange = (e) => {
    e.preventDefault();
    const newLang = lang === "en" ? "tr" : "en";
    setLang(newLang);
  };

  return (
    <header className="flex flex-row-reverse p-5">
      <a
        href="#"
        onClick={handleLangChange}
        className={`ml-4 text-xs font-light rounded-md py-1 px-2 shadow-2xs`}
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
      <DarkModeToggle />
    </header>
  );
}

export default Header;