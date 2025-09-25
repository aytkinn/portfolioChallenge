import React from 'react';
import  data  from "../../data";

function Skills({lang}) {
  const skillsData = data[lang].skillsSection.skills;

  return (
    
    <div>
      
      <section className="skills-section text-center p-8 mt-5 mb-5 border border-white bg-white ">
      
      <h2 className="text-4xl font-medium mb-8">
        {data[lang].skillsSection.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-2">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-md font-medium cursor-pointer">
            <div className=" p-4 rounded-2xl">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            </div>
            <p className="mt-4 text-gray-500">{skill.name}</p>
          </div>
        ))}
      </div>
      
      <div className="absolute -ml-9 top-1/2 -translate-y-[66px] w-[45px] h-4 bg-pink-500 rounded-lg" aria-hidden></div>

    </section>
    </div>
  );
}

export default Skills;