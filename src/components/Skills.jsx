import React from 'react';
import  data  from "../../data";

function Skills({lang}) {
  const skillsData = data[lang].skillsSection.skills;

  return (
     <section className="relative text-center p-8 mt-5 mb-5 border border-white bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 md:left-[60%] translate-x-[65px] -translate-y-1/2 w-16 h-16 border-8 border-gray-300 rounded-full overflow-visible"
        aria-hidden
      />
       <div
        className="pointer-events-none absolute top-0 left-1/2 md:left-[60%] translate-x-24 -translate-y-[73px] w-16 h-16 border-8 border-pink-500 rounded-full "
        aria-hidden
      />
      <h2 className="text-4xl font-medium mb-16">
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
        <div className='w-[145px] h-10 bg-gray-700 rounded-3xl translate-y-[3px] mx-[-100px] overflow-visible '></div>
    </section>
  )
}

export default Skills;