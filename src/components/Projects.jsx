import React from 'react';
import data from '../../data';

function Projects({lang}) {
    
    const projectsData = data[lang].projects;

    return (
        <section className='projects-section p-8 border border-white  py-5'>
            <h1 className="text-center text-4xl font-medium mb-8">Projects</h1>

            <div className='flex flex-col md:flex-row justify-center gap-8'>
                {projectsData.map((project, index) => (
                    <div key={index} className='projects-card md:w-3/4 lg:w-2/3 border border-gray-300 rounded-2xl p-8 shadow-md'>

                        <div className='mb-4'>
                            <h2 className='font-medium text-2xl mb-2'>{project.title}</h2>
                            <p className='text-gray-700'>{project.description}</p>
                        </div>

                        <div className='flex flex-wrap gap-2 pt-2'>
                            {project.tags.map((tag, tagIndex) => (
                                <p key={tagIndex} className='bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium'>
                                    {tag}
                                </p>
                            ))}
                        </div>
                         <div className='flex items-center gap-6 mt-4 whitespace-nowrap'>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='inline-flex items-center text-black dark:text-white hover:underline'>
                                    {project.text1 ?? (lang === 'tr' ? "Github'da görüntüleyin" : 'View on GitHub')}
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='inline-flex items-center text-black dark:text-white hover:underline'>
                                        →   {project.text2 ?? (lang === 'tr' ? "App'e git" : 'Go to App')}
                                    </a>
                                )}
                            </div>

                        <div className="relative w-full h-auto mt-8">                            
                            <img
                                src="./src/img/projectsIcon/Rectangle37.png"
                                alt="Laptop Çerçevesi"
                                className="relative z-10 w-full h-auto"
                            />                            
                            <img
                                src={data['tr'].projects[index].imageUrl}
                                alt={`Ekran görüntüsü: ${project.title}`}
                                className="absolute top-[7%] left-[14%] w-[72%] h-[72%] object-cover z-0 rounded-sm"
                            />
                        </div>
                           
                    </div>
                ))}
            </div>
           
            <div className='mt-16 flex flex-col md:flex-row md:justify-between md:items-start gap-10'>
              <div className='md:max-w-[60%] mx-auto md:mx-0'>
                <h2 className='font-medium text-[25px] md:text-[25px] leading-[150%] tracking-[1%] text-center text-black dark:text-white'>
                  {data[lang].projectsFooter.titleLine1}
                </h2>
                <div className='w-[145px] h-4 bg-blue-300/80 rounded-md -mt-3.5 ml-18'></div>
                <h2 className='mt-3 font-medium text-[25px] md:text-[25px] leading-[150%] tracking-[1%] text-center text-black dark:text-white'>
                  {data[lang].projectsFooter.titleLine2}
                </h2>
              </div>

              <ul className='space-y-3 text-center md:text-left'>
                {data[lang].projectsFooter.links.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={
                        l.color === 'blue' ? 'text-blue-600 hover:underline' :
                        l.color === 'red'  ? 'text-red-600 hover:underline'  :
                        'text-black dark:text-white hover:underline'
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </section>
    );
}

export default Projects;