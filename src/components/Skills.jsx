// src/components/Skills.jsx

import React from 'react';
import  data  from "../../data";

function Skills({lang}) {
  const skillsData = data[lang].skillsSection.skills;

  return (
    <section className="text-center p-8 mt-5 mb-20 border border-white bg-white  shadow-md">

      <h2 className="text-2xl font-medium mb-8">
        {data[lang].skillsSection.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-1 gap-y-2">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-md font-medium">
            <div className=" p-4 rounded-2xl">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            </div>
            <p className="mt-4  text-gray-500">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;