
import React from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";
import  data  from "../../data";

function HeroSection() {
  const [lang] = useLocalStorage("lang", "en"); 
  const heroData = data[lang].heroSection;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2">
        <h3 className="text-left font-light">{heroData.greeting} 👋</h3>
        <p className="text-left font-semibold mt-2 flex flex-col">{heroData.intro} {heroData.text} </p>
      </div>
      <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">        
        <img
            src={heroData.profileImage}
            alt="Profile"
            className="w-64 h-64 rounded-[32px] object-cover relative z-10" 
        />
        
      </div>
    </section>
  );
}

export default HeroSection;