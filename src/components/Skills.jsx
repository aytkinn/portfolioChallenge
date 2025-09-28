import React from 'react';
import  data  from "../data.js";
import { useSelector } from 'react-redux';

function Skills() {
  const currentLang = useSelector(state => state.language.currentLang) || 'en';
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  if (!data || !data[currentLang] || !data[currentLang].skillsSection) {
    console.error('Skills data yüklenemedi!', { data, currentLang });
    return <div>Skills data yükleniyor...</div>;
  }
  
  const skillsData = data[currentLang].skillsSection.skills;
  return (
     <section className="relative text-center m-full p-[100px] border bg-white overflow-y-hidden overflow-x-visible" style={{backgroundColor: isDarkMode ? '#2A262B' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000', borderColor: isDarkMode ? '#3A343B' : '#ffffff'}}>
      <h2 className="text-6xl font-medium mb-16" style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
        {data[currentLang].skillsSection.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-2">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-md font-medium cursor-pointer">
            <div className=" p-4 rounded-2xl">
              <img src={skill.icon} alt={skill.name} className="w-24 h-24" />
            </div>
            <p className="mt-4 text-gray-500">{skill.name}</p>
          </div>
        ))}
      </div>
        <div className='absolute w-[145px] h-10 bg-gray-700 rounded-3xl translate-y-[3px] mx-[-160px] '></div>
    </section>
  )
}

export default Skills;