import { useLocalStorage } from "../hooks/useLocalStorage"; 

function Header() {
  const [lang, setLang] = useLocalStorage("lang", "en");

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
        className={`ml-4 text-sm font-medium rounded-md py-1 px-2 shadow-md
          ${
            lang === 'en'
              ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-400'
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`
        }
      >
        {lang === 'en' ? (
          <>
            <span className="text-pink-500">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          <>
            Switch to <span className="text-pink-500">ENGLISH</span>
          </>
        )}
      </a>

      <div className="flex items-center space-x-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-yellow-400 after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
        </label>
        <span className="text-sm font-medium">DARK MODE</span>
        <span className="text-sm font-medium">|</span>
      </div>
    </header>
  );
}

export default Header;