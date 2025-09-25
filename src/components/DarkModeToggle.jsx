import React from "react";

function DarkModeToggle({ isDarkMode, setIsDarkMode }) {
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <div className="flex items-center space-x-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isDarkMode}
            onChange={handleToggle}
            className="sr-only peer" 
          />
          <div className="w-14 h-4 bg-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[40px] 
          peer-checked:after:border-white after:content-[''] 
          after:absolute after:top-[1px] after:left-[2px] 
          after:bg-yellow-400 after:border-gray-300 
          after:border after:rounded-full 
          after:h-3 after:w-3 
          after:transition-all
          peer-checked:bg-pink-500"></div>
        </label>
        <span className="text-xs font-medium">
          {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
        </span>
        <span className="text-xs font-medium">|</span>
      </div>
    )
};
export default DarkModeToggle; 